import React from 'react'

const ToDo = (props) => {
    console.log(props)
  return (
    
    <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200">
        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
             {props.id + 1}
        </th>
        <td className="px-6 py-4">
            {props.todo.title}
        </td>
        <td className="px-6 py-4">
            {props.todo.description}
        </td>
        <td className="px-6 py-4">
            {props.todo.isCompleted ? <span className="text-green-600 dark:text-green-500">Completed</span> : <span className="text-red-600 dark:text-red-500">Pending</span>}
        </td>
        <td className="px-6 py-4 flex justify-start gap-5">
            <a onClick={()=> props.updateToDo(props.todo._id)}  className="font-medium cursor-pointer text-blue-600 dark:text-blue-500 hover:underline">Done</a>
            <a onClick={()=> props.deleteToDo(props.todo._id)} className="font-medium cursor-pointer text-red-600 dark:text-red-500 hover:underline">Delete</a>
        </td>
    </tr>
 
  )
}

export default ToDo
