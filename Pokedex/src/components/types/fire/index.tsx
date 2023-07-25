import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_FIRE_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_FIRE_TYPE } from "../../../constant/pokemon-types";

const FireType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Fogo:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo fogo são chamas ardentes que aquecem o
                coração dos treinadores com sua paixão e fervor inextinguível.
                Com corpos flamejantes e habilidades pirocinéticas, essas
                criaturas são verdadeiros mestres do elemento ígneo. Movimentos
                como "Lança-chamas" e "Explosão de Fogo" demonstram sua
                capacidade de incendiar o campo de batalha. Além disso, os
                Pokémon fogo são símbolos de energia e vitalidade,
                personificando a força da vida em suas formas mais intensas. São
                seres de grande coragem, enfrentando desafios com bravura e
                determinação, mesmo quando as chamas da adversidade parecem
                insuperáveis. Ao treinar ao lado dessas poderosas criaturas, os
                treinadores aprendem a valorizar a importância do equilíbrio e
                da autocontrole, pois o fogo que arde intensamente também pode
                ser indomável. A relação entre treinador e Pokémon fogo é uma
                verdadeira aliança, onde o calor da amizade e da confiança
                fortalecem o vínculo entre eles. Juntos, eles iluminam o caminho
                em sua jornada, deixando uma trilha de glória e inspiração por
                onde passam, aquecendo o mundo Pokémon com sua chama
                inextinguível.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_FIRE_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_FIRE_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Fogo.png" alt="Tipo Fogo" />
        </Col>
      </Row>
    </>
  );
};

export default FireType;
