import { Row } from "antd";
import { IconType } from "react-icons";
import { FaMountain } from "react-icons/fa";
import EvolutionCard from "../evolution-card";
import "../style.css";

const Primal = () => {
  return (
    <>
      <Row>
        <div className="mega-evolution-container">
          <div>
            <div className="mega-evolution-title">
              <h1>Primal:</h1>
            </div>
            <div className="mega-evolution-text">
              <p>
                A Evolução Primal é um fenômeno misterioso e poderoso que foi
                revelado em uma das regiões mais antigas e remotas do mundo
                Pokémon. De acordo com antigas lendas, durante um evento
                cataclísmico há milênios atrás, alguns Pokémon ancestrais
                despertaram uma força primordial adormecida dentro deles. Essa
                energia ancestral transformou-os em formas ainda mais poderosas,
                conhecidas como "Primal Pokémon". Com o tempo, essas formas
                foram esquecidas e consideradas apenas mitos até que treinadores
                intrépidos desvendaram os segredos por trás da evolução primal
              </p>
              <p>
                A evolução primal é uma forma de evolução única e exclusiva para
                certos Pokémon lendários, geralmente associados a elementos
                primordiais, como terra, mar e céu. Durante o processo de
                evolução primal, esses Pokémon retrocedem à sua forma ancestral,
                ganhando uma aparência mais primitiva e desencadeando um poder
                inigualável. Essas formas primal não apenas fortalecem suas
                estatísticas e habilidades, mas também evocam uma conexão mais
                profunda com a natureza e o cosmos, tornando-os verdadeiros
                guardiões da ordem natural.
              </p>
              <p>
                Uma curiosidade fascinante sobre a evolução primal é o seu
                efeito sobre o ambiente circundante. Quando um Pokémon lendário
                passa por essa transformação poderosa, sua aura primordial pode
                influenciar as condições climáticas locais. Por exemplo, um
                Pokémon primal relacionado à chuva pode trazer tempestades
                torrenciais, enquanto um Pokémon primal associado ao sol pode
                fazer o tempo ficar ensolarado e quente. Essas mudanças
                climáticas repentinas podem tanto ajudar quanto desafiar os
                treinadores que buscam enfrentar essas criaturas lendárias.
              </p>
            </div>
          </div>
          <div className="mega-evolution-image">
            <div>
              <img
                src="/assets/primal/primal1.png"
                alt="Símbolo Primal Groundon"
                width={200}
              />
              <img
                src="/assets/primal/primal2.png"
                alt="Símbolo Primal Kyogre"
                width={200}
              />
            </div>
            <EvolutionCard
              icon={FaMountain as IconType}
              title={"Mostrar Evolução Primal"}
              path={"/primal-visible"}
            />
          </div>
        </div>
      </Row>
    </>
  );
};

export default Primal;
