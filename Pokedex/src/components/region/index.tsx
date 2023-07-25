import { useParams } from "react-router-dom";
import "./style.css";
import Alola from "./alola";
import Galar from "./galar";
import Kanto from "./kanto";

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
      ) : region === "kanto" ? (
        <>
          <Kanto />
        </>
      ) : (
        <> </>
      )}
    </>
  );
};
export default Regions;
