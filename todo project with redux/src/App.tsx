import { useDispatch } from 'react-redux'
import { useState } from 'react'
import './App.css'
import { addTodo } from './redux/features/todoSlice';


function App() {
  const [id, setId] = useState<number>(0)
  const [text, setText] = useState<string>("")

  const dispatch = useDispatch();

const handleAddTodo = () =>{
   if (text.trim() !== "") {
     dispatch(addTodo({
      id: id,
      task: text
     }))
     setId(id + 1)
     setText("")
   }
}

  return (
    <>
      <div>
         <h2>Task ID</h2>
         <input 
           value={id} 
           type="number"
           onChange={(e) => setId(Number(e.target.value))}
         />
         <h2>Description</h2>
         <input 
           value={text} 
           type="text"
           onChange={(e) => setText(e.target.value)}
           placeholder="Enter task description"
         />
         <button onClick={handleAddTodo}>Add Task</button>
      </div>
    </>
  )
}

export default App
