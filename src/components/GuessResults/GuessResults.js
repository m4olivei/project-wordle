import React from "react";
import Guess from "../Guess";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessResults({ guesses, answer }) {
  const numEmpty = NUM_OF_GUESSES_ALLOWED - guesses.length;
  return (
    <div className="guess-results">
      {guesses.map(({ id, label }) => (
        <Guess key={id} guess={label} answer={answer} />
      ))}
      {numEmpty > 0 &&
        range(numEmpty).map((item) => <Guess key={`empty-${item}`} />)}
    </div>
  );
}

export default GuessResults;
