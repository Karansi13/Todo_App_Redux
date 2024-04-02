import { useState } from 'react'
import './App.css'
import TaskInput from './components/TaskInput'
import TaskList from './components/TaskList'

function App() {
  
  return (
    <>
      <h1 className='text-white my-8 text-5xl'>Todo App</h1>
      <TaskInput />
      <TaskList />
    </>
  )
}

export default App
