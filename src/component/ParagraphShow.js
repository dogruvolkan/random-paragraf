import React, { useContext } from "react";
import { ParagraphContext } from "../context/ParagraphContext";
import { MdOutlineContentCopy } from "react-icons/md";
import { CopyToClipboard } from "react-copy-to-clipboard";

const ParagraphShow = ({ paragraf }) => {
  const { copied, setCopied } = useContext(ParagraphContext);

  return (
    <div className="card-show">
      {paragraf}
      <CopyToClipboard text={paragraf} onCopy={() => setCopied(true)}>
        <button className="copy-btn" title="copy">
          <MdOutlineContentCopy />
        </button>
      </CopyToClipboard>
    </div>
  );
};

export default ParagraphShow;
