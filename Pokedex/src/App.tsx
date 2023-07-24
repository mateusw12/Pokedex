import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/Layout";
import HomePage from "./components/home";
import About from "./components/about";
import Suggestion from "./components/suggestion";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

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
