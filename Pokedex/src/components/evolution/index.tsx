import { useParams } from "react-router-dom";
import MegaEvolution from "./megaEvolution";

const Evolution = () => {
  const { evolution } = useParams();

  return (
    <>
      {evolution === "mega-evolution" ? (
        <>
          <MegaEvolution />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Evolution;
