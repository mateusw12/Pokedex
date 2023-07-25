import { Row } from "antd";
import "../style.css";

const Galar = () => {
  return (
    <>
      <Row>
        <div className="region-container">
          <div>
            <div className="region-title">
              <h1>Galar:</h1>
            </div>
            <div className="region-text">
              <p>
                Localizada no cenário inspirado na Grã-Bretanha, a região de
                Galar se destaca como um espetáculo de paisagens pitorescas e
                tradições antigas entrelaçadas com a modernidade. Banhada pelas
                brumas místicas e campos verdejantes, Galar é o palco da oitava
                geração de Pokémon, apresentada nos jogos "Pokémon Sword" e
                "Pokémon Shield". Nessa região, os Pokémon exibem o fenômeno
                conhecido como "Dynamax", transformando-se em gigantescas
                criaturas durante as batalhas, criando uma experiência única e
                emocionante para treinadores de todo o mundo.
              </p>
              <p>
                Além de suas belas paisagens, Galar é conhecida por suas
                Corridas de Pókemon, um evento popular que atrai fãs de todo o
                país para torcer por seus treinadores favoritos. Essas corridas
                emocionantes acontecem em um estádio colossal, onde Pokémon
                Dynamax enfrentam-se em batalhas eletrizantes. Além disso, Galar
                possui o lendário Pokémon Zacian e Zamazenta, dois guardiões
                reverenciados por seu papel na história da região.
              </p>
              <p>
                Entre os Pokémon mais famosos de Galar estão os três iniciais:
                Grookey, Scorbunny e Sobble. Essas adoráveis criaturas cativaram
                os treinadores desde o início e oferecem escolhas emocionantes
                para começar sua jornada. Outros Pokémon icônicos da região
                incluem Alcremie, com suas formas variadas e doces saborosos, e
                Corviknight, um majestoso Pokémon que serve como transporte
                aéreo confiável em Galar. Com sua rica história e seleção
                diversificada de Pokémon, Galar oferece aos treinadores uma
                experiência inesquecível e emocionante em sua busca para se
                tornarem campeões da região.
              </p>
            </div>
          </div>
          <div className="region-image">
            <img src="/assets/region/galar/galar_1.png" />
            <img src="/assets/region/galar/galar_2.png" />
            <img src="/assets/region/galar/galar_3.png" />
            <img src="/assets/region/galar/galar_4.png" />
          </div>
        </div>
      </Row>
    </>
  );
};

export default Galar;
