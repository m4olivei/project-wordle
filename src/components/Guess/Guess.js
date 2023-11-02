import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function toLetterArray(guess, answer, length) {
  let guessLetters = checkGuess(guess, answer);
  if (!guessLetters) {
    guessLetters = [];
  }
  guessLetters = guessLetters.map((result) => ({
    ...result,
    id: crypto.randomUUID(),
  }));
  if (guessLetters.length < 5) {
    guessLetters = [
      ...guessLetters,
      ...range(5 - guessLetters.length).map((item) => ({
        id: crypto.randomUUID(),
        letter: "",
        status: "empty",
      })),
    ];
  }

  return guessLetters.slice(0, length);
}

function Guess({ guess = "", answer }) {
  const guessLetters = toLetterArray(guess, answer, 5);

  return (
    <p className="guess">
      {guessLetters.map(({ id, letter, status }) => (
        <span key={id} className={`cell ${status}`}>
          {letter}
        </span>
      ))}
    </p>
  );
}

export default Guess;
