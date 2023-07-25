import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_STEEL_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_STEEL_TYPE } from "../../../constant/pokemon-types";

const SteelType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Aço:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo aço são verdadeiras fortalezas ambulantes,
                personificando a solidez e a resistência do metal. Com seus
                corpos metálicos e habilidades de endurecimento, essas criaturas
                representam a perfeição da engenharia natural. Movimentos como
                "Garras de Aço" e "Cabeçada de Ferro" demonstram sua capacidade
                de dominar o campo de batalha com sua resistência impenetrável.
                Além disso, os Pokémon aço são símbolos de proteção e
                confiabilidade, sendo aliados confiáveis em qualquer situação.
                São verdadeiros forjadores de alianças e guardiões dos valores
                mais nobres. Ao treinar ao lado dessas criaturas de aço, os
                treinadores aprendem sobre a importância da dedicação e da
                disciplina, e descobrem que a verdadeira força reside na
                harmonia entre a dureza do metal e a ternura do coração. A
                relação entre treinador e Pokémon aço é como o vínculo
                indestrutível entre o ferro e o fogo, temperado pela amizade e
                pelo respeito mútuo. Juntos, eles enfrentam desafios com
                bravura, protegendo seus ideais e lutando por um mundo mais
                seguro e justo. Unidos em sua determinação de forjar um caminho
                sólido e seguro, eles deixam uma marca indelével em seu trajeto,
                provando que mesmo na frieza do aço, pode haver calor humano e
                coragem.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_STEEL_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_STEEL_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Metálico.png" alt="Tipo Aço" />
        </Col>
      </Row>
    </>
  );
};

export default SteelType;
