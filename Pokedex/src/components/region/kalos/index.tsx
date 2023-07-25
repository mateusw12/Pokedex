import { Row } from "antd";
import "../style.css";

const Kalos = () => {
  return (
    <>
      <Row>
        <div className="region-container">
          <div>
            <div className="region-title">
              <h1>Kalos:</h1>
            </div>
            <div className="region-text">
              <p>
                A região de Kalos é uma terra de elegância e charme localizada a
                oeste de Unova. Inspirada na região da França, Kalos é um lugar
                de beleza sofisticada, com cidades magníficas e paisagens
                deslumbrantes. Introduzida na sexta geração de jogos, como
                "Pokémon X" e "Pokémon Y", Kalos abriga uma variedade de Pokémon
                da geração seis, oferecendo aos treinadores novas espécies e
                experiências cativantes em sua jornada.
              </p>
              <p>
                Uma curiosidade intrigante sobre Kalos é a presença do Mestre do
                Pokémon Fairy-type, que possui uma conexão única com os Pokémon
                desse tipo encantador. Além disso, a região é famosa por seu
                lendário Pokémon, Xerneas e Yveltal, que personificam os
                princípios da vida e da destruição, respectivamente. Sua
                história misteriosa e poderes impressionantes adicionam
                profundidade à narrativa envolvente de Kalos.
              </p>
              <p>
                Entre os Pokémon mais famosos de Kalos estão os três iniciais:
                Chespin, o Pokémon tipo Grama; Fennekin, o Pokémon tipo Fogo; e
                Froakie, o Pokémon tipo Água. Esses adoráveis parceiros de
                início cativaram os treinadores desde o início de suas jornadas
                em Kalos. Suas evoluções, Chesnaught, Delphox e Greninja, são
                companheiros leais e formidáveis na busca para se tornar o
                Campeão Pokémon da região. Além disso, Kalos abriga Pokémon
                notáveis, como a graciosa Gardevoir, o impressionante Talonflame
                e o enigmático Aegislash, todos com fãs leais e papéis
                fundamentais nas aventuras de treinadores em Kalos. Com sua
                sofisticação e Pokémon icônicos, Kalos continua a ser uma região
                admirada e apreciada pelos entusiastas de Pokémon em todo o
                mundo.
              </p>
            </div>
          </div>
          <div className="region-image">
            <img src="/assets/region/kalos/kalos_1.png" alt="Paisagem 1" />
            <img src="/assets/region/kalos/kalos_2.png" alt="Paisagem 2" />
            <img src="/assets/region/kalos/kalos_3.png" alt="Paisagem 3" />
            <img src="/assets/region/kalos/kalos_4.png" alt="Paisagem 4" />
          </div>
        </div>
      </Row>
    </>
  );
};

export default Kalos;
