import { MdOutlineGTranslate } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";

export interface IconMapping {
  name: string;
  element: React.ReactNode;
}

// Mapeie os ícones que serão utilizados no Dropdown
export const icons: IconMapping[] = [
  { name: "info", element: <AiOutlineInfoCircle /> },
  { name: "translate", element: <MdOutlineGTranslate /> },
];
