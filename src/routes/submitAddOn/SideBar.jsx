
import { Book } from "lucide-react";
import { Layers } from "lucide-react";
import { Headphones } from "lucide-react";
import { Video } from "lucide-react";

const sidebarItems = [
  { id: 1, icon: Book, label: "All Books" },
  { id: 2, icon: Layers, label: "DreamBoard" },
  { id: 3, icon: Headphones, label: "Audio" },
  { id: 4, icon: Video, label: "Video" },
];

export default function Sidebar({ sidebarOpen }) {
  return (
    <aside  className={` bg-white shadow h-full overflow-hidden transition-[width] duration-300 fixed md:static z-20 ${sidebarOpen ? "w-52" : "w-0 md:w-16"} `} >
      <div className={`h-16 flex items-center justify-center font-bold text-lg ${sidebarOpen ? "block" : "hidden md:flex"}`} >
        ownAi
      </div>

      <nav className="flex flex-col items-center gap-6 mt-6">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.id} icon={<item.icon />} text={item.label} open={sidebarOpen} />
        ))}
      </nav>
    </aside>
  );
}

function SidebarItem({ icon, text, open }) {
  return (
    <div className="flex items-center gap-3 cursor-pointer text-gray-400 hover:bg-gray-100 p-2 rounded w-full justify-center md:justify-start md:px-4">
      {icon}
      {open && <span className=" md:inline">{text}</span>}
    </div>
  );
}
