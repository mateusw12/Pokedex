import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/Layout";
import HomePage from "./components/home";
import About from "./components/about";
import Suggestion from "./components/suggestion";
import "./App.css";
import Types from "./components/types";
import Regions from "./components/region";
import MegaEvolution from "./components/megaEvolution";
import PokemonMegaEvolution from "./components/pokemon-mega-evolution";

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/suggestion" element={<Suggestion />}></Route>
          <Route path="/type/:type" element={<Types />}></Route>
          <Route path="/region/:region" element={<Regions />}></Route>
          <Route path="/mega-evolution" element={<MegaEvolution />}></Route>
          <Route
            path="/mega-evolution-visible"
            element={<PokemonMegaEvolution />}
          ></Route>
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}
export default App;
