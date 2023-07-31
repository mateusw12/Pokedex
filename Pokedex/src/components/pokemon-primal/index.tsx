import { useState } from "react";
import { Input, Select } from "antd";
import "./style.css";
import { POKE_TYPES } from "../../constant/types";
import { POKE_PRIMAL } from "../../constant/poke-primal";
import PrimalPokemonCard from "./card";

const { Option } = Select;

const PokemonPrimal = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedTypes, setSelectedTypes] = useState([]);

  const handleSearch = (value: string) => {
    setSearchText(value);
  };

  const handleTypeChange = (value: []) => {
    setSelectedTypes(value);
  };

  const filteredPokemon = POKE_PRIMAL.filter((pokemon) => {
    const nameMatch = pokemon.name
      .toLowerCase()
      .includes(searchText.toLowerCase());
    const typeMatch =
      selectedTypes.length === 0 ||
      selectedTypes.every((type) => pokemon.types.includes(type));
    return nameMatch && typeMatch;
  });

  return (
    <>
      <div className="input-search">
        <Input.Search
          placeholder="Pesquisar Pokémon por Nome..."
          onSearch={handleSearch}
          style={{ width: 400, height: 50 }}
        />
        <Select
          mode="multiple"
          placeholder="Filtrar por tipo..."
          onChange={handleTypeChange}
          style={{ width: 400, height: 50 }}
        >
          {POKE_TYPES.map((type) =>
            type.key !== "completeTable" ? (
              <Option key={type.key} value={type.key}>
                <img src={type.img} alt={type.name} /> {type.name}
              </Option>
            ) : (
              <></>
            )
          )}
        </Select>
      </div>
      <div className="mega-content">
        {filteredPokemon.map((pokemon) => (
          <PrimalPokemonCard
            key={pokemon.name}
            name={pokemon.name}
            image={pokemon.img}
            types={pokemon.types}
          />
        ))}
      </div>
    </>
  );
};

export default PokemonPrimal;
