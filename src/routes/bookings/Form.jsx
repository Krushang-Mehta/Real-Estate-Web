import { useState } from "react";
import { addBook } from "../services/bookService";

export default function BookForm({ onBookAdded }) {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookCategory, setBookCategory] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    try {
      await addBook({ bookName, authorName, bookCategory });
      setMessage("Book added successfully");
      setBookName("");
      setAuthorName("");
      setBookCategory("");
      onBookAdded();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="mt-4 mb-4">
      <form onSubmit={handleSubmit} className="flex gap-2 mb-2">
        <input className="border p-2 rounded w-1/3"
          placeholder="Book Name"
          value={bookName}
          onChange={(e) => setBookName(e.target.value)}
        />
        <input className="border p-2 rounded w-1/3"
          placeholder="Author Name"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
        />
        <input className="border p-2 rounded w-1/3"
          placeholder="Category"
          value={bookCategory}
          onChange={(e) => setBookCategory(e.target.value)}
        />
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add
        </button>
      </form>

      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
}
