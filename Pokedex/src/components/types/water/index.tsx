import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_WATER_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_WATER_TYPE } from "../../../constant/pokemon-types";

const WaterType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Água:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo água são seres fluidos e versáteis,
                personificando a vitalidade e a pureza dos rios e mares. Com
                seus corpos aquáticos e habilidades hidrocinéticas, essas
                criaturas representam a força tranquilizadora da água em todas
                as suas formas. Movimentos como "Jato de Água" e "Hidro Bomba"
                demonstram sua capacidade de controlar as correntes em batalha.
                Além disso, os Pokémon água são símbolos de renovação e
                adaptabilidade, fluindo harmoniosamente com as mudanças da vida.
                São companheiros leais, trazendo conforto e serenidade aos
                treinadores em seus momentos mais desafiadores. Ao treinar ao
                lado dessas criaturas aquáticas, os treinadores aprendem sobre a
                importância da fluidez e da flexibilidade, e descobrem que a
                verdadeira força reside em se adaptar ao ritmo da vida. A
                relação entre treinador e Pokémon água é como a maré que se
                eleva e recua, sempre em sincronia com o outro. Juntos, eles
                exploram os horizontes infinitos do oceano e enfrentam
                tempestades com coragem, provando que mesmo nas águas mais
                profundas, há um mundo de possibilidades a serem descobertas.
                Unidos pela energia serena da água, eles deixam uma marca
                indelével em seu caminho, fluindo com graciosidade e
                determinação rumo a um futuro brilhante e cheio de esperança.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_WATER_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_WATER_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Água.png" alt="Tipo Água" />
        </Col>
      </Row>
    </>
  );
};

export default WaterType;
