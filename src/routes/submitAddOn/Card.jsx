
import { useState } from "react";
import { MoreVertical } from "lucide-react";
import { Info } from "lucide-react";

export default function BookCard({ book }) {
  const [sidemenuOpen, setsidemenuOpen] = useState(false);
  const [showAuthor, setShowAuthor] = useState(false);

  return (
    <div className="relative bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="absolute left-0 top-0 h-full border-l-8 border-blue-500 shadow-lg"></div>
      <div className="flex justify-between items-start p-3">
        <span className="text-sm text-gray-500">{book.category}</span>
        <button onClick={() => setsidemenuOpen(!sidemenuOpen)}>
          <MoreVertical size={18} color="#6b7280" />
        </button>
        {sidemenuOpen && (
          <div className="absolute right-3 top-10 bg-white border rounded-lg shadow-md">
            <button className="block px-4 py-2 text-red-600 hover:bg-red-100">
              Delete Book
            </button>
            <button className="block px-4 py-2 text-blue-600 rounded hover:bg-blue-100 transition">
              Preview
            </button>
          </div>
        )}
      </div>
      <div>
        <div className="flex flex-col justify-center items-center h-40 text-center px-4">
          <h2 className="font-semibold text-lg">{book.bookName}</h2>
        </div>
      </div>
      <div className=" px-4 py-2">
        <p className="text-sm text-gray-600">{book.authorName}</p>
        <button  className="absolute bottom-3 right-3 text-gray-600 hover:text-blue-600 transition">
          <Info size={16}/>
        </button>
      </div>
    </div>
  )
}
