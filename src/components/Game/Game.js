import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessForm from "../GuessForm";
import GuessResults from "../GuessResults";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = useState([]);
  const [gameResult, setGameResult] = useState("active");

  const handleAddGuess = (guess) => {
    const newGuesses = [...guesses];
    newGuesses.push({ id: crypto.randomUUID(), label: guess });
    setGuesses(newGuesses);
    if (guess === answer) {
      setGameResult("win");
    } else if (newGuesses.length >= NUM_OF_GUESSES_ALLOWED) {
      setGameResult("loose");
    }
  };

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessForm handleAddGuess={handleAddGuess} gameResult={gameResult} />
      {gameResult === "win" ? (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in{" "}
            <strong>{guesses.length} guesses</strong>.
          </p>
        </div>
      ) : gameResult === "loose" ? (
        <div className="sad banner">
          <p>
            Sorry, the correct answer is <strong>{answer}</strong>.
          </p>
        </div>
      ) : null}
    </>
  );
}

export default Game;
