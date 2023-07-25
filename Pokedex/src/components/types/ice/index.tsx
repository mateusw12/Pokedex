import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_ICE_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_ICE_TYPE } from "../../../constant/pokemon-types";

const IceType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Gelo:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo gelo são seres glaciais que emanam uma beleza
                gélida e encantadora, representando a frieza e a serenidade dos
                campos nevados. Com seus corpos resplandecentes e poderes
                congelantes, essas criaturas personificam a magia do inverno.
                Movimentos como "Raio de Gelo" e "Véu Gélido" demonstram sua
                capacidade de congelar tudo o que tocam em batalha. Além disso,
                os Pokémon gelo são especialistas em adaptar-se a ambientes
                frios e hostis, resistindo às temperaturas mais extremas. São
                símbolos de calma e perseverança, sempre encontrando beleza na
                efemeridade das paisagens congeladas. Ao treinar ao lado dessas
                criaturas gélidas, os treinadores aprendem sobre a importância
                da paciência e do autocontrole, descobrindo que mesmo na frieza
                aparente, há uma chama interna que os motiva a seguir em frente.
                A relação entre treinador e Pokémon gelo é como o brilho de um
                cristal congelado, refletindo a pureza e a transparência da
                amizade. Juntos, eles desbravam o gelo e encontram calor na
                conexão que compartilham, provando que, mesmo sob camadas de
                frio, o calor do afeto pode derreter qualquer barreira. Unidos
                no coração frio do inverno, eles florescem em uma jornada gelada
                e inesquecível, onde cada passo é um floco de neve na dança
                graciosa da vida.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_ICE_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_ICE_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Gelo.png" alt="Tipo Gelo" />
        </Col>
      </Row>
    </>
  );
};

export default IceType;
