import React, { useState } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {DeleteList,EditList} from './Reducer'
const TaskList = ({UpdateList,clear}) => {
  const dispatch=useDispatch();
  const {tododata} = useSelector((state) => state.reducerAction);
 const UpdatingList=(value)=>{
  dispatch(EditList(value));
  
 }
  
  return (
    <div className='w-full flex justify-center'>
      <div className='border rounded-md border-gray-300 w-2/5'>
        <table className='w-full rounded-md'>
          <thead className='bg-gray-500'>
            <tr className='border-b border-b-gray-300'>
              <th className='w-3/12 border-e border-e-gray-300'>Name</th>
              <th className='w-8/12 border-e border-e-gray-300'>Task</th>
              <th className='p-3'>Action</th>
            </tr>
          </thead>
          <tbody>
            { tododata.length>0?
              tododata.map((todo)=>(
                <tr className=' border-b border-b-gray-300'>
                  <td className='w-3/12 border-e border-e-gray-300 text-center'>{todo.Name}</td>
                  <td className='w-8/12 border-e border-e-gray-300 text-center'>{todo.Task}</td>
                  <td className=' w-28 border-e border-e-gray-300 flex items-center justify-between'><MdEdit size={32} className='w-full text-center text-blue-500 cursor-pointer hover:text-blue-800' onClick={()=>{UpdatingList(todo); UpdateList(true);}}/><MdDelete size={32} className='w-full text-center text-blue-500 cursor-pointer hover:text-red-700' onClick={()=>
                    {dispatch(DeleteList(todo.id))
                     clear()}}/></td>
                </tr>
              ))
              :
              <tr>
                <td className=" text-xl font-semibold text-center py-5 italic text-gray-700" colSpan={3}>Nothind Added</td>
              </tr>
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
