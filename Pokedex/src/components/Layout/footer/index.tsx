import React, { useContext } from "react";
import ThemeContext from "../../theme";
import "../style.css";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <>
      <div className={darkMode ? "dark-mode-footer" : "footer"}>
        <p className={darkMode ? "dark-mode-copyright" : "copyright"}>
          <div> ©️ - Todos os direitos reservado</div>
          <img
            src={
              darkMode
                ? "/assets/footer/pikachu-sleep.png"
                : "/assets/footer/pikachu.png"
            }
            alt="Pikachu ícone"
            height="40"
            className={
              darkMode ? "dark-mode-footer-format-image" : "footer-format-image"
            }
          />
        </p>
      </div>
    </>
  );
};

export default Footer;
