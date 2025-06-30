import './App.css'

import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from './redux/features/counter/counterSlice';


function App() {
  
const dispatch = useDispatch();
const {count} = useSelector((state) => state.counter);


const handleIncrement = (amount) =>{
  dispatch(increment(amount))
}
const handleDecrement = (amount) => {3
  dispatch(decrement(amount))
}

  return (
   <div>
      <h1>Counter with Redux</h1>
      <button onClick={()=>handleIncrement(1)}>Increment</button>
       <button onClick={()=>handleIncrement(5)}>Increment by 5</button>
      <div>{count}</div>
       <button onClick={()=>handleDecrement(1)}>Decrement</button>
      
   </div>
  )
}

export default App
