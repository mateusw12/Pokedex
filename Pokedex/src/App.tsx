import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/Layout";
import "./App.css";
import HomePage from "./components/home";
import About from "./components/about";
import Suggestion from "./components/suggestion";

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/home" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/suggestion" element={<Suggestion />}></Route>
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}

export default App;
