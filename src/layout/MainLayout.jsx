import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";


function MainLayuot() {
  return (
   <>
   <Navbar/>
   <Outlet/>
   </>
  )
}

export default MainLayuot