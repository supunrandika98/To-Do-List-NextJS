"use client"

import ToDo from "@/components/ToDo";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


export default function Home() {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const onChangeHandle = (e) =>{
    const name = e.target.name;
    const value = e.target.value;

    setFormData((prev) => {
      return {...prev, [name]: value,
      };
    })
  };

  const [todoData, setToDoData] = useState([]);

  const fetchToDoData = async () =>{
    try {
      const response = await axios.get('/api');
     
      setToDoData(response.data.todos);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteToDo = async (id) =>{
    try {
      const response = await axios.delete('/api',{
        params:{
          mongoId: id
        }
      });
      
      toast.success(response.data.msg);
      await fetchToDoData();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!');
    }
  }

  const updateToDo = async (id) =>{
 
    try {
      const response = await axios.put('/api',{}, {
        params:{
          mongoId: id
        }
      });
      
      toast.success(response.data.msg);
      await fetchToDoData();
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong!');
    }
  }

  useEffect(() => {
    fetchToDoData();
  }, []);

  const onSubmitHandler = async (e) =>{
    e.preventDefault();

    try {
      //api code
      const response = await axios.post('/api', formData);
      console.log(response);

      toast.success(response.data.msg);
      setFormData({
        title: "",
        description: "",
      });
      await fetchToDoData();

    } catch (error) {

      toast.error('Something went wrong!');
      console.log(error);
    }
    console.log(formData);
  }



  return (
   <div>
    <ToastContainer />
    
    <h1 className="font-mono font-bold text-2xl"></h1>
      
    
      <form className="max-w-sm mx-auto py-14" onSubmit={onSubmitHandler}>

        <div className="mb-5">          
          <input value={formData.title} onChange={onChangeHandle} name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Title" required />
        </div>

        <div className="mb-5">        
          <textarea value={formData.description} onChange={onChangeHandle} name="description" id="description" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Description" required />
        </div>
  
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      </form>
 

     

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-5 w-[80%] mx-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className=" text-sm text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="px-6 py-3">
                         ID
                      </th>
                      <th scope="col" className="px-6 py-3">
                          TITLE
                      </th>
                      <th scope="col" className="px-6 py-3">
                          DESCRIPTION
                      </th>
                      <th scope="col" className="px-6 py-3">
                          STATUS
                      </th>
                      <th scope="col" className="px-6 py-3">
                          ACTION
                      </th>
                  </tr>
              </thead>
              <tbody>
                  {todoData.map((todo, index)=>(
                    <ToDo key={index} 
                      todo={todo} 
                      id={index} 
                      fetchToDoData={fetchToDoData}
                      deleteToDo={deleteToDo}
                      updateToDo={updateToDo} />
                  ))}
              </tbody>
          </table>
      </div>

     
   </div>
  );
}
