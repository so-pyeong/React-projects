import React from "react";
import Rating from "./Rating";
import "../styles/BookDetail.css";

const BookDetail = ({ book, onBack }) => {
    return (
        <div className="book-detail">
            <button className="back-button" onClick={onBack}>뒤로가기</button>
            <img src={book.poster} alt={book.title} />
            <h2>{book.title}</h2>
            <p>{book.description}</p>
            <Rating bookId={book.id} />
        </div>
    );
};

export default BookDetail;
