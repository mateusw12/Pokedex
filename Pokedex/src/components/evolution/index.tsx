import { useParams } from "react-router-dom";
import MegaEvolution from "./megaEvolution";
import Gigantamax from "./gigantamax";
import "./style.css";
import Primal from "./primal";

const Evolution = () => {
  const { evolution } = useParams();

  return (
    <>
      {evolution === "mega-evolution" ? (
        <>
          <MegaEvolution />
        </>
      ) : evolution === "gigantamax" ? (
        <>
          <Gigantamax />
        </>
      ) : evolution === "primal" ? (
        <>
          <Primal />
        </>
      ) : (
        <> </>
      )}
    </>
  );
};

export default Evolution;
