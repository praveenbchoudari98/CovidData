import React from 'react';
import { Link } from 'react-router-dom';
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


const States=(props)=>
{
    
    const classes = useStyles();
return(
    <div>
    <Navbar/>
    <TableContainer component={Paper}>
    <Table className={classes.table} aria-label="simple table">
    <TableHead>
    <TableRow >
    <TableCell>
    Names
    </TableCell>
    </TableRow>
    </TableHead>
    <TableBody >
    {props.states && props.states.length>0 ?
        props.states.map((data,i)=>
        <TableRow key={i}>
        <TableCell><Link to={`/states/${data}`} style={{textDecoration:'none',color:'#555'}}>{data}</Link></TableCell>
        </TableRow>
        )  
        :null}
        </TableBody>
        </Table>
        </TableContainer>
        </div>
        )
    }
    export default States;