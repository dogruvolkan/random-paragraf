import React, { useContext, useState } from "react";
import { Metin } from "../Metin";
import ParagraphShow from "./ParagraphShow";
import { ParagraphContext } from "../context/ParagraphContext";

const ParagraphList = () => {
  const { word, setWords, showParagraph } = useContext(ParagraphContext);

  return (
    <div>
      {showParagraph
        ? [...Array(+word)].map((x, i) => <ParagraphShow paragraf={Metin[i]} />)
        : null}
    </div>
  );
};

export default ParagraphList;
