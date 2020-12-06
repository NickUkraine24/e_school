import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);




const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});


const TimeTable = () => {
  const classes = useStyles();
  const timetable=[
    {id:1, Monday:["Math", "English", "PE"], Tuesday:["English", "History", "Literature"], Wednesday:["English", "Chemistry", "Math"], Thursday:["English", "Chemistry", "Math"], Friday:["English", "Chemistry", "Math"]},
    
    {id:2, monday:["English", "Chemistry", "PE"], tuesday:["Math", "Ukrainian"], wednesday:["English", "Chemistry", "Math"] }
  ]

  function getSubjects(days)
  {
    return (<ol>
      {days.map((day, key) => (
          <li key={key}>{day}</li>
      ))}
      </ol>);
  }

  function renderTimetable(timetable, index) {
    return (
      <tr key={index}>
        {/* <td>{timetable.id}</td>
        <td>{getSubjects(timetable.monday)}</td>
        <td>{getSubjects(timetable.tuesday)}</td>
        <td>{getSubjects(timetable.wednesday)}</td> */}
        {Object.keys(timetable).map(key => {
          if(key === 'id') return <td key={key}>{timetable[key]}</td> 
          else return <td key={key}> {getSubjects(timetable[key], key)}</td> 
        })}
      </tr>
    );
  }

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Class</StyledTableCell>
            <StyledTableCell>Monday</StyledTableCell>
            <StyledTableCell>Tuesday</StyledTableCell>
            <StyledTableCell>Wednesday</StyledTableCell>
            <StyledTableCell>Thursday</StyledTableCell>
            <StyledTableCell>Friday</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {timetable.map(renderTimetable)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default TimeTable;
