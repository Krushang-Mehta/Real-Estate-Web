// import BookCard from "./BookCard";

// export default function BookGrid({ books, deleteMode, onDelete }) {
//   return (
//     <div className="grid grid-cols-4 gap-x-2 gap-y-12">
//       {books.map((book) => (
//         <BookCard
//           key={book._id}
//           book={book}
//           deleteMode={deleteMode}
//           onDelete={onDelete}
//         />
//       ))}
//     </div>
//   );
// }


import BookCard from "./BookCard";
import { booksData } from "../data/data";

export default function BookGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {booksData.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
