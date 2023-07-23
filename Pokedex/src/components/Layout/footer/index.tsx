import React, { useEffect, useState } from "react";
import "../style.css";

const Footer = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const handleDarkModeChange = () => {
      setDarkMode(document.body.classList.contains("dark-mode"));
    };

    handleDarkModeChange();
    const observer = new MutationObserver(handleDarkModeChange);
    observer.observe(document.body, { attributes: true });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div className="footer">
        <p className="copyright">
          <div> ©️ - Todos os direitos reservados</div>
          <img
            src={
              darkMode
                ? "/assets/footer/pikachu-sleep.png"
                : "/assets/footer/pikachu.png"
            }
            alt="Pikachu ícone"
            height="40"
            className="footer-format-image"
          />
        </p>
      </div>
    </>
  );
};

export default Footer;
