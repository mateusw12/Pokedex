import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import "./style.css";
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
        <div className="bug-container">
          <div>
            <div className="bug-title">
              <h1>Tipo Inseto:</h1>
            </div>
            <div className="bug-text">
              <p>
                O tipo Inseto foi introduzido pela primeira vez na 1ª Geração,
                em 1996, quando foram criados 12 Pokémon desse tipo. Conforme as
                gerações avançaram, mais criaturas desse tipo foram sendo
                adicionadas, chegando a um total de 95 Pokémon atualmente. Esse
                número aumentou significativamente na 5ª Geração, que adicionou
                18 Pokémon do tipo Inseto à lista.
              </p>
            </div>
          </div>
          <div className="bug-image">
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
