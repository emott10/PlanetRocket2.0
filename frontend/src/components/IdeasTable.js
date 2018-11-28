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

    

    render(){
        return (
            <div>
            <Paper className={this.props.root}>
            <Table className={this.props.table}>
                <TableHead>
                <TableRow>
                    <TableCell numeric style={{textAlign:'center'}}>Title</TableCell>
                    <TableCell numeric style={{textAlign:'center'}}>Description</TableCell>
                    <TableCell numeric style={{textAlign:'center'}}>Course</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.props.rows.map(row => {
                    return (
                    <TableRow key={row._id}>
                        <TableCell component="th" scope="row" style={{textAlign:'center'}}>
                        {row.title}
                        </TableCell>
                        <TableCell numeric style={{textAlign:'center'}}>{row.initialDescription}</TableCell>
                        <TableCell numeric style={{textAlign:'right'}}> 
                        <ListItem  style={{width:'100%'}} button component={Link} to="/canvas/hftCourse" type="submit" onSubmit = {(event) => this.handleCanvasesClick(event)}> <Button>Take a course to find your target audience!</Button></ListItem></TableCell>
                    </TableRow>
                    );
                })}
                </TableBody>
            </Table>

            </Paper>
            </div>
        );
    }
}

export default withStyles(styles)(IdeasTable);

/*
            <TablePagination
                rowsPerPageOptions={[5, 10, 25]}
                component="div"
                count={this.props.rows.length}
                backIconButtonProps={{
                    'aria-label': 'Previous Page',
                }}
                nextIconButtonProps={{
                    'aria-label': 'Next Page',
                }}
                />*/
