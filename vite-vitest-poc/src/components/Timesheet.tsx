import React, { useEffect, useState } from 'react';
import { DataEntry } from '../interfaces/DataEntry';
import Entry from './Entry';
import './Timesheet.scss';
import data from '../data/timesheet.json';

const Timesheet = () => {
  const entry: DataEntry[] = [];
  const [timesheet, setTimesheet] = useState(entry);

  useEffect(() => {
    setTimesheet(data);
  }, [timesheet]);
  
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Project</th>
            <th>Date</th>
            <th>Annotation</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {timesheet.map(entry => <Entry entry={entry} key={entry.id} />)}
        </tbody>
      </table>
    </div>
  );
}

export default Timesheet
