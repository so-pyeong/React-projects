import React from "react";
import "../styles/BookList.css";
import BookDetail from './BookDetail';

const BookList = ({ books, selectedBook, onBookSelect, onBack }) => {
  return (
    <div className="book-list">
      {!selectedBook ? (
        books.map((book) => (
          <div
            key={book.id}
            className="book-item"
            onClick={() => onBookSelect(book)}
          >
            <img src={book.poster} alt={book.title} />
            <h3>{book.title}</h3>
          </div>
        ))
      ) : (
        <BookDetail book={selectedBook} onBack={onBack} />
      )}
    </div>
  );
};

export default BookList;
