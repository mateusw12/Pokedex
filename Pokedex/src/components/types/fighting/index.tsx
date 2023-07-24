import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_FIGHTING_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_FIGHTING_TYPE } from "../../../constant/pokemon-types";

const FightingType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Lutador:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo lutador são guerreiros destemidos e
                incansáveis, personificando a essência da força e determinação.
                Com golpes poderosos e técnicas de combate refinadas, essas
                criaturas dominam a arte da luta. Movimentos como "Soco
                Dinâmico" e "Chute Voador" evidenciam a ferocidade de suas
                habilidades em batalha. Além disso, os Pokémon lutadores são
                conhecidos por seu espírito competitivo e vontade inabalável de
                superar qualquer desafio. São verdadeiros exemplos de
                perseverança e disciplina, constantemente em busca da excelência
                em suas técnicas. Ao treinar ao lado desses incansáveis
                guerreiros, os treinadores aprendem a importância da dedicação e
                do esforço contínuo para alcançar seus objetivos. A relação
                entre treinador e Pokémon lutador é construída sobre alicerces
                sólidos de respeito mútuo e camaradagem, formando uma equipe
                imbatível pronta para enfrentar qualquer adversário que ouse
                cruzar seu caminho. Unidos pelo desejo de superação e a paixão
                pela luta, essa dupla destemida escreve sua própria história de
                bravura e glória no vasto mundo dos Pokémon.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_FIGHTING_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_FIGHTING_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Lutador.png" alt="Tipo Lutaodr" />
        </Col>
      </Row>
    </>
  );
};

export default FightingType;
