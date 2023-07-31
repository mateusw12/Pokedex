import { useParams } from "react-router-dom";
import MegaEvolution from "./megaEvolution";
import Gigantamax from "./gigantamax";
import "./style.css";
import Primal from "./primal";
import DefaultEvolution from "./default-evolution";

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
      ) : evolution === "default" ? (
        <>
          <DefaultEvolution />
        </>
      ) : (
        <> </>
      )}
    </>
  );
};

export default Evolution;
