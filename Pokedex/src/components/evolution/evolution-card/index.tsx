import { IconType } from "react-icons";
import "./style.css";
import Link from "../../utils/link";

export interface EvolutionCardProps {
  icon: IconType;
  title: string;
  path: string;
}

const EvolutionCard: React.FC<EvolutionCardProps> = ({
  icon: Icon,
  title,
  path,
}) => {
  return (
    <div className="mega-evolution-card">
      <div className="mega-evolution-card-content">
        <Link path={path} children={<Icon className="mega-icon" />} />
      </div>
      <div className="mega-evolution-card-footer">
        <Link path={path} children={title} />
      </div>
    </div>
  );
};

export default EvolutionCard;
