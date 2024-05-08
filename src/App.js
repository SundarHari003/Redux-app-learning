import React, { useEffect, useState } from 'react';
import TaskList from './TaskList';
import { useDispatch, useSelector } from 'react-redux';
import { AddList,UpdateLists } from './Reducer';

function App() {
  const dispatch = useDispatch();
  
  const {tododata} = useSelector((state) => state.reducerAction);
  const {temp} = useSelector((state) => state.reducerAction);
  const [Name, setName] = useState("");
  const [Task, setTask] = useState("");

  const[Edit,setEdit] =useState(false);

  const UpdateList=(value)=>{
    const TodoObject = {
      id: temp.id, // Use a unique ID (e.g., current timestamp) for each item
      Name: Name,
      Task: Task,
    };
    dispatch(UpdateLists(TodoObject));
    setName("");
    setTask("");
    setEdit(value);

  }

  const addValueObject = () => {
    const TodoObject = {
      id: Date.now(), // Use a unique ID (e.g., current timestamp) for each item
      Name: Name,
      Task: Task,
    };
    dispatch(AddList(TodoObject))
    setName("");
    setTask("");
  };
  useEffect(()=>{
    setName(temp.Name);
    setTask(temp.Task);
  },[temp])  
  useEffect(()=>{
    setName("");
    setTask("");
  },[])  
  const clear=()=>{
    setName("");
    setTask("");
  }
  console.log(Name);
  const disabled= Name===""&& Task==="";
  return (
    <form className='flex flex-col items-center text-lg'>
      <h1 className='text-center text-4xl font-semibold p-5'>To Do List</h1>
      <div className='flex flex-col items-center border border-gray-200 w-2/5 my-10 p-5 gap-5 shadow-md shadow-gray-200'>
        <div className='flex flex-col w-full gap-2'>
          <label htmlFor="Name" className='text-gray-600'>Name</label>
          <input type="text" name="Name" className='border-2 border-gray-300 focus:outline-none rounded-lg px-2' maxLength={10} value={Name} onChange={(e) => setName(e.target.value)} required/>
        </div>
        <div className='flex flex-col w-full gap-2'>
          <label htmlFor="Task" className='text-gray-600'>Task</label>
          <input type="text" name="Task" className='border-2 border-gray-300 focus:outline-none rounded-lg px-2' value={Task} onChange={(e) => setTask(e.target.value)} required/>
        </div>
        <div className='flex justify-between w-full'>
          <button type='reset' className='bg-blue-600 px-2 font-medium text-white rounded-lg shadow-blue-500 hover:shadow-lg hover:bg-blue-400' onClick={() => { setName(""); setTask(""); }}>Clear</button>
          {
            Edit && tododata.length >0?<button type="submit" className='bg-blue-600 px-2 font-medium text-white rounded-lg shadow-blue-500 hover:shadow-lg hover:bg-blue-400' onClick={()=>{UpdateList(false)}}>Update</button>
            :
            <button type="submit" className='bg-blue-600 px-2 font-medium text-white rounded-lg shadow-blue-500 hover:shadow-lg hover:bg-blue-400 disabled:blur-0 disabled:bg-blue-400' onClick={addValueObject} disabled={disabled} >Add</button>
          }
          
        </div>
      </div>
      <TaskList UpdateList={UpdateList} clear={clear}/>
    </form>
  );
}

export default App;
