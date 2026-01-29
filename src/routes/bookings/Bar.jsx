
import { BookOpen, LayoutDashboard, Bell, BarChart, Box } from "lucide-react";

export default function Sidebar({ collapsed, toggle }) {
  return (
    <aside
      onClick={toggle}  // 🔥 click anywhere to toggle
      className={`
        h-screen bg-white shadow-md
        transition-all duration-300
        cursor-pointer
        ${collapsed ? "w-20" : "w-64"}
      `}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-center ">
        <span className="text-xl"></span>
        {!collapsed && <span className="ml-2 font-bold">Book Panel</span>}
      </div>

      {/* Menu */}
      <nav className="p-3 space-y-2 text-gray-600">
        <MenuItem icon={<LayoutDashboard />} label="Dashboard" collapsed={collapsed} />
        <MenuItem icon={<BarChart />} label="Analytics" collapsed={collapsed} />
        <MenuItem icon={<Bell />} label="Notifications" collapsed={collapsed} />
        <MenuItem icon={<Box />} label="Inventory" collapsed={collapsed} />
        <MenuItem icon={<BookOpen />} label="Books" collapsed={collapsed} />
      </nav>
    </aside>
  );
}

function MenuItem({ icon, label, collapsed }) {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100">
      {icon}
      {!collapsed && <span>{label}</span>}
    </div>
  );
}












// import { BookOpen, PlusCircle, Trash2, Filter } from "lucide-react";

// export default function Sidebar({
//   categories,
//   onFilter,
//   onAddClick,
//   deleteMode,
//   setDeleteMode,
// }) {
//   return (
//     <aside className="w-1/5 min-h-screen bg-white px-4 py-6 space-y-6 shadow-sm">

//       {/* Logo / Title */}
//       <h2 className="text-xl font-bold text-gray-800 mb-4">
//          Book Panel
//       </h2>

//       {/* Menu */}
//       <nav className="space-y-2">

//         <button
//           onClick={() => onFilter("")}
//           className="flex items-center gap-3 w-full px-3 py-2 rounded-lg font-semibold text-gray-500 hover:bg-gray-100"
//         >
//           <BookOpen size={18} />
//           <span>All Books</span>
//         </button>

//         <div className="flex items-center gap-3 px-3 py-2 font-semibold text-gray-500">
//           <Filter size={18} />
//           <select
//             onChange={(e) => onFilter(e.target.value)}
//             className="bg-transparent outline-none w-full"
//           >
//             <option value="">Select Category</option>
//             {categories.map((c) => (
//               <option key={c}>{c}</option>
//             ))}
//           </select>
//         </div>

//         <button
//           onClick={onAddClick}
//           className="flex items-center gap-3 w-full px-3 py-2 rounded-lg font-semibold text-gray-500 hover:bg-blue-50 hover:text-blue-600"
//         >
//           <PlusCircle size={18} />
//           <span>Add Book</span>
//         </button>

//         <button
//           onClick={() => setDeleteMode(!deleteMode)}
//           className={`flex items-center gap-3 w-full px-3 py-2 rounded-lg font-semibold ${
//             deleteMode ? "bg-red-100 text-red-600" : "hover:bg-red-50"
//           }`}
//         >
//           <Trash2 size={18} />
//           <span>Remove Book</span>
//         </button>
//       </nav>
//     </aside>
//   );
// }
