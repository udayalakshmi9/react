import React, { useState } from 'react';
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import "react-datepicker/dist/react-datepicker.css"; 

function TaskForm(props) {
  const [what, setWhat] = useState('');
  const addlist = [
    'one1', 'two2', 'three3'
  ];
  const defaultOption = addlist[0];
  const repeat = [
    'one', 'two', 'three'
  ];
  const defaultOptions = repeat[0];
  
  const [duedate, setDuedate] = useState(new Date());
  const [duetime, setDuetime] = useState('10:00');
  
  const changeWhat = (event) => {
    setWhat(event.target.value);
  };
 
  const transferValue = (event) => {
    event.preventDefault();
    const val = {
      what,
      duedate,
      duetime,
      repeat,
      addlist
    };
    props.func(val);
    clearState();
  };
  
  const clearState = () => {
    setWhat('');
    setDuedate('');
    setDuetime('');
    
  };
  
  
  return (
    <div>
      <label>What is to be done</label>
      <input type="text" value={what} onChange={changeWhat} />
      <br/>
      <label>Due Date</label>
      
      <DatePicker selected={duedate} onChange={(date) => setDuedate(date)} />
      <br/>
      <label>Due Time</label>
     
      <TimePicker onChange={setDuetime} value={duetime} />
      <br/>
     
      <label>Repeat</label>
      <Dropdown options={repeat} onChange={this._onSelect} value={defaultOptions} placeholder="Select an option" />
 
      <br/>
      <label>Add to list</label>
      <Dropdown options={addlist} onChange={this._onSelect} value={defaultOption} placeholder="Select an option" />
 
      <br/>
      <button onClick={transferValue}><h2> +</h2></button>
    </div>
  );
}
  
export default TaskForm;

