import { createSlice } from "@reduxjs/toolkit";



 interface Todo {
     id:number
     task:string
}
 interface Todostate {
    todos:Todo[]
}

export const initialState:Todostate = {
    todos:[]
}
export const todoSlice =  createSlice({
    name: 'todolist',
    initialState,
    reducers:{
       addTodo: (state,action) =>{
        state.todos.push(action.payload)
       },
      removeTodo:(state,action) =>{
       state.todos = state.todos.filter(todo => todo.id !== action.payload);
      }
    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer