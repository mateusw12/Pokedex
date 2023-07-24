import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import "./style.css";
import { POKEMON_BUG_TYPE } from "../../../constant/pokemon-types";
import Table from "../../utils/table";
import {
  DATA_TABLE_COLUMN,
  POKEMON_BUG_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";

const BugType = () => {
  return (
    <>
      <Row style={{ paddingBottom: 20 }}>
        <Col span={24}>
          <div className="bug-title">
            <img src="/public/assets/types/bug/inseto.png" alt="Tipo Inseto" />
            <h1>Tipo Inseto:</h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={14}>
          <div className="bug-text">
            <p>
              O tipo Inseto foi introduzido pela primeira vez na 1ª Geração, em
              1996, quando foram criados 12 Pokémon desse tipo. Conforme as
              gerações avançaram, mais criaturas desse tipo foram sendo
              adicionadas, chegando a um total de 95 Pokémon atualmente. Esse
              número aumentou significativamente na 5ª Geração, que adicionou 18
              Pokémon do tipo Inseto à lista.
            </p>
          </div>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_BUG_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col offset={1} span={8}>
          <div className="bug-image">
            <CarouselType pokemons={POKEMON_BUG_TYPE} />
          </div>
        </Col>
      </Row>
    </>
  );
};

export default BugType;
