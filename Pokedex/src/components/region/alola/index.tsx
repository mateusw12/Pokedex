import { Row } from "antd";
import "../style.css";

const Alola = () => {
  return (
    <>
      <Row>
        <div className="region-container">
          <div>
            <div className="region-title">
              <h1>Alola:</h1>
            </div>
            <div className="region-text">
              <p>
                Na vastidão do mundo Pokémon, a região de Alola brilha como uma
                joia tropical banhada pelo sol radiante. Localizada no extremo
                sul do universo Pokémon, Alola é um arquipélago composto por
                quatro ilhas exuberantes: Melemele, Akala, Ula'ula e Poni. Cada
                uma dessas ilhas possui características únicas, desde florestas
                exuberantes até paisagens vulcânicas, proporcionando um ambiente
                diversificado para a vida Pokémon.
              </p>
              <p>
                Alola é a região apresentada na sétima geração de Pokémon,
                introduzida nos jogos "Pokémon Sun" e "Pokémon Moon". Os Pokémon
                encontrados em Alola variam desde espécies clássicas, que ganham
                novas formas regionais graças à influência do clima e do
                ambiente local, até novos Pokémon originais. Essas formas
                regionais são um fascinante fenômeno único da região de Alola,
                permitindo que Pokémon familiares, como Vulpix e Sandshrew,
                adquiram novos tipos e aparências cativantes.
              </p>
              <p>
                Entre os Pokémon mais famosos e emblemáticos de Alola estão a
                turquesa Marowak de Alola, conhecida por sua dança com osso e
                sua conexão ancestral com os espíritos; o majestoso Lycanroc,
                que evolui de Rockruff e assume diferentes formas dependendo do
                horário; e o adorável Rowlet, Litten e Popplio, os Pokémon
                iniciais da região que conquistaram o coração de treinadores em
                todo o mundo. Com suas peculiaridades únicas, Pokémon de formas
                regionais e a beleza exótica de suas ilhas, Alola permanece como
                uma das regiões mais cativantes e inesquecíveis para os
                treinadores que buscam novas aventuras em busca da jornada
                Pokémon perfeita.
              </p>
            </div>
          </div>
          <div className="region-image">
            <img src="/assets/region/alola/alola_1.png" />
            <img src="/assets/region/alola/alola_2.png" />
            <img src="/assets/region/alola/alola_3.png" />
            <img src="/assets/region/alola/alola_4.png" />
          </div>
        </div>
      </Row>
    </>
  );
};

export default Alola;
