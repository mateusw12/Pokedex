import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_GROUND_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_GROUND_TYPE } from "../../../constant/pokemon-types";

const GroundType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Terrestre:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo terrestre são verdadeiros guardiões da terra,
                com força e estabilidade que ecoam a solidez do solo sob nossos
                pés. Com sua resistência e habilidades ligadas à terra, essas
                criaturas personificam a essência dos elementos naturais.
                Movimentos como "Terratemor" e "Terremoto" demonstram sua
                capacidade de moldar o próprio terreno em batalha. Além disso,
                os Pokémon terrestre têm uma conexão profunda com a terra, sendo
                capazes de sentir suas vibrações e antecipar mudanças no
                ambiente. São símbolos de segurança e confiabilidade, protegendo
                aqueles que caminham ao seu lado. Ao treinar ao lado desses
                sólidos guardiões, os treinadores aprendem sobre a importância
                do enraizamento e da perseverança em face de desafios. A relação
                entre treinador e Pokémon terrestre é como a base firme de uma
                montanha, construída sobre alicerces sólidos de lealdade e
                determinação. Juntos, eles enfrentam tempestades e obstáculos
                com coragem, provando que a solidez da amizade e da vontade pode
                superar qualquer adversidade. Unidos à terra que tanto protegem,
                eles se tornam um só com a natureza, encontrando a verdadeira
                essência do equilíbrio e da força.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_GROUND_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_GROUND_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Terrestre.png" alt="Tipo Terrestre" />
        </Col>
      </Row>
    </>
  );
};

export default GroundType;
