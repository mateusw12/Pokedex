import { useParams } from "react-router-dom";
import BugType from "./bug";

const Types = () => {
  const { type } = useParams();

  return (
    <>
      {type === "bug" ? (
        <>
          <BugType />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Types;
