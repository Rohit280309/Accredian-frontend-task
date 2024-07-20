import { ChevronDown } from "lucide-react"
import { Button } from "./ui/button"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react";

const Navbar = () => {

  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(!!localStorage.getItem("token"));

  const handleLogin = () => {
    navigate("/login")
    setIsLoggedIn(true);
  }

  const handleLogut = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  }
  

  return (
    <nav className="w-full flex p-4">
      <div className="flex justify-center w-1/2">
        <img src="/logo.png" alt="logo" />
        <Button className="bg-blue-600 hover:bg-blue-800 rounded-md ml-5">Courses <ChevronDown className="mt-1" size={25} /></Button>
      </div>
      <div className="flex items-center justify-center font-semibold w-1/2 space-x-5">
        <Link className="hover:bg-slate-300 rounded-md p-2" to="/">Refer & Earn</Link>
        <Link className="hover:bg-slate-300 rounded-md p-2" to="/">Resources</Link>
        <Link className="hover:bg-slate-300 rounded-md p-2" to="/">AboutUs</Link>
        {
          isLoggedIn ?
            <Button onClick={handleLogut} className="bg-slate-300 hover:bg-slate-400 text-black font-semibold rounded-md">Logout</Button>
            :
            <Button onClick={handleLogin} className="bg-slate-300 hover:bg-slate-400 text-black font-semibold rounded-md">Login</Button>

        }
        <Button className="bg-blue-600 hover:bg-blue-800 rounded-md ml-5">Try for free</Button>
      </div>
    </nav >
  )
}

export default Navbar