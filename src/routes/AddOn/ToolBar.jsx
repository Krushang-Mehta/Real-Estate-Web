import { Book } from "lucide-react";

export default function GridToolbar({onAddClick}) {
  
  return (
    <div className="flex items-center justify-between mb-4 gap-2">


      <div className="flex items-center gap-2 min-w-0">
        <h2 className="text-sm sm:text-lg font-semibold truncate">
          Book List
        </h2>
      </div>

      <div className="flex items-center gap-5 px-5">

        <select className="border rounded px-2 py-1 text-xs sm:text-sm">
          <option>All Categories</option>
          <option>Fiction</option>
          <option>Finance</option>
          <option>History</option>
          <option>Personality</option>
        </select>

        <button onClick={onAddClick} className="bg-blue-600 text-white px-3 py-1 text-xs sm:text-sm rounded hover:bg-blue-700">
          Add Book
        </button>

      </div>

    </div>
  );
}

