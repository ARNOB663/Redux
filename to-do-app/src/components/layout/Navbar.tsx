import { Link } from "react-router";
import { ModeToggle } from "../mode-toggler";

export default  function Navbar() {

  return (
       <nav className="max-w-7xl mx-auto h-16 justify-between flex items-center gap-3 px-5">
          <div className="flex items-center">
            <span className="font-bold ml-2" >Task</span>
            <Link to="/">Task</Link>
            <Link to="/users">user</Link>
          </div>
          
            
          
          <div className="ml-auto">
            <ModeToggle></ModeToggle>
          </div>
       </nav>


  )


}