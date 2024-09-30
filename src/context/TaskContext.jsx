//! From "TaskContext.jsx(Sender)" we are sending data to "FormComponent.jsx" and "DisplayNotes.jsx" with help of "Context Api"
import React, { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

//?step 1:create a context
export let TaskApi=createContext()       //createContext() methods it return "Component(ContextApi)"-->to store Component take first letter of variable as Capital

const TaskContext = (props) => {

    // console.log("TaskContext",props);//!obj {children:value}
    
    //!to store formdata
    let [inputData, setInputData] = useState({
      title: "",
      description: "",
      category: "",
      id: uuidv4()
    });
  //To store selected category
    let [selected,setSelected] = useState({
      selectedCategory:"all"
    })

     let handleSelected = (e)=>{
      let {name,value} = e.target
      setSelected({...setSelected,[name]:value})
     } 
    //!To store multiple notes
    let [multiTask,setMultiTask]=useState([])


    //!handle changes in form
    let handleChange = (e) => {
        let { name, value } = e.target
        setInputData({...inputData,[name]:value})
    }
 

    //let delete select element 
    let handleDelete = (id)=>{
      console.log("deleted")

       let filterData  = multiTask.filter((val)=>{
           return val.id !== id
       }) 
       setMultiTask(filterData)
    }

    //!to update selected Element 
    let handleUpdate =(id)=>{
       let Update = multiTask.find((val)=>{
         return val.id === id
       })
       console.log(Update)
       setInputData({
        title: Update.title,
      description: Update.description,
      category: Update.category,
      id: Update.id
       })
      }
    return (
      //?Step 2 : Context Provider
      <TaskApi.Provider value={{ inputData, handleChange,multiTask,setMultiTask,setInputData,selected,setSelected
        ,handleSelected,handleDelete,handleUpdate
      }}>
        {props.children} {/* <FormComponent /> <DisplayNotes /> */}
      </TaskApi.Provider>
    );
}
export default TaskContext