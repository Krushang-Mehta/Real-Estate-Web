
import { useState } from "react";
import { addBook } from "../services/bookService";

export default function AddBookForm({ onClose, onAdded }) {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookCategory, setBookCategory] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    await addBook({ bookName, authorName, bookCategory });
    onAdded();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center">
      <form className="bg-white p-6 rounded-xl space-y-3 w-80" onSubmit={submit}>
        <h2 className="text-xl font-bold">Add Book</h2>

        <input className="border p-2 w-full"
          placeholder="Book Name"
          onChange={(e) => setBookName(e.target.value)} />

        <input className="border p-2 w-full"
          placeholder="Author Name"
          onChange={(e) => setAuthorName(e.target.value)} />

        <select
          className="border p-2 w-full"
          onChange={(e) => setBookCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option>Fiction</option>
          <option>Finance</option>
          <option>History</option>
          <option>Personality</option>
        </select>

        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose}>Cancel</button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add</button>
        </div>
      </form>
    </div>
  );
}
