import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_GRASS_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_GRASS_TYPE } from "../../../constant/pokemon-types";

const GrassType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Planta:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo planta são seres exuberantes que florescem em
                harmonia com a natureza, representando a essência vital da flora
                em seu esplendor. Com suas folhas verdes e poderes naturais,
                essas criaturas personificam a renovação e o crescimento
                constante. Movimentos como "Chicote de Vinha" e "Folha Navalha"
                demonstram sua conexão intrínseca com o mundo vegetal. Além
                disso, os Pokémon planta são guardiões da biodiversidade e
                embaixadores da sustentabilidade, lembrando-nos constantemente
                da importância de preservar o meio ambiente. Ao treinar ao lado
                desses seres naturais, os treinadores aprendem a valorizar a
                simplicidade e a beleza da vida ao ar livre, conectando-se com a
                energia da Terra e a importância de proteger todos os seres
                vivos. A relação entre treinador e Pokémon planta é como a
                simbiose entre o solo e a semente, onde o apoio mútuo cria uma
                aliança inquebrável, permitindo que ambos cresçam e se
                fortaleçam. Juntos, eles espalham a mensagem de harmonia e
                respeito pela natureza, florescendo como símbolos de esperança
                para um mundo mais verde e acolhedor.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_GRASS_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_GRASS_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Planta.png" alt="Tipo Planta" />
        </Col>
      </Row>
    </>
  );
};

export default GrassType;
