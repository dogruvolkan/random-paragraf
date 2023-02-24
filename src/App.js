import "./App.css";
import { ParagraphContextProvider } from "./context/ParagraphContext";
import Paragraph from "./component/Paragraph";
import ParagraphList from "./component/ParagraphList";

function App() {
  return (
    <div className="App">
      <ParagraphContextProvider>
        <Paragraph />
        <ParagraphList />
      </ParagraphContextProvider>
    </div>
  );
}

export default App;
