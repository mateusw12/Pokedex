import { useParams } from "react-router-dom";
import "./style.css";
import Alola from "./alola";
import Galar from "./galar";
import Kanto from "./kanto";
import Johto from "./johto";

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
      ) : region === "johto" ? (
        <>
          <Johto />
        </>
      ) : (
        <> </>
      )}
    </>
  );
};
export default Regions;
