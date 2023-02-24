import { createContext, useState } from "react";

export const ParagraphContext = createContext();

export const ParagraphContextProvider = ({ children }) => {
  const [word, setWords] = useState();
  const [showParagraph, setShowParagraph] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <ParagraphContext.Provider
      value={{
        word,
        setWords,
        showParagraph,
        setShowParagraph,
        copied,
        setCopied,
      }}
    >
      {children}
    </ParagraphContext.Provider>
  );
};
