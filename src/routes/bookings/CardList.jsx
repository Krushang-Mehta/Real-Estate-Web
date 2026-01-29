import { useEffect, useState } from "react";
import { getAllBooks, removeBook } from "../services/bookService";

export default function BookList({ refresh }) {
  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const fetchBooks = async () => {
    try {
      const data = await getAllBooks();
      setBooks(data);
      setFilteredBooks(data);
    } catch (err) {
      setError("Failed to load books");
    }
  };

  useEffect(() => {
    fetchBooks();
  }, [refresh]);

  const handleDelete = async (id) => {
    const ok = window.confirm("Are you sure you want to delete this book?");
    if (!ok) return;

    try {
      await removeBook(id);
      fetchBooks();
    } catch (err) {
      alert(err.message);
    }
  };

  const categories = [...new Set(books.map((b) => b.bookCategory))];

  const handleFilter = (cat) => {
    setCategory(cat);
    if (cat === "") {
      setFilteredBooks(books);
    } else {
      setFilteredBooks(books.filter((b) => b.bookCategory === cat));
    }
  };

  return (
    <div>
      <div className="flex justify-between mb-3">
        <h2 className="text-xl font-semibold">Books</h2>

        <select
          value={category}
          onChange={(e) => handleFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="">All Categories</option>
          {categories.map((cat, i) => (
            <option key={i} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {error && <p className="text-red-600">{error}</p>}

      <ul className="space-y-2">
        {filteredBooks.map((b) => (
          <li
            key={b._id}
            className="flex justify-between items-center bg-gray-50 p-3 rounded shadow-sm"
          >
            <span>
              <strong>{b.bookName}</strong> — {b.authorName} ({b.bookCategory})
            </span>
            <button
              onClick={() => handleDelete(b._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
