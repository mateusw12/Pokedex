import React, { ReactNode } from "react";
import "./style.css";
import Header from "./header";
import Footer from "./footer";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <div className="grid-container">
        <Header />
        <div className="main">
          <div className="content">{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BaseLayout;
