import React from 'react';
import Project from '../classes/Project';
import { DataEntry } from '../interfaces/DataEntry';

type ComponentData = {
  entry: DataEntry
}

const Entry = ({ entry }: ComponentData) => {
  const project = new Project(entry);
  return (
    <tr className='project'>
      <td>{project.title}</td>
      <td>{project.dateInfo}</td>
      <td>{project.type}</td>
      <td className='hours'>{project.hoursInfo}</td>
    </tr>
  )
}

export default Entry
