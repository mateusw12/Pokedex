import { useEffect, useState } from "react";
import { fetchPokemonList, fetchPokemonDetails } from "../../api/pokemon";
import { List, message, Row, Col, Input, Select, Button, Spin } from "antd";
import Card from "../pokemon-mega-evolution/card";
import { PokemonListItem, PokemonDetails } from "../../api/interface";
import { POKE_TYPES } from "../../constant/types";
import "./style.css";
import { FaSpinner } from "react-icons/fa";

const { Search } = Input;
const { Option } = Select;

const Pokemons = () => {
  const [pokemonData, setPokemonData] = useState<PokemonListItem[]>([]);
  const [pokemonDetails, setPokemonDetails] = useState<PokemonDetails[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const loadMore = () => {
    setLoading(true);
    const offset = pokemonData.length; // Próxima página
    fetchPokemonList(20, offset)
      .then((data) => {
        setPokemonData([...pokemonData, ...data]);
        return Promise.all(data.map((item) => fetchPokemonDetails(item.url)));
      })
      .then((details) => {
        setPokemonDetails([...pokemonDetails, ...details]);
        setLoading(false);
      })
      .catch((error: string) => {
        setLoading(false);
        void message.error({
          content: `Erro ao buscar mais pokémons: ${error}`,
        });
      });
  };

  useEffect(() => {
    fetchPokemonList(20)
      .then((data) => {
        setPokemonData(data);
        Promise.all(data.map((item) => fetchPokemonDetails(item.url)))
          .then((details) => {
            setPokemonDetails(details);
          })
          .catch((error: string) => {
            void message.error({
              content: `Erro ao buscar os detalhes dos pokémons: ${error}`,
            });
          });
      })
      .catch((error: string) => {
        void message.error({
          content: `Erro ao buscar os pokémons: ${error}`,
        });
      });
  }, []);

  const filterPokemons = (
    data: PokemonListItem[],
    searchTerm: string,
    selectedTypes: string[]
  ) => {
    const filteredByName = data.filter((pokemon) =>
      pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredByType =
      selectedTypes.length === 0
        ? filteredByName
        : filteredByName.filter((pokemon) => {
            const pokemonDetail = pokemonDetails.find(
              (detail) => detail.name === pokemon.name
            );
            return (
              pokemonDetail &&
              selectedTypes.every((type) =>
                pokemonDetail.types.some((t) => t.type.name === type)
              )
            );
          });

    return filteredByType;
  };

  const filteredPokemons = filterPokemons(
    pokemonData,
    searchTerm,
    selectedTypes
  );

  return (
    <div className="pokemon-container">
      <Row gutter={16} style={{ marginBottom: 16 }}>
        <Col offset={2} span={8}>
          <Search
            placeholder="Digite o nome do Pokémon"
            onSearch={(value) => setSearchTerm(value)}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col offset={1} span={8}>
          <Select
            mode="multiple"
            placeholder="Filtrar por tipo..."
            onChange={(values: string[]) => setSelectedTypes(values)}
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
        </Col>
      </Row>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={filteredPokemons}
        renderItem={(item) => (
          <List.Item>
            <Card
              name={item.name.charAt(0).toUpperCase() + item.name.slice(1)}
              image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                pokemonDetails.find((detail) => detail.name === item.name)
                  ?.id || 0
              }.png`}
              types={
                pokemonDetails
                  .find((detail) => detail.name === item.name)
                  ?.types.map((el) => el.type.name) || []
              }
            />
          </List.Item>
        )}
        loadMore={
          loading ? (
            <div>
              <Spin tip="Carregando" />
            </div>
          ) : (
            <div className="load-more-container">
              <Button onClick={loadMore} type="primary" icon={<FaSpinner />}>
                Carregar Mais
              </Button>
            </div>
          )
        }
      />
    </div>
  );
};

export default Pokemons;
