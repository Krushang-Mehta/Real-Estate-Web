// export default function BookCard({ book, deleteMode, onDelete }) {
//   return (
//     <div className="relative w-56 h-64 bg-white rounded-xl border-l-8 border-blue-500 shadow-lg hover:shadow-blue-300 flex flex-col">

//       {/* Delete icon */}
//       {deleteMode && (
//         <button
//           onClick={() => onDelete(book)}
//           className="absolute top-2 left-2 text-red-600"
//         >
//           🗑️
//         </button>
//       )}

//       {/* Top 75% */}
//       <div className="flex-1 flex items-center justify-center font-bold text-center px-2">
//         {book.bookName}
//       </div>

//       {/* Bottom 25% */}
//       <div className="bg-gray-100 p-2 text-sm">
//         <p>{book.authorName}</p>
//         <p className="text-gray-500">{book.bookCategory}</p>
//       </div>
//     </div>
//   );
// }

// export default function BookCard({ book, deleteMode, onDelete }) {
//   return (
//     <div className="relative w-56 h-56 bg-white rounded-xl shadow-lg border-l-8 border-blue-500 flex flex-col">

//       {deleteMode && (
//         <button
//           onClick={() => onDelete(book)}
//           className="absolute top-2 left-2 text-red-600"
//         >
//           🗑️
//         </button>
//       )}

//       <div className="flex-1 flex items-center justify-center font-bold text-center px-2">
//         {book.bookName}
//       </div>

//       <div className="bg-gray-100 p-2 text-sm">
//         <p>{book.authorName}</p>
//         <p className="text-gray-500">{book.bookCategory}</p>
//       </div>
//     </div>
//   );
// }


import { useState } from "react";
import { MoreVertical } from "lucide-react";

export default function BookCard({ book }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">

      {/* Left color strip */}
      <div className="absolute left-0 top-0 h-full border-l-8 border-blue-500 shadow-lg"></div>

      {/* Top bar */}
      <div className="flex justify-between items-start p-3">
        <span className="text-sm text-gray-500">{book.category}</span>

        <button onClick={() => setMenuOpen(!menuOpen)}>
          <MoreVertical size={18} />
        </button>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className="absolute right-3 top-10 bg-white border rounded shadow">
            <button className="block px-4 py-2 text-red-600 hover:bg-gray-100">
              Delete Book
            </button>
          </div>
        )}
      </div>

      {/* Center book name */}
      <div className="flex flex-col justify-center items-center h-40 text-center px-4">
        <h2 className="font-semibold text-lg">{book.bookName}</h2>
      </div>

      {/* Bottom section */}
      <div className="bg-gray-100 px-4 py-2">
        <p className="text-sm text-gray-600">{book.authorName}</p>

        <button className="mt-2 w-full border border-blue-500 text-blue-500 py-1 rounded hover:bg-blue-50 transition">
          Preview
        </button>
      </div>
    </div>
  );
}
