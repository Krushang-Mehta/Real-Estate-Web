import { useState } from "react";
import { MoreVertical } from "lucide-react";
export default function BookCard({ book }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="absolute left-0 top-0 h-full border-l-8 border-blue-500 shadow-lg"></div>

      <div className="flex justify-between items-start p-3">
        <span className="text-sm text-gray-500">{book.category}</span>

        <button onClick={() => setSidebarOpen(!sidebarOpen)}>
          <MoreVertical size={18} />
        </button>

        {sidebarOpen && (
          <div className="absolute right-3 top-10 bg-white border rounded shadow">
            <button className="block px-4 py-2 text-red-600 hover:bg-gray-100">
              Delete Book
            </button>
          </div>
        )}
      </div>

      <div>
        <div className="flex flex-col justify-center items-center h-40 text-center px-4">
          <h2 className="font-semibold text-lg">{book.bookName}</h2>
        </div>
      </div>

      <div className="bg-gray-100 px-4 py-2">
        <p className="text-sm text-gray-600">{book.authorName}</p>
        <button className="mt-2 w-full border border-blue-500 text-blue-500 py-1 rounded hover:bg-blue-500 hover:text-white  transition">
          Preview
        </button>
      </div>

    </div>
  )
}