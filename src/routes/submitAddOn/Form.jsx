export default function BookForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-2">

      <div className="bg-white rounded-lg shadow-xl w-full max-w-md p-4 sm:p-6 relative">

        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-black text-lg">
          ✕
        </button>

        <h2 className="text-lg sm:text-xl font-semibold mb-4">
          Add New Book
        </h2>

        <form className="space-y-3">

          <input className="border p-2 rounded w-full text-sm sm:text-base" placeholder="Book Name" />

          <input className="border p-2 rounded w-full text-sm sm:text-base" placeholder="Author Name" />

          <select className="border p-2 w-full">
            <option value="">Select Category</option>
            <option>Finance</option>
            <option>History</option>
            <option>Fiction</option>
            <option>Personality</option>
          </select>

          <button type="button" className="bg-blue-500 text-white w-full py-2 rounded hover:bg-blue-600 text-sm sm:text-base">
            Add Book
          </button>

        </form>

      </div>
    </div>
  );
}
