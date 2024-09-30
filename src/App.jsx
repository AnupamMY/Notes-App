import React from 'react'
import NavBar from './NavBar'
import FormComponent from './FormComponent'
import DisplayNotes from './DisplayNotes'
import TaskContext from './context/TaskContext'

const App = () => {
  return (
    <>
      <NavBar />
      <TaskContext>
        <main id="mainContainer">
          <FormComponent />
          <DisplayNotes />
        </main>
      </TaskContext>
    </>
  );
}
export default App