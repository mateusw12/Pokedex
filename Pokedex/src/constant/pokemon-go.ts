import {
  AiOutlineCalculator,
  AiOutlineInfoCircle,
  AiOutlineThunderbolt,
} from "react-icons/ai";
import { GiNewspaper } from "react-icons/gi";
import { BsShield } from "react-icons/bs";
import { PokemonGo } from "../interface/pokemon-go";
import { IconType } from "react-icons";

export const POKEMON_GO: PokemonGo[] = [
  {
    key: "about",
    name: "Sobre",
    path: "about",
    disabled: true,
    icon: AiOutlineInfoCircle as IconType,
  },
  {
    key: "ivCalculate",
    name: "Calculadora IV",
    path: "ivCalculate",
    disabled: true,
    icon: AiOutlineCalculator as IconType,
  },
  {
    key: "bestAttack",
    name: "Melhores Ataques",
    path: "bestAttack",
    disabled: true,
    icon: AiOutlineThunderbolt as IconType,
  },
  {
    key: "bestDefense",
    name: "Melhores Defesas",
    path: "bestDefense",
    disabled: true,
    icon: BsShield as IconType,
  },
  {
    key: "news",
    name: "Notícias",
    path: "news",
    disabled: true,
    icon: GiNewspaper as IconType,
  },
];
