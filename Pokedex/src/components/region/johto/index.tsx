import { Row } from "antd";
import "../style.css";

const Johto = () => {
  return (
    <>
      <Row>
        <div className="region-container">
          <div>
            <div className="region-title">
              <h1>Johto:</h1>
            </div>
            <div className="region-text">
              <p>
                A região de Johto é uma terra mágica que se encontra a oeste da
                região de Kanto, com a qual possui uma conexão profunda.
                Inspirada na região de Kansai, no Japão, Johto é um local
                repleto de tradições e lendas Pokémon. Foi apresentada nos jogos
                da segunda geração, incluindo "Pokémon Gold" e "Pokémon Silver",
                e é conhecida por sua atmosfera encantadora e rica herança
                histórica.
              </p>
              <p>
                Uma curiosidade fascinante sobre Johto é a Torre Queimada, um
                local histórico onde dizem que lendários Pokémon lendários
                ressurgem a cada cem anos. Além disso, Johto é lar da Batalha da
                Fronteira, um local de treinamento de elite onde os treinadores
                mais habilidosos buscam desafiar e aprimorar suas habilidades de
                batalha. A região abriga uma grande variedade de ambientes,
                desde densas florestas até cavernas misteriosas e o majestoso
                Monte Mortar.
              </p>
              <p>
                Entre os Pokémon mais famosos de Johto estão os três iniciais:
                Chikorita, o Pokémon tipo Grama; Cyndaquil, o Pokémon tipo Fogo;
                e Totodile, o Pokémon tipo Água. Esses adoráveis Pokémon têm um
                lugar especial nos corações dos treinadores, e suas evoluções,
                Meganium, Typhlosion e Feraligatr, são poderosas adições às
                equipes de qualquer treinador. Além disso, Johto é conhecida por
                seus lendários Pokémon, como as criaturas místicas Raikou, Entei
                e Suicune, que vagam pela região e são símbolos de sua rica
                mitologia. Com sua atmosfera nostálgica e Pokémon emblemáticos,
                Johto continua sendo uma das regiões mais amadas e memoráveis da
                série Pokémon.
              </p>
            </div>
          </div>
          <div className="region-image">
            <img src="/assets/region/johto/johto_1.png" alt="Paisagem 1" />
            <img src="/assets/region/johto/johto_2.png" alt="Paisagem 2" />
            <img src="/assets/region/johto/johto_3.png" alt="Paisagem 3" />
            <img src="/assets/region/johto/johto_4.png" alt="Paisagem 4" />
          </div>
        </div>
      </Row>
    </>
  );
};

export default Johto;
