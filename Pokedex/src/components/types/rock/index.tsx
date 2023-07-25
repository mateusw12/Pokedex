import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_ROCK_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_ROCK_TYPE } from "../../../constant/pokemon-types";

const RockType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Pedra:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo pedra são criaturas robustas e sólidas,
                personificando a força imponente das formações geológicas. Com
                seus corpos resistentes e habilidades relacionadas à terra,
                essas criaturas representam a estabilidade e a durabilidade da
                natureza. Movimentos como "Lança-rochas" e "Terremoto"
                demonstram sua capacidade de moldar o próprio terreno em
                batalha. Além disso, os Pokémon pedra são testemunhas
                silenciosas da passagem do tempo, carregando consigo histórias
                antigas e conexões profundas com o solo. São símbolos de
                paciência e perseverança, enfrentando as tempestades da vida com
                serenidade e resiliência. Ao treinar ao lado dessas criaturas
                sólidas, os treinadores aprendem sobre a importância da firmeza
                e do equilíbrio, descobrindo que mesmo na solidez aparente, há
                uma essência viva e dinâmica. A relação entre treinador e
                Pokémon pedra é como a fundação de uma montanha, inabalável e
                confiável. Juntos, eles enfrentam os desafios com determinação,
                desbravando caminhos difíceis e alcançando alturas
                inimagináveis. Unidos à terra que tanto protegem, eles encontram
                a verdadeira essência do poder e da resistência, deixando uma
                marca indelével em sua jornada e provando que mesmo nas rochas
                mais duras, há uma beleza a ser encontrada.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_ROCK_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_ROCK_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Pedra.png" alt="Tipo Pedra" />
        </Col>
      </Row>
    </>
  );
};

export default RockType;
