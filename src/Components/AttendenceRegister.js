import React , { useState } from 'react'
const PresenceButton = () => {
    const [status, setStatus] = useState("Present");
    const [color, setColor] = useState("green");
  
    function toggleStatus() {
      if (status === "Present") {
        setStatus("Absent");
        setColor("red");
      } else {
        setStatus("Present");
        setColor("green");
      }
    }
  
    return (
      <button style={{ backgroundColor: color }} onClick={toggleStatus}>
        {status}
      </button>
    );
  };
  
const AttendenceRegister = () => {
 
  return (
    <div className="jayathi"  style={{flexdirection:'row'}}>
    
    <table>
      <tr>
        <th>Name</th>
        <th>ID Number</th>
        <th>Branch</th>
        <th>Year</th>
        <th>Attendence</th>
      </tr>
      <tr>
        <td>Deepika</td>
        <td>23000xxxxx</td>
        <td>CSE</td>
        <td>Second Year</td>
        <td><PresenceButton/></td>
      </tr>
      <tr>
      <td>Jeevani</td>
        <td>23000xxxxx</td>
        <td>ECE</td>
        <td>Second Year</td>
        <td><PresenceButton/></td>
      </tr>
      <tr>
      <td>Bhargavi</td>
        <td>23000xxxxx</td>
        <td>AI-DS</td>
        <td>Second Year</td>
        <td><PresenceButton/></td>
      </tr>
      <tr>
      <td>Niharika</td>
        <td>23000xxxxx</td>
        <td>ARTS</td>
        <td>Second Year</td>
        <td><PresenceButton/></td>
      </tr>
      <tr>
      <td>Jabilli</td>
        <td>23000xxxxx</td>
        <td>CSE-IT</td>
        <td>Second Year</td>
        <td><PresenceButton/></td>
      </tr>
      </table>
</div>
  
  )
}

export default AttendenceRegister


