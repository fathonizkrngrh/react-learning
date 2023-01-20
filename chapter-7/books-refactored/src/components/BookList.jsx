import { useContext } from "react";
import BookContext from "../context/books";
import BookShow from "./BookShow";

function BookList() {
  const { books } = useContext(BookContext);
  console.log(books);
  const renderedBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
