import { createBrowserRouter } from "react-router" 
import App from "@/App"
import Tasks from "@/pages/Tasks"
import User from "@/pages/User"


const router = createBrowserRouter([
    {
        path:'/',
        element:<App/>,
        children:[
            {
                path:'users',
                Component:User
            },
             { 
                index :true,
               // path:'tasks',
                Component: Tasks
            },
             { 
               
                path:'tasks',
                Component: Tasks
            },

        ]
    },
    
])

export default router


