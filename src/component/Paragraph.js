import React, { useContext, useState } from "react";
import { ParagraphContext } from "../context/ParagraphContext";

const Paragraph = () => {
  const { word, setWords, setShowParagraph } = useContext(ParagraphContext);

  const handleClick = () => {
    if (word == "") {
      window.alert("lütfen değer girin");
      setWords(1);
      setShowParagraph(true);
    }
    setShowParagraph(true);
  };

  if (word > 14) {
    window.alert("lütfen 1-15 arasında değer girin");
    setWords("");
  }

  return (
    <div className="card-paragraph">
      <label>
        Number of Paragraph:
        <input
          type="number"
          value={word}
          defaultValue="1"
          min="1"
          max="14"
          onChange={(e) => setWords(e.target.value)}
        />
      </label>

      <button onClick={handleClick}>Generate Paragraph</button>
    </div>
  );
};

export default Paragraph;
