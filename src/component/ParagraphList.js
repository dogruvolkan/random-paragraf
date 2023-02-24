import React, { useContext, useState } from "react";
import { Metin } from "../Metin";
import ParagraphShow from "./ParagraphShow";
import { ParagraphContext } from "../context/ParagraphContext";

const ParagraphList = () => {
  const { word, showParagraph } = useContext(ParagraphContext);

  return (
    <div className="card-list">
      {showParagraph
        ? [...Array(+word)].map((x, i) => (
            <ParagraphShow key={i} paragraf={Metin[i]} />
          ))
        : null}
    </div>
  );
};

export default ParagraphList;
