import { useEffect, useContext } from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BookContext from "./context/books";

function App() {
  const { getBooks } = useContext(BookContext);

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <div className="app">
      <h1>Book List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
}

export default App;
