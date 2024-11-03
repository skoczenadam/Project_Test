import { useState } from "react";

export function Form() {
  const [review, setReview] = useState(null);
  const [inputValue, setAuthor] = useState("");
  const [textAreaValue, setComment] = useState("");

  function handlerSubmit(e) {
    e.preventDefault();

    const author = inputValue;
    const comment = textAreaValue;

    setReview({ author, comment });
    console.log(review);
  }
  return (
    <form onSubmit={handlerSubmit}>
      {review && (
        <div>
          <p>{review.author}</p>
          <p>{review.comment}</p>
        </div>
      )}
      <h2>Dodaj recenzję</h2>
      <div>
        <label htmlFor="author">Autor</label>{" "}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setAuthor(e.target.value)}
      />

      <div>
        <label htmlFor="comment">Komentarz</label>{" "}
      </div>
      <textarea
        value={textAreaValue}
        onChange={(e) => setComment(e.target.value)}
        type="text"
      />
      <div>
        <button type="submit" disabled={!inputValue || !textAreaValue}>
          Dodaj
        </button>
      </div>
    </form>
  );
}
