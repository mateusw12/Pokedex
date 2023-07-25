import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_FLYING_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_FLYING_TYPE } from "../../../constant/pokemon-types";

const FlyingType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Voador:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo voador são espíritos livres que desafiam os
                céus com suas asas esplendorosas e graciosas. Com a habilidade
                de surcar os ares e dominar os ventos, essas criaturas
                personificam a liberdade e a aventura. Movimentos como "Voo" e
                "Golpe Aéreo" exibem sua destreza nos céus e sua capacidade de
                alcançar alturas inimagináveis. Além disso, os Pokémon voador
                possuem uma visão ampla e perspicaz, sendo excelentes
                observadores do mundo ao seu redor. São embaixadores da jornada,
                levando treinadores por terras desconhecidas e horizontes nunca
                antes explorados. Ao treinar ao lado desses majestosos seres, os
                treinadores aprendem a importância da leveza de espírito e da
                coragem para enfrentar desafios com ousadia. A relação entre
                treinador e Pokémon voador é como um voo sincronizado, onde a
                confiança e a harmonia se entrelaçam para desbravar os céus em
                busca de novas experiências e horizontes infinitos. Unidos pela
                vontade de voar alto, eles provam que não há limite para os
                sonhos que podem alcançar, transcendendo os próprios limites e
                deixando um rastro de inspiração por onde quer que voem.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_FLYING_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_FLYING_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Voador.png" alt="Tipo Voador" />
        </Col>
      </Row>
    </>
  );
};

export default FlyingType;
