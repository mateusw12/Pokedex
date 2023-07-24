import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_ELETRIC_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_ELETRIC_TYPE } from "../../../constant/pokemon-types";

const EletricType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Elétrico:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo elétrico são verdadeiras centelhas de energia
                e vivacidade. Com suas caudas eletrizantes e poderosas
                descargas, essas criaturas iluminam o cenário com sua
                eletricidade pulsante. Movimentos como "Choque do Trovão" e
                "Raio Gigante" evidenciam sua capacidade de dominar as correntes
                elétricas em batalha. Além disso, sua agilidade e velocidade os
                tornam mestres na arte de surpreender seus oponentes. Os Pokémon
                elétricos são conhecidos por sua adaptabilidade e por
                prosperarem em situações desafiadoras. Seu espírito indomável
                reflete a natureza imprevisível da eletricidade, que pode tanto
                trazer vida quanto energia destrutiva. Ao treinar ao lado dessas
                fascinantes criaturas, os treinadores aprendem a importância de
                canalizar sua própria energia de forma positiva e a enfrentar
                obstáculos com fervor e entusiasmo. O vínculo entre treinador e
                Pokémon elétrico é verdadeiramente eletrizante, conduzindo-os a
                uma parceria repleta de faíscas de amizade e vitórias
                emocionantes.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_ELETRIC_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_ELETRIC_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Elétrico.png" alt="Tipo Elétrico" />
        </Col>
      </Row>
    </>
  );
};

export default EletricType;
