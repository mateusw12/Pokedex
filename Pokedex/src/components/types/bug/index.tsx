import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import "../style.css";
import Table from "../../utils/table";
import {
  DATA_TABLE_COLUMN,
  POKEMON_BUG_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_BUG_TYPE } from "../../../constant/pokemon-types";

const BugType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Inseto:</h1>
            </div>
            <div className="type-text">
              <p>
                Os tipos inseto são uma das categorias mais fascinantes e
                diversificadas no universo Pokémon. Com uma variedade
                impressionante de criaturas que se assemelham a besouros,
                borboletas, joaninhas e outros insetos, esse grupo apresenta uma
                série de desafios únicos e habilidades distintas. Movimentos
                como "Ferrão Venenoso" e "Redemoinho de Pó" são apenas alguns
                exemplos das táticas peculiares utilizadas por essas pequenas
                maravilhas da natureza. Além disso, muitos deles passam por
                metamorfoses incríveis, evoluindo para formas ainda mais
                poderosas. Embora nem sempre sejam os mais fortes, os Pokémon do
                tipo inseto certamente são dignos de admiração pela sua
                capacidade de adaptação e perseverança em meio a um mundo
                repleto de desafios. Desbravar a região em busca dessas
                criaturas é uma experiência enriquecedora para todo treinador,
                que aprenderá a valorizar a beleza e a importância desses
                pequenos seres na intricada teia da vida Pokémon.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_BUG_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_BUG_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/public/assets/types/bug/inseto.png" alt="Tipo Inseto" />
        </Col>
      </Row>
    </>
  );
};

export default BugType;
