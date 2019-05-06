import React from "react";
import "../css/component.css";

function BookComponent({ book }) {
  return (
    <div className="book-item">
      <h3>{book.volumeInfo.title}</h3>
      <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
      <a href={book.volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">More info</a>
    </div>
  );
}

export default BookComponent;
