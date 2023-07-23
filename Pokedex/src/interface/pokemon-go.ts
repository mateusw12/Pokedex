import { IconType } from "react-icons";

export interface PokemonGo {
  key: string;
  name: string;
  path: string;
  icon: IconType;
  disabled?: boolean;
}
