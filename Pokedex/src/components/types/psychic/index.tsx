import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_PSYCHIC_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_PSYCHIC_TYPE } from "../../../constant/pokemon-types";

const PsychicType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Psíquico:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo psíquico são seres dotados de uma mente
                brilhante e poderes mentais transcendentes, representando a
                profundidade do intelecto e a conexão com o universo interior.
                Com suas habilidades telepáticas e poderes psíquicos, essas
                criaturas personificam a sabedoria e a percepção além do comum.
                Movimentos como "Confusão" e "Choque Psíquico" demonstram sua
                capacidade de manipular a mente de seus oponentes em batalha.
                Além disso, os Pokémon psíquico têm um entendimento único do
                mundo ao seu redor, percebendo nuances que escapam ao olhar
                comum. São símbolos de intuição e autoconhecimento, buscando
                constantemente a verdade e a evolução interior. Ao treinar ao
                lado desses seres mentais, os treinadores aprendem sobre a
                importância da empatia e da autenticidade, compreendendo que a
                força interior é tão importante quanto a força exterior. A
                relação entre treinador e Pokémon psíquico é como um elo
                telepático, onde a sintonia e o respeito são fundamentais para o
                sucesso. Juntos, eles exploram as profundezas da mente e os
                limites da compreensão, desvendando os mistérios do ser humano e
                do mundo que os rodeia. Unidos pelo poder da mente, eles se
                tornam uma força transcendente, capaz de superar qualquer
                obstáculo e desafiar a própria realidade.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_PSYCHIC_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_PSYCHIC_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Psíquico.png" alt="Tipo Psíquico" />
        </Col>
      </Row>
    </>
  );
};

export default PsychicType;
