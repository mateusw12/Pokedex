import { Row } from "antd";
import "../style.css";

const Hoenn = () => {
  return (
    <>
      <Row>
        <div className="region-container">
          <div>
            <div className="region-title">
              <h1>Hoenn:</h1>
            </div>
            <div className="region-text">
              <p>
                A região de Hoenn é um paraíso tropical localizado a sudoeste de
                Johto e Kanto. Inspirada na região de Kyushu, no Japão, Hoenn é
                famosa por suas paisagens deslumbrantes e diversificadas, que
                variam de praias ensolaradas a densas florestas e vulcões
                ativos. Introduzida nos jogos da terceira geração, como "Pokémon
                Ruby" e "Pokémon Sapphire", Hoenn abriga uma variedade de
                Pokémon da geração três, oferecendo aos treinadores novas e
                emocionantes espécies para descobrir.
              </p>
              <p>
                Uma curiosidade única sobre Hoenn é a presença de equipes vilãs
                em cada jogo da região. A Equipe Aqua e a Equipe Magma têm
                objetivos diferentes relacionados ao controle dos lendários
                Pokémon Kyogre e Groudon, respectivamente, e isso desempenha um
                papel crucial na trama do jogo. Além disso, Hoenn é a primeira
                região a introduzir habilidades especiais para Pokémon, que
                adicionam novas camadas de estratégia e complexidade às
                batalhas.
              </p>
              <p>
                Entre os Pokémon mais famosos de Hoenn estão os três iniciais:
                Treecko, o Pokémon tipo Grama; Torchic, o Pokémon tipo Fogo; e
                Mudkip, o Pokémon tipo Água. Esses Pokémon têm sido favoritos
                dos treinadores desde que foram apresentados, e suas evoluções,
                Sceptile, Blaziken e Swampert, são adições poderosas às equipes
                dos jogadores. Além disso, Hoenn abriga lendários Pokémon
                icônicos, como Rayquaza, Groudon e Kyogre, que são reverenciados
                como deuses da natureza e desempenham um papel fundamental na
                história da região. Com sua paisagem vibrante e Pokémon
                marcantes, Hoenn continua a encantar e desafiar treinadores em
                suas emocionantes aventuras.
              </p>
            </div>
          </div>
          <div className="region-image">
            <img src="/assets/region/hoenn/hoenn_1.png" alt="Paisagem 1" />
            <img src="/assets/region/hoenn/hoenn_2.png" alt="Paisagem 2" />
            <img src="/assets/region/hoenn/hoenn_3.png" alt="Paisagem 3" />
            <img src="/assets/region/hoenn/hoenn_4.png" alt="Paisagem 4" />
          </div>
        </div>
      </Row>
    </>
  );
};

export default Hoenn;
