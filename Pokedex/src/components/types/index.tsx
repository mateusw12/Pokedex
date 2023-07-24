import { useParams } from "react-router-dom";
import BugType from "./bug";
import DarkType from "./dark";
import "./style.css";
import DragonType from "./dragon";

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
      ) : (
        <></>
      )}
    </>
  );
};

export default Types;
