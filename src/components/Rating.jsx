import React, { useState } from "react";
import "../styles/Rating.css";

const Rating = ({ movieId }) => {
  const [rating, setRating] = useState(0);

  const handleRating = (newRating) => {
    setRating(newRating);
    // 별점 데이터를 서버에 전송하는 로직 추가
  };

  return (
    <div className="rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={star <= rating ? "star filled" : "star"}
          onClick={() => handleRating(star)}
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default Rating;
