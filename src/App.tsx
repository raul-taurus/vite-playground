import "./App.css";
import { PdfViewer } from "./pages/PdfViewer";

function App() {
  return (
    <div className="App">
      <PdfViewer src="files/hello.pdf" />
    </div>
  );
}

export default App;
