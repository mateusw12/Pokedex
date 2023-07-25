import { Row } from "antd";
import "../style.css";

const OrangeIslands = () => {
  return (
    <>
      <Row>
        <div className="region-container">
          <div>
            <div className="region-title">
              <h1>Ilhas Laranja:</h1>
            </div>
            <div className="region-text">
              <p>
                As Ilhas Laranjas são uma região tropical exótica e fascinante,
                localizada ao sul de Kanto e Johto, no mundo Pokémon. Inspirada
                no arquipélago de Havaí, essa região é conhecida por suas praias
                ensolaradas, paisagens exuberantes e uma variedade de atividades
                de lazer. Introduzida nos jogos "Pokémon Orange Islands" (Ilhas
                Laranjas) em uma extensão da primeira geração de jogos, essa
                região é famosa por oferecer uma experiência única para os
                treinadores Pokémon.
              </p>
              <p>
                Uma curiosidade intrigante sobre as Ilhas Laranjas é a
                existência de Templos Laranjas, locais místicos onde Pokémon
                lendários habitam. A lenda diz que apenas treinadores com
                corações puros e sinceros podem se aproximar desses locais
                sagrados e despertar a bondade interior dos Pokémon lendários.
                Além disso, essa região é famosa por sua Liga Laranja, onde
                treinadores habilidosos podem desafiar os líderes dos Templos
                Laranjas e conquistar a ilustre Taça Laranja, um prêmio cobiçado
                entre os treinadores.
              </p>
              <p>
                Embora as Ilhas Laranjas sejam conhecidas por sua exclusividade,
                elas também apresentam alguns dos Pokémon mais exóticos e únicos
                do mundo Pokémon. Entre os Pokémon mais famosos dessa região
                estão o Surfing Pikachu, famoso por sua habilidade de surfar nas
                ondas do oceano, e o Laranja Leagues Champion Dragonite, um
                Pokémon poderoso e respeitado que defende as ilhas com
                ferocidade. Com suas lendas místicas e Pokémon distintos, as
                Ilhas Laranjas oferecem uma aventura tropical inesquecível e uma
                paleta colorida de criaturas para treinadores corajosos que
                buscam desvendar os mistérios desse paraíso Pokémon.
              </p>
            </div>
          </div>
          <div className="region-image">
            <img
              src="/assets/region/orangeIslands/orangeIslands_1.png"
              alt="Paisagem 1"
            />
            <img
              src="/assets/region/orangeIslands/orangeIslands_2.png"
              alt="Paisagem 2"
            />
            <img
              src="/assets/region/orangeIslands/orangeIslands_3.png"
              alt="Paisagem 3"
            />
            <img
              src="/assets/region/orangeIslands/orangeIslands_4.png"
              alt="Paisagem 4"
            />
          </div>
        </div>
      </Row>
    </>
  );
};

export default OrangeIslands;
