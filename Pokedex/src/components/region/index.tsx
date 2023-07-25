import { useParams } from "react-router-dom";
import "./style.css";
import Alola from "./alola";
import Galar from "./galar";

const Regions = () => {
  const { region } = useParams();

  return (
    <>
      {region === "alola" ? (
        <>
          <Alola />
        </>
      ) : region === "galar" ? (
        <>
          <Galar />
        </>
      ) : (
        <> </>
      )}
    </>
  );
};
export default Regions;
