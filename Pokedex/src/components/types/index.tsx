import { useParams } from "react-router-dom";
import BugType from "./bug";
import DarkType from "./dark";
import "./style.css";

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
      ) : (
        <></>
      )}
    </>
  );
};

export default Types;
