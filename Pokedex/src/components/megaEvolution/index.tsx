import { Row } from "antd";
import "./style.css";
import MegaEvolutionCard from "./mega-evolution-card";

const MegaEvolution = () => {
  return (
    <>
      <Row>
        <div className="mega-evolution-container">
          <div>
            <div className="mega-evolution-title">
              <h1>Mega Evolução:</h1>
            </div>
            <div className="mega-evolution-text">
              <p>
                As Mega Evoluções foram apresentadas pela primeira vez na sexta
                geração de jogos, com "Pokémon X" e "Pokémon Y". Essa mecânica
                única e empolgante permitiu que certos Pokémon atingissem
                temporariamente uma forma evoluída ainda mais poderosa,
                desencadeando habilidades especiais e alterando suas
                estatísticas de batalha. As Mega Evoluções representam um
                vínculo ainda mais profundo entre treinador e Pokémon, onde a
                confiança e o carinho mútuos desbloqueiam o verdadeiro potencial
                das criaturas.
              </p>
              <p>
                O conceito de Mega Evoluções é atribuído ao personagem Professor
                Sycamore, um pesquisador Pokémon renomado por seus estudos sobre
                a ligação entre humanos e Pokémon. Ele revela que as Mega
                Evoluções foram descobertas em regiões diferentes, mas todas
                compartilham a mesma essência - a intensa conexão entre
                treinador e Pokémon. Com a ajuda de uma Pedra Mega Evolutiva
                específica para cada Pokémon, a Mega Evolução pode ser ativada
                durante batalhas, trazendo um elemento estratégico emocionante
                às lutas Pokémon.
              </p>
              <p>
                Desde sua introdução, as Mega Evoluções se tornaram uma
                característica distintiva e adorada da série Pokémon. Ao longo
                das gerações, vários Pokémon foram agraciados com a capacidade
                de Mega Evoluir, tornando-os favoritos entre os fãs e valiosas
                adições às equipes de treinadores competitivos. As Mega
                Evoluções continuam a ser uma parte emocionante e querida da
                franquia, evidenciando o laço especial entre treinadores e seus
                amados Pokémon, enquanto enfrentam desafios e se superam em
                batalhas épicas.
              </p>
            </div>
          </div>
          <div className="mega-evolution-image">
            <img
              src="/public/assets/mega-evolution/mega-evolution.png"
              alt="Paisagem 2"
            />
            <MegaEvolutionCard />
          </div>
        </div>
      </Row>
    </>
  );
};

export default MegaEvolution;
