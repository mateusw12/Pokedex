import { Row } from "antd";
import "../style.css";

const Unova = () => {
  return (
    <>
      <Row>
        <div className="region-container">
          <div>
            <div className="region-title">
              <h1>Unova:</h1>
            </div>
            <div className="region-text">
              <p>
                A região de Unova é um vibrante cenário inspirado na cidade de
                Nova York, localizada ao sudoeste de Sinnoh. Introduzida na
                quinta geração de jogos, como "Pokémon Black" e "Pokémon White",
                Unova é uma terra de contrastes, combinando metrópoles modernas
                com áreas rurais pitorescas. Essa região é conhecida por sua
                rica cultura e diversidade, oferecendo aos treinadores uma
                experiência única em sua jornada para se tornarem Campeões
                Pokémon.
              </p>
              <p>
                Uma curiosidade interessante sobre Unova é a presença de
                Estações do Ano, que afetam a aparência e os Pokémon encontrados
                em certas áreas. Isso adiciona um elemento dinâmico à exploração
                da região, incentivando os treinadores a voltarem aos locais em
                diferentes épocas para descobrir novas espécies e recursos. Além
                disso, Unova é o lar do enigmático Pokémon Kyurem, que está
                ligado aos lendários Pokémon Reshiram e Zekrom, formando um trio
                poderoso e misterioso.
              </p>
              <p>
                Entre os Pokémon mais famosos de Unova estão os três iniciais:
                Snivy, o Pokémon tipo Grama; Tepig, o Pokémon tipo Fogo; e
                Oshawott, o Pokémon tipo Água. Essas adoráveis criaturas
                capturaram a imaginação dos treinadores desde o início de suas
                jornadas em Unova. Suas evoluções, Serperior, Emboar e Samurott,
                oferecem poderosos aliados para enfrentar os desafios da região.
                Além disso, Unova é lar de lendários Pokémon icônicos, como
                Zekrom, o poderoso dragão elétrico, e Reshiram, o majestoso
                dragão de fogo, ambos símbolos da dualidade presente na história
                da região. Com sua cultura rica e Pokémon cativantes, Unova
                continua a ser uma das regiões mais memoráveis e queridas pelos
                fãs de Pokémon.
              </p>
            </div>
          </div>
          <div className="region-image">
            <img src="/assets/region/unova/unova_1.png" />
            <img src="/assets/region/unova/unova_2.png" />
            <img src="/assets/region/unova/unova_3.png" />
            <img src="/assets/region/unova/unova_4.png" />
          </div>
        </div>
      </Row>
    </>
  );
};

export default Unova;
