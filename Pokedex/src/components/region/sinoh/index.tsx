import { Row } from "antd";
import "../style.css";

const Sinoh = () => {
  return (
    <>
      <Row>
        <div className="region-container">
          <div>
            <div className="region-title">
              <h1>Sinoh:</h1>
            </div>
            <div className="region-text">
              <p>
                A região de Sinnoh é um território de paisagens diversas e
                inspiradoras, localizado a noroeste das regiões de Kanto e
                Johto. Baseada na região de Hokkaido, no Japão, Sinnoh é uma
                terra repleta de lendas e mitos Pokémon. Foi introduzida na
                quarta geração de jogos, incluindo "Pokémon Diamond" e "Pokémon
                Pearl", e mais tarde aprimorada em "Pokémon Platinum". Sinnoh é
                conhecida por seu clima variado, com áreas montanhosas cobertas
                de neve, florestas encantadoras e uma grande extensão de mar.
              </p>
              <p>
                Uma curiosidade intrigante sobre Sinnoh é a presença dos
                lendários Pokémon Dialga e Palkia, que são reverenciados como as
                personificações do tempo e do espaço, respectivamente. Sua
                história está profundamente entrelaçada com a trama do jogo,
                adicionando uma dimensão épica à jornada do treinador. Além
                disso, Sinnoh é o lar da Batalha da Fronteira, onde treinadores
                habilidosos podem testar suas habilidades de batalha em uma
                série de desafios emocionantes.
              </p>
              <p>
                Entre os Pokémon mais famosos de Sinnoh estão os três iniciais:
                Turtwig, o Pokémon tipo Grama; Chimchar, o Pokémon tipo Fogo; e
                Piplup, o Pokémon tipo Água. Essas adoráveis criaturas oferecem
                escolhas emocionantes para treinadores iniciantes e suas
                evoluções, Torterra, Infernape e Empoleon, são poderosas aliadas
                para enfrentar os desafios da região. Além disso, a região é
                conhecida por lendários Pokémon como Giratina, conhecido por sua
                forma distorcida e assombrosa, e Arceus, o criador do universo
                Pokémon, que é considerado uma entidade divina. Com sua história
                rica e Pokémon icônicos, Sinnoh continua a ser uma das regiões
                mais amadas e memoráveis da série Pokémon.
              </p>
            </div>
          </div>
          <div className="region-image">
            <img src="/assets/region/sinoh/sinoh_1.png" />
            <img src="/assets/region/sinoh/sinoh_2.png" />
            <img src="/assets/region/sinoh/sinoh_3.png" />
            <img src="/assets/region/sinoh/sinoh_4.png" />
          </div>
        </div>
      </Row>
    </>
  );
};

export default Sinoh;
