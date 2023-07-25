import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_POISON_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_POISON_TYPE } from "../../../constant/pokemon-types";

const PoisonType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Venenoso:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo venenoso são seres enigmáticos que emanam uma
                aura tóxica, representando a dualidade da beleza e da
                periculosidade. Com suas cores vibrantes e venenos letais, essas
                criaturas personificam a força oculta e imprevisível da
                natureza. Movimentos como "Gás Venenoso" e "Toxina" demonstram
                sua habilidade em contaminar e enfraquecer seus adversários em
                batalha. Além disso, os Pokémon venenoso têm uma resistência
                única a toxinas, adaptando-se a ambientes hostis e sobrevivendo
                onde outros não ousariam ir. São símbolos de resiliência e força
                interior, mostrando que mesmo na adversidade, é possível
                encontrar uma forma de se destacar. Ao treinar ao lado desses
                seres venenosos, os treinadores aprendem sobre a importância da
                cautela e da perspicácia diante de situações perigosas, e
                descobrem que até mesmo as coisas mais letais podem ser
                apreciadas e compreendidas quando vistas com respeito. A relação
                entre treinador e Pokémon venenoso é como uma proteção tóxica,
                onde o apoio mútuo e a compreensão são fundamentais para
                sobreviver às provações da vida. Juntos, eles enfrentam os
                desafios com coragem, superando obstáculos aparentemente
                intransponíveis, e provam que mesmo na escuridão do veneno, há
                beleza e força a serem encontradas. Unidos pela coragem de
                encarar o desconhecido, eles deixam uma marca indelével em seus
                corações, mostrando que mesmo na toxicidade, pode haver cura e
                transformação.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_POISON_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_POISON_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Venenoso.png" alt="Tipo Venenoso" />
        </Col>
      </Row>
    </>
  );
};

export default PoisonType;
