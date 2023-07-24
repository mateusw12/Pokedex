import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_DARK_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_DARK_TYPE } from "../../../constant/pokemon-types";

const DarkType = () => {
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
                Os Pokémon do tipo sombrio exalam uma aura enigmática e
                misteriosa, tornando-os verdadeiras criaturas das sombras. Com
                habilidades sorrateiras e táticas engenhosas, esses Pokémon se
                destacam por sua astúcia e habilidade em manipular situações a
                seu favor. Movimentos como "Mordida Sombria" e "Punho das
                Sombras" representam o poder sinistro que possuem. Além disso,
                muitos deles têm histórias intrigantes e origens obscuras que os
                tornam ainda mais fascinantes. Embora possam parecer
                intimidadores, os Pokémon do tipo sombrio muitas vezes carregam
                um fardo emocional, revelando uma dualidade entre escuridão e
                luz. Treiná-los requer compreensão e empatia, permitindo aos
                treinadores desvendar seus mistérios e desbloquear seu
                verdadeiro potencial. Ao lado dessas enigmáticas criaturas, os
                treinadores descobrem que nem tudo é preto e branco, e que há
                beleza mesmo nas profundezas mais sombrias da jornada Pokémon.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_DARK_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_DARK_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Noturno.png" alt="Tipo Sombrio" />
        </Col>
      </Row>
    </>
  );
};

export default DarkType;
