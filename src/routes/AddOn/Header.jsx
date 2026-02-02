
import { useState } from "react";
import { Menu} from "lucide-react";
import {Mail} from "lucide-react";
import {Search} from "lucide-react";
import {Menu} from "lucide-react";
import {Sun} from "lucide-react";
import {Moon} from "lucide-react";
import {UserCircle} from "lucide-react";

export default function Header({ toggleSidebar, sidebarOpen }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <header className="h-16 bg-white shadow flex items-center justify-between px-4">

      <div className={`flex items-center gap-3 transition-transform duration-300 ${sidebarOpen ? "translate-x-52 md:translate-x-0" : ""}`}>

        <button onClick={toggleSidebar} className="md:hidden">
      
            <Menu className="w-6 h-6 text-gray-600" />
        
        </button>

        <button onClick={toggleSidebar} className="hidden md:block">
          <Menu className="w-6 h-6 text-gray-600" />
        </button>


        <div className="hidden md:flex relative">
          <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-1 rounded-md bg-gray-100"
          />
        </div>

        <button className="md:hidden p-2 bg-gray-100 rounded-full">
          <Search className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className={`flex items-center gap-4 ${sidebarOpen ? "hidden md:flex" : ""}`}>

        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer 
            ${darkMode ? "bg-gray-300" : "bg-gray-200"}`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full flex items-center justify-center transform transition
              ${darkMode ? "translate-x-6" : ""}`}
          >
            {darkMode ? <Moon size={12} color="#5b21b6"/> : <Sun size={12} color="#854d0e" />}
          </div>
        </div>
              <Mail className="w-5 h-5 text-gray-500" />

        <UserCircle className="w-6 h-6 text-gray-600" />
        <div>
          Admin
        </div>
      </div>
    </header>
  );
}
