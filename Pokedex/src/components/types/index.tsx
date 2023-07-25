import { useParams } from "react-router-dom";
import BugType from "./bug";
import DarkType from "./dark";
import "./style.css";
import DragonType from "./dragon";
import EletricType from "./eletric";
import FairyType from "./fairy";
import FightingType from "./fighting";
import FireType from "./fire";
import FlyingType from "./flying";
import Ghostype from "./ghost";
import GrassType from "./grass";
import GroundType from "./ground";
import IceType from "./ice";
import NormalType from "./normal";

const Types = () => {
  const { type } = useParams();

  return (
    <>
      {type === "bug" ? (
        <>
          <BugType />
        </>
      ) : type === "dark" ? (
        <>
          <DarkType />
        </>
      ) : type === "dragon" ? (
        <>
          <DragonType />
        </>
      ) : type === "eletric" ? (
        <>
          <EletricType />
        </>
      ) : type === "fairy" ? (
        <>
          <FairyType />
        </>
      ) : type === "fighting" ? (
        <>
          <FightingType />
        </>
      ) : type === "fire" ? (
        <>
          <FireType />
        </>
      ) : type === "flying" ? (
        <>
          <FlyingType />
        </>
      ) : type === "ghost" ? (
        <>
          <Ghostype />
        </>
      ) : type === "grass" ? (
        <>
          <GrassType />
        </>
      ) : type === "ground" ? (
        <>
          <GroundType />
        </>
      ) : type === "ice" ? (
        <>
          <IceType />
        </>
      ) : type === "normal" ? (
        <>
          <NormalType />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Types;
