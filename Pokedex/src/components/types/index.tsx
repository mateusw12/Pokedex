import { useParams } from "react-router-dom";
import BugType from "./bug";
import DarkType from "./dark";
import "./style.css";
import DragonType from "./dragon";
import EletricType from "./eletric";

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
      ) : (
        <></>
      )}
    </>
  );
};

export default Types;
