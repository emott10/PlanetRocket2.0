import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TablePagination from '@material-ui/core/TablePagination';
import { Button } from 'reactstrap';
import axios from 'axios';
import ipAddress from '../config/ipAddress';
import { ListItem } from '@material-ui/core';
import { Link } from "react-router-dom";


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});




class IdeasTable extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            rows:[]
        }
    }

    componentDidMount(){

        var self = this;
        var getIdeasUrl = ipAddress + ':3001/api/idea/' + this.props.userKey + '/userIdeas/' + this.props.user;

        axios.get(getIdeasUrl).then((response) => {
            
            self.setState({
                rows : response.data
            });

        });
    }

    render(){
      var btnStyle = {
            backgroundColor: 'black',
            color: 'white',
        };
        return (
            <div>
            <Paper className={this.props.root}>
            <Table className={this.props.table}>
                <TableHead>
                <TableRow>
                    <TableCell numeric>Title</TableCell>
                    <TableCell numeric>Description</TableCell>
                    <TableCell numeric>Course</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.state.rows.map(row => {
                    return (
                    <TableRow key={row._id}>
                        <TableCell component="th" scope="row">
                        {row.title}
                        </TableCell>
                        <TableCell numeric>{row.initialDescription}</TableCell>
                        <TableCell numeric> <ListItem button component={Link} to="/canvas/hftCourse" type="submit" onSubmit = {(event) => this.handleCanvasesClick(event)}>Take a course to find your target audience!</ListItem></TableCell>
                    </TableRow>
                    );
                })}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={this.state.rows.length}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                />
            </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(IdeasTable);