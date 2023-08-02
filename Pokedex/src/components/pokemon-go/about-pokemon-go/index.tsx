import { Row } from "antd";
import "./style.css";
import EvolutionCard from "../../evolution/evolution-card";
import { FaExternalLinkAlt } from "react-icons/fa";
import { IconType } from "react-icons";
import { BsDownload } from "react-icons/bs";

const AboutPokemonGo = () => {
  return (
    <Row>
      <div className="region-container">
        <div>
          <div className="region-title">
            <h1>Sobre o Jogo:</h1>
          </div>
          <div className="region-text">
            <p>
              Pokémon GO revolucionou a maneira como milhões de pessoas em todo
              o mundo interagem com o universo Pokémon, fundindo a realidade
              aumentada com a paixão pelos adoráveis monstros de bolso. Lançado
              em 2016 pela Niantic em colaboração com a The Pokémon Company, o
              jogo rapidamente se tornou um fenômeno cultural, levando jogadores
              a uma aventura única e interativa.
            </p>
            <p>
              O conceito inovador por trás de Pokémon GO é simples, mas
              cativante: os jogadores podem caçar, capturar e treinar Pokémon no
              mundo real, usando seus dispositivos móveis como janelas para o
              universo Pokémon. Ao explorar suas cidades, parques e locais
              históricos, os treinadores podem encontrar Pokémon em locais que
              correspondem aos seus tipos e características. Isso transforma o
              ato de sair para jogar em uma experiência educativa e social,
              incentivando as pessoas a se moverem, interagirem e explorarem
              ambientes que talvez não tivessem considerado antes.
            </p>
            <p>
              Além da caça aos Pokémon, Pokémon GO também introduziu Raids e
              Batalhas de Treinador, que permitem que os jogadores colaborem e
              compitam em eventos em tempo real. Essas mecânicas multiplayer
              adicionaram um novo nível de camaradagem e estratégia ao jogo,
              encorajando os treinadores a se unirem para derrotar Pokémon
              poderosos e alcançar recompensas valiosas.
            </p>
            <p>
              Um aspecto notável de Pokémon GO é como ele conseguiu transcender
              as barreiras do jogo para se tornar uma plataforma para a
              interação social. Eventos de comunidade e festivais Pokémon GO
              atraem multidões de jogadores, proporcionando uma sensação de
              pertencimento a uma comunidade global de treinadores. Além disso,
              o jogo também promoveu o trabalho em equipe e a exploração local,
              conectando as pessoas de maneira única e proporcionando
              oportunidades para novas amizades.
            </p>
          </div>
        </div>
        <div className="region-image">
          <img src="/public/assets/pokemon-go/simbol.jpg" alt="Meowth" />
          <EvolutionCard
            path={"https://pokemongolive.com/?hl=pt_BR"}
            icon={FaExternalLinkAlt as IconType}
            title={"Navegar até página principal do jogo"}
          />
          <EvolutionCard
            path={
              "https://play.google.com/store/apps/details?id=com.nianticlabs.pokemongo&hl=pt_BR&gl=US"
            }
            icon={BsDownload as IconType}
            title={"Baixar jogo"}
          />
        </div>
      </div>
    </Row>
  );
};

export default AboutPokemonGo;
