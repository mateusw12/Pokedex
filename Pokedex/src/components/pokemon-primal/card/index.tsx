import { FaInfoCircle } from "react-icons/fa";
import { POKE_TYPES } from "../../../constant/types";
import { Link } from "react-router-dom";
import "./style.css";

interface PrimalPokemonCardProps {
  name: string;
  image: string;
  types: string[];
}

const PrimalPokemonCard: React.FC<PrimalPokemonCardProps> = ({
  name,
  image,
  types,
}) => {
  const filteredTypes = POKE_TYPES.filter((el) =>
    types.find((element) => el.key === element)
  );

  return (
    <div className="mega-pokemon-card" key={name}>
      <div
        className="mega-pokemon-card-header"
        style={{ backgroundColor: "#183575" }}
      >
        {name}
      </div>
      <div className="mega-pokemon-card-content">
        <img src={image} alt={name} />
      </div>
      <div
        className="mega-pokemon-card-footer"
        style={{
          backgroundColor: "#183575",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="evolution-link">
          <FaInfoCircle />
        </div>
        <div className="types-icons">
          {filteredTypes.map((type) => (
            <Link to={`/type/${type.path}`}>
              <img
                key={type.key}
                src={type.img}
                alt={type.name}
                style={{ paddingLeft: 10 }}
                className="type-img"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrimalPokemonCard;
