import { FaDragon } from "react-icons/fa";
import "./style.css";
import Link from "../../../utils/link";

const MegaEvolutionCard = () => {
  return (
    <div className="mega-evolution-card">
      <div className="mega-evolution-card-content">
        <Link
          path="/mega-evolution-visible"
          children={<FaDragon className="mega-icon" />}
        />
      </div>
      <div className="mega-evolution-card-footer">
        <Link
          path="/mega-evolution-visible"
          children={"Mostrar Mega Evoluções"}
        />
      </div>
    </div>
  );
};

export default MegaEvolutionCard;
