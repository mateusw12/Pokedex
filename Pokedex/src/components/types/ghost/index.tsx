import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_GHOST_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_GHOST_TYPE } from "../../../constant/pokemon-types";

const Ghostype = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Fantasma:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo fantasma são enigmáticos e envoltos em
                mistério, transcendendo os limites entre o mundo dos vivos e o
                dos mortos. Com aparências etéreas e habilidades sobrenaturais,
                essas criaturas despertam curiosidade e temor em igual medida.
                Movimentos como "Bola Sombria" e "Pesadelo" demonstram a
                natureza sinistra e intrigante de seus poderes. Além disso, os
                Pokémon fantasma têm a habilidade única de atravessar barreiras
                físicas e manipular energias invisíveis. São guardiões dos
                segredos ocultos e dos mistérios do universo, desafiando a
                compreensão humana com sua natureza além da mortalidade. Ao
                treinar ao lado desses enigmáticos seres, os treinadores
                aprendem sobre a importância da coragem diante do desconhecido e
                a capacidade de enfrentar seus próprios medos. A relação entre
                treinador e Pokémon fantasma é um elo que ultrapassa a própria
                existência, revelando que a verdadeira força reside em aceitar a
                dualidade da vida e da morte, do visível e do invisível. Juntos,
                eles desvendam os enigmas do mundo sobrenatural, deixando uma
                marca indelével em suas almas, e provando que mesmo na escuridão
                mais profunda, a luz da amizade pode brilhar intensamente.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_GHOST_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_GHOST_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Fantasma.png" alt="Tipo Fantasma" />
        </Col>
      </Row>
    </>
  );
};

export default Ghostype;
