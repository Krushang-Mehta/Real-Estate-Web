import { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import BookGrid from "./components/BookGrid";
import BookForm from "./components/bookForm";
import GridToolbar from "./components/ToolBar";

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);


  const toggleSidebar = () => {
    setSidebarOpen(prev => !prev);
  };

  return (
    <div className="flex h-screen bg-gray-100">

      <Sidebar sidebarOpen={sidebarOpen} />

      <div className="flex flex-col flex-1">

        <Header toggleSidebar={toggleSidebar} sidebarOpen={sidebarOpen} />

        <main className="flex-1 p-6 overflow-auto">
          <GridToolbar onAddClick={() => setShowForm(true)} />
            {showForm && <BookForm onClose={() => setShowForm(false)} />}
          <BookGrid /> 
        </main>

      </div>
    </div>
  );
}
