import React, { useState } from "react";
import axios from "axios";
import BookComponent from "./BookComponent";
import "../css/container.css";

function BookContainer() {
  const [books, setBooks] = useState({ data: [] });
  const [query, setQuery] = useState("");

  function handleChange(e) {
    setQuery(e.target.value);
  }
  async function onSubmit(e) {
    e.preventDefault();
    let fetchedBooks = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q="${query}"`
    );
    setBooks(fetchedBooks.data.items);
  }
  return (
    <>
      <div className="form-container">
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search for a book"
            onChange={handleChange}
          />
          <button>Search</button>
        </form>
      </div>
      <div className="book-container">
        {books.length > 0 &&
          books.map(book => <BookComponent key={book.id} book={book} />)}
      </div>
    </>
  );
}

export default BookContainer;
