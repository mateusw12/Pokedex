import { BrowserRouter, Routes, Route } from "react-router-dom";
import BaseLayout from "./components/Layout";
import HomePage from "./components/home";
import About from "./components/about";
import Suggestion from "./components/suggestion";
import "./App.css";
import Types from "./components/types";
import Regions from "./components/region";
import PokemonMegaEvolution from "./components/pokemon-mega-evolution";
import Evolution from "./components/evolution";
import PokemonGigantamax from "./components/pokemon-gigantamax";
import PokemonPrimal from "./components/pokemon-primal";
import PokemonGo from "./components/pokemon-go";

function App() {
  return (
    <BrowserRouter>
      <BaseLayout>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/game/:page" element={<PokemonGo />}></Route>
          <Route path="/suggestion" element={<Suggestion />}></Route>
          <Route path="/type/:type" element={<Types />}></Route>
          <Route path="/region/:region" element={<Regions />}></Route>
          <Route path="/evolution/:evolution" element={<Evolution />}></Route>
          <Route
            path="/mega-evolution-visible"
            element={<PokemonMegaEvolution />}
          ></Route>
          <Route
            path="/gigantamax-visible"
            element={<PokemonGigantamax />}
          ></Route>
          <Route path="/primal-visible" element={<PokemonPrimal />}></Route>
        </Routes>
      </BaseLayout>
    </BrowserRouter>
  );
}
export default App;
