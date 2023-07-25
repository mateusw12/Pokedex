import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_NORMAL_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_NORMAL_TYPE } from "../../../constant/pokemon-types";

const NormalType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Normal:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo normal são criaturas versáteis e singulares,
                representando a diversidade e a simplicidade da vida cotidiana.
                Com sua aparência variada e movimentos adaptáveis, essas
                criaturas personificam a essência comum e universal de todos os
                seres. Movimentos como "Investida" e "Hiper Voz" demonstram sua
                capacidade de se adaptar a diferentes situações de batalha. Além
                disso, os Pokémon normal têm um papel fundamental na
                complexidade do mundo Pokémon, sendo encontrados em todos os
                lugares e assumindo diferentes formas, desde animais domésticos
                até criaturas exóticas. São símbolos de equilíbrio e inclusão,
                conectando-se com todas as facetas da vida ao nosso redor. Ao
                treinar ao lado dessas criaturas multifacetadas, os treinadores
                aprendem sobre a importância de aceitar a si mesmos e aos outros
                como são, valorizando a singularidade de cada indivíduo. A
                relação entre treinador e Pokémon normal é como um abraço
                acolhedor, repleto de compreensão e respeito. Juntos, eles
                descobrem que mesmo na simplicidade do dia a dia, há lições
                valiosas a serem aprendidas, e que a verdadeira força reside na
                conexão autêntica e na apreciação da beleza inerente de cada
                ser. Unidos pela harmonia do cotidiano, eles percorrem o mundo
                com serenidade, deixando uma trilha de amizade e aceitação por
                onde passam.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_NORMAL_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_NORMAL_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Normal.png" alt="Tipo Normal" />
        </Col>
      </Row>
    </>
  );
};

export default NormalType;
