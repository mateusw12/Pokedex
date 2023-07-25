import { Row } from "antd";
import "../style.css";

const Kanto = () => {
  return (
    <>
      <Row>
        <div className="region-container">
          <div>
            <div className="region-title">
              <h1>Kanto:</h1>
            </div>
            <div className="region-text">
              <p>
                A região de Kanto é onde tudo começou, a primeira e icônica
                região apresentada na série principal de jogos Pokémon.
                Localizada a oeste de Johto, inspirada na região de Kansai, no
                Japão, Kanto é conhecida por sua rica história e tradição
                Pokémon. Foi introduzida na primeira geração de jogos, incluindo
                "Pokémon Red" e "Pokémon Blue", e desde então tem sido
                reverenciada como a terra natal de alguns dos Pokémon mais
                emblemáticos e queridos da franquia.
              </p>
              <p>
                Os treinadores que exploram Kanto encontrarão uma variedade de
                Pokémon clássicos, muitos dos quais se tornaram ícones da
                cultura pop ao longo das décadas. Pikachu, a adorável mascote
                amarela de bochechas vermelhas, é sem dúvida um dos Pokémon mais
                famosos de Kanto e de toda a franquia. Além disso, Charizard, o
                poderoso Pokémon do tipo Fogo e Voador; Bulbasaur, o Pokémon
                inicial de tipo Grama e Venenoso; e Squirtle, o amigável Pokémon
                de tipo Água, também são extremamente populares e amplamente
                reconhecidos.
              </p>
              <p>
                Kanto abriga cidades vibrantes e locais emblemáticos, como a
                famosa cidade de Pallet, onde se encontra o Professor Carvalho,
                responsável por dar aos treinadores seus primeiros Pokémon. Além
                disso, a Liga Pokémon de Kanto é o desafio final para os
                treinadores, onde eles enfrentam os Líderes de Ginásio para
                ganhar insígnias e, eventualmente, lutar pelo título de Campeão
                da região. Com sua importância histórica e Pokémon icônicos,
                Kanto continua a ser um lugar de grande significado e nostalgia
                para os fãs de Pokémon em todo o mundo.
              </p>
            </div>
          </div>
          <div className="region-image">
            <img src="/assets/region/kanto/kanto_1.png" />
            <img src="/assets/region/kanto/kanto_2.png" />
            <img src="/assets/region/kanto/kanto_3.png" />
            <img src="/assets/region/kanto/kanto_4.png" />
          </div>
        </div>
      </Row>
    </>
  );
};

export default Kanto;
