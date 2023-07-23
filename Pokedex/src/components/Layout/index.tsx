import React, { ReactNode } from "react";
import "./style.css";
import { ThemeProvider } from "../theme";
import Header from "./header";
import Footer from "./footer";

interface BaseLayoutProps {
  children: ReactNode;
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <>
      <ThemeProvider>
        <div className="grid-container">
          <Header />
          <div className="main">
            <div className="content">{children}</div>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </>
  );
};

export default BaseLayout;
