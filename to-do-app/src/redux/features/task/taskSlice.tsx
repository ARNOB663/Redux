import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";




interface InitialState {
    tasks: ITask[];
    filter: "all" | "High" | "Low" | "Medium"
}



const initialState:InitialState = {
    tasks: [],
 filter:"all"
}

const taskSlice = createSlice({
      name: "task",
      initialState,
      reducers: {
        addTask: (state,action:PayloadAction<ITask>) =>{
            state.tasks.push(action.payload)
        }
      }

})
export const selectTask = (state:RootState) =>{
    return state.todo.tasks
}
export const selectFilter = (state:RootState) =>{
    return state.todo.filter
}

export const  {addTask } = taskSlice.actions


export default taskSlice.reducer;