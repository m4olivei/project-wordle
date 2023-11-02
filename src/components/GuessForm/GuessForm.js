import React, { useState } from "react";

function GuessForm({ handleAddGuess, gameResult }) {
  const [value, setValue] = useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleAddGuess(value);
        setValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value.toUpperCase())}
        pattern="\w{5}"
        required
        disabled={gameResult !== "active"}
      />
    </form>
  );
}
export default GuessForm;
