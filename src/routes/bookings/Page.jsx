
import { useEffect, useState } from "react";
import Sidebar from "./components/SideBar";
import Navbar from "./components/Header";

import BookGrid from "./components/BookGrid";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  // 🔥 auto collapse on small screens
  useEffect(() => {
    if (window.innerWidth < 768) {
      setCollapsed(true);
    }
  }, );

  return (
    <div className="flex h-screen bg-gray-100">

      <Sidebar
        collapsed={collapsed}
        toggle={() => setCollapsed(!collapsed)}
      />

      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={() => setCollapsed(!collapsed)} />

        <main className="p-6">
          <BookGrid />
        </main>
      </div>

    </div>
  );
}












// import { useEffect, useState } from "react";
// import { getAllBooks, deleteBook } from "./services/bookService";
// import Sidebar from "./components/Sidebar";
// import BookGrid from "./components/BookGrid";
// import AddBookForm from "./components/AddBookForm";

// export default function App() {
//   const [books, setBooks] = useState([]);
//   const [filtered, setFiltered] = useState([]);
//   const [deleteMode, setDeleteMode] = useState(false);
//   const [showAdd, setShowAdd] = useState(false);

//   const loadBooks = async () => {
//     const data = await getAllBooks();
//     setBooks(data);
//     setFiltered(data);
//   };

//   useEffect(() => { loadBooks(); }, []);

//   const categories = ["Fiction", "Finance", "History", "Personality"];

//   const handleFilter = (cat) => {
//     if (!cat) setFiltered(books);
//     else setFiltered(books.filter(b => b.bookCategory === cat));
//   };

// const handleDelete = async (book) => {
//   const name = prompt(
//     `Please type the book name to confirm delete:\n${book.bookName}`
//   );

//   if (name === book.bookName) {
//     await deleteBook(book._id);
//     loadBooks();
//   } else {
//     alert("Book name does not match");
//   }
// };


//   return (
//     <div>
//       <div className="flex">
//         <Sidebar
//           categories={categories}
//           onFilter={handleFilter}
//           onAddClick={() => setShowAdd(true)}
//           deleteMode={deleteMode}
//           setDeleteMode={setDeleteMode}
//         />

//         <div className="w-4/5 p-4 bg-gray-100 shadow-md">
//           <h1 className="text-3xl font-bold text-center p-4 mt-2 mb-6 ">Book Dashboard</h1>
//           <BookGrid books={filtered} deleteMode={deleteMode} onDelete={handleDelete} />
//         </div>
//       </div>

//       {showAdd && <AddBookForm onClose={() => setShowAdd(false)} onAdded={loadBooks} />}
//     </div>
//   );
// }

