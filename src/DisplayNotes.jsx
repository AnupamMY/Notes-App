import React, { useContext } from 'react'
import { TaskApi } from './context/TaskContext';

const DisplayNotes = () => {

  let consumer = useContext(TaskApi);

  let {selected,handleSelected,multiTask,handleDelete,handleUpdate} = consumer
  let {selectedCategory} = selected
  return (
    <>
      <main className='notesContainer'>
        <h1>DisplayNotes</h1>
        <div value={selectedCategory} onChange={handleSelected}>
          <label htmlFor="">Choose Category : </label><br/>
          <div className='input'>
          <input type="radio" name="selectedCategory" value='all'/>ALL
          <input type="radio" name="selectedCategory" value='general'/>GENERAL
          <input type="radio" name="selectedCategory" value='official'/>OFFICIAL
          <input type="radio" name="selectedCategory" value='technical'/>TECHNICAL
          </div>
          
        </div>
        <section>
          <article>
            {multiTask.length === 0 ? "loading": multiTask.map((val,i)=>{
              
              return selectedCategory === "all"? (
                <>
                <div key={i}>
                    <h2>TITLE : {val.title}</h2>
                    <h3>CATEGORY:{val.category}</h3>
                    <h4>DESCRIPTION:{val.description}</h4>
                </div>
                <div>
                    <button onClick={()=>{handleUpdate(val.id)}}>Update</button>
                    <button onClick={()=>{handleDelete(val.id)}}>Delete</button>
                 </div>
                </>
              ): (selectedCategory === val.category && (
                <>
                 <div>
                     <h2>TITLE : {val.title}</h2>
                    <h3>CATEGORY:{val.category}</h3>
                    <h4>DESCRIPTION:{val.description}</h4>
                  </div>
                  <div>
                    <button onClick={()=>{handleUpdate(val.id)}}>Update</button>
                    <button onClick={()=>{handleDelete(val.id)}}>Delete</button>
                 </div>
                </>
                 
              ) )
           
            })}
          </article>
        </section>
      </main>
    </>
  );
}
export default DisplayNotes