import { useParams } from "react-router-dom";
import "./style.css";
import Alola from "./alola";
import Galar from "./galar";
import Kanto from "./kanto";
import Johto from "./johto";
import Hoenn from "./hoenn";
import Sinoh from "./sinoh";
import Unova from "./unova";
import Kalos from "./kalos";
import OrangeIslands from "./orangeIslands";

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
      ) : region === "hoenn" ? (
        <>
          <Hoenn />
        </>
      ) : region === "sinoh" ? (
        <>
          <Sinoh />
        </>
      ) : region === "unova" ? (
        <>
          <Unova />
        </>
      ) : region === "kalos" ? (
        <>
          <Kalos />
        </>
      ) : region === "orangeIslands" ? (
        <>
          <OrangeIslands />
        </>
      ) : (
        <> </>
      )}
    </>
  );
};
export default Regions;
