import { Row } from "antd";
import "../style.css";

const DefaultEvolution = () => {
  return (
    <>
      <Row>
        <div className="mega-evolution-container">
          <div>
            <div className="mega-evolution-title">
              <h1>Evolução:</h1>
            </div>
            <div className="mega-evolution-text">
              <p>
                A evolução padrão é um dos elementos mais característicos e
                emocionantes do mundo Pokémon. Desde os primórdios da série, os
                treinadores têm se encantado ao observar seus Pokémon crescerem
                e se transformarem em formas mais fortes e impressionantes. A
                evolução é um processo natural e inevitável para a maioria dos
                Pokémon, e ocorre quando eles atingem um determinado nível de
                experiência ou cumprem certas condições específicas.
              </p>
              <p>
                Cada espécie de Pokémon tem sua própria linha evolutiva, que
                geralmente consiste em três estágios: a forma inicial, a forma
                intermediária e a forma final. Conforme os Pokémon ganham
                experiência em batalhas e interagem com seus treinadores, eles
                avançam por esses estágios, adquirindo novas habilidades e
                atributos ao longo do caminho. A evolução pode trazer mudanças
                dramáticas na aparência do Pokémon, bem como uma melhoria
                significativa em suas estatísticas de combate.
              </p>
              <p>
                O processo de evolução é uma jornada emocionante para
                treinadores e Pokémon, fortalecendo o vínculo entre eles. À
                medida que os laços se fortificam, a evolução se torna uma
                celebração de crescimento e superação, permitindo que os Pokémon
                alcancem seu pleno potencial. Além disso, a evolução também é
                uma forma de adaptação ao ambiente, permitindo que os Pokémon se
                tornem mais resilientes e competitivos para enfrentar os
                desafios que encontrarão em suas jornadas.
              </p>
              <p>
                As linhas evolutivas dos Pokémon são um testemunho da riqueza e
                diversidade do mundo Pokémon. Cada espécie possui sua própria
                história e características únicas que os tornam especiais para
                os treinadores. A evolução padrão é um dos pilares fundamentais
                da experiência Pokémon, incentivando a exploração, a dedicação e
                a alegria de ver seus companheiros evoluírem ao longo do tempo,
                criando memórias duradouras que transcendem a tela do jogo.
              </p>
            </div>
          </div>
          <div className="mega-evolution-image">
            <img
              src="/public/assets/default-evolution/evolution1.png"
              alt="Símbolo Gigantamax"
            />
          </div>
        </div>
      </Row>
    </>
  );
};

export default DefaultEvolution;
