import { useState } from "react";

export function LikeCounter() {
  let [likesCounter, setLikesCounter] = useState(0);

  function clickLikeHandler() {
    setLikesCounter((likesCounter = likesCounter + 1));
  }
  function clickLoveHandler() {
    setLikesCounter((likesCounter = likesCounter + 3));
  }
  return (
    <>
      <h2>Liczba polubień: {likesCounter}</h2>
      <button onClick={clickLikeHandler}>Lubię to!</button>
      <button onClick={clickLoveHandler}>Kocham to!</button>
    </>
  );
}
