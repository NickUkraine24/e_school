import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useStyles, StyledTableCell} from './styles';
import './Schedule.css';

const TimeTable = () => {
  const classes = useStyles();
  const timetable=[
    {
      "id":1, 
      "form":"11B",
      "Monday":["Math", "English", "PE"], 
      "Tuesday":["English", "History", "Literature"], 
      "Wednesday":["English", "Chemistry", "Math"], 
      "Thursday":["English", "Chemistry", "",  "Math"], 
      "Friday":["English", "Chemistry", "Math"]
    } 
  ]

  const getSubjects = (days) => {
    return (<ol>
      {days.map((day, key) => (
          <li key={key}>{day}</li>
      ))}
      </ol>);
  }

  const renderTimetable = (timetable, index) => {
    return (
      <tr key={index}>
        
        {Object.keys(timetable).map(key => {
          if(key  === 'form') return <td key={key}>{timetable[key]}</td> 
          
          else if(key !=='id') return <td key={key}> {getSubjects(timetable[key], key)}</td> 
        })}
      </tr>
    );
  }

  return (
    <div className="schedule">
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
    </div>
  );
}
export default TimeTable;
