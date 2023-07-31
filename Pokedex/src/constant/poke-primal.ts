import { MegaEvolution } from "../interface/mega-evolution";

const absolutePath = "/public/assets/primal/";

export const POKE_PRIMAL: MegaEvolution[] = [
  {
    name: "Groundon",
    img: `${absolutePath}groundon.webp`,
    types: ["fire", "ground"],
  },
  {
    name: "Kyogre",
    img: `${absolutePath}kyogre.jpg`,
    types: ["water"],
  },
];
