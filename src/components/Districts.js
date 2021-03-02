import React from 'react';
import { Navbar } from './Navbar';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const Districts=(props)=>
{    
    const classes = useStyles();
return(
    <div>
    <Navbar/>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
        {props.districts && props.districts.length>0 ?
            props.districts.slice(0,1).map((data,i)=>
            <TableRow key={i}>
            <TableCell> <b>District</b></TableCell>
            <TableCell> <b>Male {data.male_count}</b></TableCell>
            <TableCell> <b>Female {data.female_count}</b></TableCell>
            
            <TableCell> <b>Unknown {data.Unknown}</b></TableCell>
            
            </TableRow>
      )
      :null}
    </TableHead>
    <TableBody>
    {props.districts && props.districts.length>0 ?
        props.districts.map((data,i)=>
        <TableRow key={i}>
        <TableCell>{data.dist}</TableCell>
        <TableCell>{data.M}</TableCell>
        <TableCell>{data.F}</TableCell>
        <TableCell>{data.U}</TableCell>
        </TableRow>
        )  
        :null}
        </TableBody>
    </Table>
    </TableContainer>
    </div>
    )
}
export default Districts;