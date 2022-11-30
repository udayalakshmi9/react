import React, { useState } from 'react';
import TaskForm from './table';
import jsonData from './data.json';
  
function TableData() {
  const [taskData, setTaskData] = useState(jsonData);
  
  const tableRows = taskData.map((info) => {
    return (
      <tr>
        <td>{info.what_is}</td>
        <td>{info.duedate}</td>
        <td>{info.duetime}</td>
        <td>{info.repeat}</td>
        <td>{info.addlist}</td>
      </tr>
    );
  });
  
  const addRows = (data) => {
    const totalTasks = taskData.length;
    data.id = totalTasks + 1;
    const updatedTaskData = [...taskData];
    updatedTaskData.push(data);
    setTaskData(updatedTaskData);
  };
  
  return (
    <div>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>what is to be done</th>
            <th>duedate</th>
            <th>duetime</th>
            <th>repeat</th>
            <th>addlist</th>
          </tr>
        </thead>
        <tbody>{tableRows}</tbody>
      </table>
      <TaskForm func={addRows} />
    </div>
  );
}
  
export default TableData;