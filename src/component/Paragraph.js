import React, { useContext } from "react";
import { ParagraphContext } from "../context/ParagraphContext";

const Paragraph = () => {
  const { word, setWords, setShowParagraph } = useContext(ParagraphContext);

  const handleClick = () => {
    setShowParagraph(true);
  };

  if (word > 14) {
    window.alert("lütfen 1-14 arasında değer girin");
    setWords("");
  }

  return (
    <div className="card-paragraph">
      <label>
        Number of Paragraph:
        <input
          type="number"
          value={word}
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
