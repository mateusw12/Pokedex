import React, { useState } from "react";
import { Dropdown } from "react-bootstrap";

export interface LanguageItemProps {
  id: string;
  img: string;
  onSelect: (id: string) => void;
}

const LanguageSelector: React.FC<LanguageItemProps> = ({
  id,
  img,
  onSelect,
}) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(true);
    onSelect(id);
  };

  return (
    <Dropdown.Item
      className={isSelected ? "selected-item" : ""}
      onClick={handleClick}
    >
      <img
        src={img}
        alt="Imagem da bandeiro de país"
        style={{ width: "20px", height: "20px" }}
      />
    </Dropdown.Item>
  );
};

export default LanguageSelector;
