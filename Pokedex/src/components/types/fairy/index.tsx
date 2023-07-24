import { Col, Row } from "antd";
import CarouselType from "../../utils/carouselType";
import Table from "../../utils/table";
import "../style.css";
import {
  DATA_TABLE_COLUMN,
  POKEMON_FAIRY_ADVANTAGE,
} from "../../../constant/pokemonAdvantagesDisadvantages";
import { POKEMON_FAIRY_TYPE } from "../../../constant/pokemon-types";

const FairyType = () => {
  return (
    <>
      <Row>
        <div className="type-container">
          <div>
            <div className="type-title">
              <h1>Tipo Fada:</h1>
            </div>
            <div className="type-text">
              <p>
                Os Pokémon do tipo fada irradiam uma aura de encanto e magia,
                trazendo consigo uma essência celestial e delicada. Com asas
                etéreas e poderes mágicos, essas criaturas envolvem o mundo
                Pokémon em um brilho suave e reconfortante. Movimentos como
                "Brilho Mágico" e "Encantar" demonstram a natureza cativante de
                suas habilidades. Além disso, os Pokémon fada têm o poder único
                de transformar batalhas com sua presença, neutralizando os
                ataques mais poderosos com sua resistência especial. São
                símbolos de esperança e empatia, sempre dispostos a ajudar e
                proteger aqueles que estão em necessidade. Ao embarcar em uma
                jornada com essas místicas criaturas, os treinadores aprendem
                sobre a importância da compaixão e da aceitação, compreendendo
                que nem sempre é necessário ser o mais forte para fazer a
                diferença. A magia que permeia a relação entre treinador e
                Pokémon fada é algo verdadeiramente encantador, construindo
                laços que transcendem o imaginável e transformando cada batalha
                em uma dança harmoniosa de coragem e afeto.
              </p>
            </div>
          </div>
          <div className="type-image">
            <CarouselType pokemons={POKEMON_FAIRY_TYPE} />
          </div>
        </div>
      </Row>
      <Row style={{ paddingTop: 20 }}>
        <Col style={{ paddingTop: 20 }} xs={24} sm={12}>
          <Table
            columns={DATA_TABLE_COLUMN}
            dataSource={POKEMON_FAIRY_ADVANTAGE}
            title="Vantagens e Desvantagens"
          />
        </Col>
        <Col style={{ paddingTop: 20 }} xs={24} offset={4} sm={8}>
          <img src="/assets/type-insignia/Fada.png" alt="Tipo Fada" />
        </Col>
      </Row>
    </>
  );
};

export default FairyType;
