import { useParams } from "react-router-dom";
import AboutPokemonGo from "./about-pokemon-go";

const PokemonGo = () => {
  const { page } = useParams();

  return (
    <>
      {page === "about" ? (
        <>
          <AboutPokemonGo />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default PokemonGo;
