import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_DRAGON_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_DRAGON_TYPE } from "../../../constant/pokemon-types";

const DragonType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Sombrio:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo dragão são seres majestosos e imponentes,
                personificando a grandiosidade das lendas milenares. Com escamas
                reluzentes e asas poderosas, essas criaturas evocam a força dos
                céus e da terra. Movimentos como "Sopro do Dragão" e "Garra do
                Dragão" demonstram sua capacidade devastadora em batalha. Eles
                representam o equilíbrio entre a sabedoria ancestral e a
                ferocidade inigualável. Além disso, os Pokémon dragões são
                conhecidos por sua raridade e exclusividade, tornando-os
                cobiçados por treinadores de todo o mundo Pokémon. Ao embarcar
                em uma jornada com essas majestosas criaturas, os treinadores
                aprendem a importância da humildade e da perseverança,
                enfrentando desafios que os levam a atingir novos patamares de
                força e compreensão. Com coragem e determinação, os treinadores
                que conquistam o respeito e a amizade de um Pokémon do tipo
                dragão podem se considerar verdadeiros guardiões dos segredos
                mais profundos da mitologia Pokémon.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_DRAGON_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_DRAGON_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Dragão.png" alt="Tipo Sombrio" />
        </Col>
      </Row>
    </>
  );
};

export default DragonType;
