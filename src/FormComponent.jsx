import React, { useContext } from 'react'
import { TaskApi } from './context/TaskContext';
import { v4 as uuidv4 } from 'uuid';

const FormComponent = () => {

  //?Step3 : consumer part
  let consumer = useContext(TaskApi);


  let { inputData,setInputData, handleChange, multiTask, setMultiTask } = consumer;
  let {title,category,description}=inputData

    let handleSubmit = (e) => {
      e.preventDefault();
      //!pass data into multiTask state variable
      setMultiTask([...multiTask, inputData]);
      setInputData({
        title: "",
        description: "",
        category: "",
        id: uuidv4() //?generate new Id for next data
      });
    }

  return (
    <>
      <main className="formContainer">
        <h1>TAKE NOTES BELOW</h1>
        <form onSubmit={handleSubmit} className="formBlock">
          <section>
            <label htmlFor="">TITLE</label>
            <div>
              <input type="text" placeholder="Please give title for notes" value={title} name="title"
                onChange={handleChange}/>
            </div>
          </section>
          <section>
            <label htmlFor="">DESCRIPTION</label>
            <div>
              <textarea id="" rows={10} cols={50} placeholder="Please write your notes here." value={description} name="description" onChange={handleChange}></textarea>
            </div>
          </section>
          <section className='ctg'>
            <label htmlFor="">CATEGORY</label>
            <select  name="category" id="" value={category} onChange={handleChange}>
              <option value="">---select--</option>
              <option value="general">GENERAL</option>
              <option value="official">OFFICIAL</option>
              <option value="technical">TECHNICAL</option>
            </select>
            
          </section>
          <section>
            <button >SUBMIT NOTE</button>
          </section>
        </form>
      </main>
    </>
  );
}
export default FormComponent

//!When we provide "multiple input options" for the user "value attr,onChange of react" should be given "immediate parent tag of input options"
//?drop-down,checkbox,radio btn