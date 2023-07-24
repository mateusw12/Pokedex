import { ReactNode } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import "./style.css";

const Link = ({
  path,
  children,
  addUnderline,
}: {
  path: string;
  children?: ReactNode;
  addUnderline?: boolean;
}) => {
  return (
    <ReactRouterLink
      to={path}
      className={addUnderline ? "" : "nav-link-no-underline"}
    >
      <div style={{ color: "#FFF" }}>{children}</div>
    </ReactRouterLink>
  );
};

export default Link;
