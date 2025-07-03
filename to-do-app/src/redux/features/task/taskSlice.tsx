import type { RootState } from "@/redux/store";
import type { ITask } from "@/types";
import { createSlice } from "@reduxjs/toolkit";



interface InitialState {
    tasks: ITask[];
    filter: "all" | "High" | "Low" | "Medium"
}



const initialState:InitialState = {
    tasks: [
        {
        id: "200",
        title: "init",
        description: "create Home page and routing",
        dueDate: "2025",
        isCompleted: false,
        priority:"High"
    },
     {
        id: "201",
        title: "craete github repo",
        description: "create Home page and routing",
        dueDate: "2025",
        isCompleted: false,
        priority:"Low"
    }
],
 filter:"all"
}

const taskSlice = createSlice({
      name: "task",
      initialState,
      reducers: {

      }

})
export const selectTask = (state:RootState) =>{
    return state.todo.tasks
}
export const selectFilter = (state:RootState) =>{
    return state.todo.filter
}

export default taskSlice.reducer;