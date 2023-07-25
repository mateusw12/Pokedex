import { useParams } from "react-router-dom";
import "./style.css";
import Alola from "./alola";

const Regions = () => {
  const { region } = useParams();

  return (
    <>
      {region === "alola" ? (
        <>
          <Alola />
        </>
      ) : (
        <></>
      )}
    </>
  );
};
export default Regions;
