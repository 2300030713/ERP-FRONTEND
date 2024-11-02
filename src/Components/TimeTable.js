import { height } from '@mui/system';
import React, {useState} from 'react'

const TimeTable = () => {
    const[filterText,setFilterText]=
    useState('');
    const [data,setDate]=useState([
        {Day:'Monday', Hours: '1-2',Course: 'MSWD',Room: 'C017',LTPS: 'P'},
        {Day:'Monday', Hours: '3-4',Course: 'MSWD',Room: 'C017',LTPS: 'P'},
        {Day:'Monday', Hours: '5-6',Course: 'MSWD',Room: 'C017',LTPS: 'P'},
        {Day:'Tuesday', Hours: '1-2',Course: 'MATHS',Room: 'M305',LTPS: 'S'},
        {Day:'Tuesday', Hours: '3-4',Course: 'MATHS',Room: 'M305',LTPS: 'S'},
        {Day:'Tuesday', Hours: '5-6',Course: 'MATHS',Room: 'M305',LTPS: 'S'},
        {Day:'Tuesday', Hours: '7-8',Course: 'MATHS',Room: 'M305',LTPS: 'S'},
        {Day:'Wednesday', Hours: '1-2',Course: 'LINUX',Room: 'C413B1',LTPS: 'L'},
        {Day:'Wednesday', Hours: '3-4',Course: 'LINUX',Room: 'C413B1',LTPS: 'L'},
        {Day:'Wednesday', Hours: '5-6',Course: 'LINUX',Room: 'C413B1',LTPS: 'L'},
        {Day:'Thursday', Hours: '1-2',Course: 'AOOP',Room: 'E005',LTPS: 'L'},
        {Day:'Thursday', Hours: '3-4',Course: 'AOOP',Room: 'E005',LTPS: 'L'},
        {Day:'Thursday', Hours: '5-6',Course: 'AOOP',Room: 'E005',LTPS: 'L'},
        {Day:'Thursday', Hours: '7-8',Course: 'AOOP',Room: 'E005',LTPS: 'L'},
        {Day:'Friday', Hours: '1-2',Course: 'AIML',Room: 'C506',LTPS: 'P'},
        {Day:'Friday', Hours: '3-4',Course: 'AIML',Room: 'C506',LTPS: 'P'},
        {Day:'Friday', Hours: '5-6',Course: 'AIML',Room: 'C506',LTPS: 'P'},
        {Day:'Saturday', Hours: '1-2',Course: 'DBMS',Room: 'C318',LTPS: 'S'},
    ]);

    const filteredData = data.filter(item =>
        item.Course.toLowerCase().includes(filterText.toLowerCase()) ||
        item.Day.toLowerCase().includes(filterText.toLowerCase())
      );
  return (
    <div className='s'> 
      <input 
      type="text"
      placeholder="Filter by week"
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
      />
       <ul>
        {filteredData.map((item, index) => (
          <li key={index}>
            {item.Day} - {item.Hours} - {item.Course} - {item.Room} - {item.LTPS}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TimeTable

