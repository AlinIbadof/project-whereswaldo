import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import FishingScenePage from "./Components/FishingScenePage";
import HomePage from "./Components/HomePage";
import Nav from "./Components/Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/FishingScene" element={<FishingScenePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
