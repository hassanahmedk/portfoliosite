import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom"


// Main CSS
import "./assets/css/main.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
