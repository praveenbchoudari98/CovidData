import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loading from './Loading';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Affected=(props)=>
{    
    const classes = useStyles();
return(
    <div>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell> <b>Entry Id</b></TableCell>
            <TableCell> <b>District</b></TableCell>
            <TableCell> <b>Date Announced</b></TableCell>
            <TableCell> <b>Current Status</b></TableCell>
            <TableCell> <b>Notes</b></TableCell>
            </TableRow>
    </TableHead>
    <TableBody>
    {props.patients && props.patients.length>0 ?
        props.patients.map((data,i)=>
        <TableRow key={i}>
        <TableCell>{data.entryid}</TableCell>
        <TableCell>{data.detecteddistrict===''?`Unknown`:data.detecteddistrict}</TableCell>
        <TableCell>{data.dateannounced}</TableCell>
        <TableCell>{data.currentstatus}</TableCell>
        <TableCell>{data.notes}</TableCell>
        </TableRow>
        )  
        :<Loading /> }
        </TableBody>
    </Table>
    </TableContainer>
    </div>
    )
}
export default Affected;