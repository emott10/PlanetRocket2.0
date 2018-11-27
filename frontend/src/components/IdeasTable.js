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

let id = 0;
function createData(title, desc) {
  id += 1;
  return { id, title, desc};
}

const rows = [
  createData('Sweaters for Snakes', 'Snakes get cool too, we want to give them sweaters to stay warm!'),
  createData('Coffee for the Homeless', 'The homeless likes coffee and we have extra, so lets find a way to hand out cups of coffee to the homeless'),
  createData('Homes for college students', 'College students in Humboldt have a hard time finding a place to live, lets fix that!'),
  createData('Cats for the Elderly', 'There is a lot of stray cats in Humboldt, lets take them and let the elderly enjoy their company'),
  createData('Balls for Kids', 'Lets collect as many sports balls we can and pass them out to the less fortunate youth arpund Humboldt County'),
];

class IdeasTable extends React.Component {

render(){
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
            {rows.map(row => {
                return (
                <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                    {row.title}
                    </TableCell>
                    <TableCell numeric>{row.desc}</TableCell>
                    <TableCell numeric> <Button> Course </Button></TableCell>
                </TableRow>
                );
            })}
            </TableBody>
        </Table>
        <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={rows.length}
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