import { Row } from "antd";
import "../style.css";
import EvolutionCard from "../evolution-card";
import { IconType } from "react-icons";
import { GiGiant } from "react-icons/gi";

const Gigantamax = () => {
  return (
    <>
      <Row>
        <div className="mega-evolution-container">
          <div>
            <div className="mega-evolution-title">
              <h1>Gigantamax:</h1>
            </div>
            <div className="mega-evolution-text">
              <p>
                O fenômeno do Gigantamax foi descoberto há séculos em uma região
                remota do mundo Pokémon. Diz a lenda que um grupo de
                pesquisadores pioneiros estava explorando uma misteriosa área
                selvagem, quando testemunharam um Pokémon raro e gigantesco
                emergir das profundezas da terra. Esse Pokémon colossal estava
                envolto por uma aura imponente, emanando um poder descomunal.
                Fascinados e intrigados com a descoberta, os pesquisadores
                dedicaram suas vidas ao estudo desse fenômeno único, dando
                início à jornada de desvendar os segredos do Gigantamax.
              </p>
              <p>
                O Gigantamax é uma forma rara e especial de dinamaxação em
                Pokémon. Diferente da dinamaxação tradicional, que apenas
                aumenta o tamanho do Pokémon, o Gigantamax provoca mudanças
                visuais e alterações significativas em sua aparência e ataques.
                Pokémon que possuem essa capacidade excepcional têm a habilidade
                de se transformarem em gigantescas e impressionantes
                manifestações, trazendo à tona habilidades inéditas que
                normalmente não estão acessíveis em suas formas padrão. Cada
                Pokémon Gigantamax exibe características únicas e poderosas, o
                que torna essa forma altamente desejada por treinadores em suas
                jornadas.
              </p>
              <p>
                Uma curiosidade fascinante sobre o Gigantamax é que nem todos os
                Pokémon podem atingir esse estado grandioso. Apenas algumas
                espécies específicas têm a capacidade de Gigantamax, tornando-as
                verdadeiras joias raras no mundo Pokémon. Além disso, mesmo
                entre os Pokémon que podem Gigantamax, a probabilidade de
                encontrar um indivíduo com essa habilidade é extremamente baixa.
              </p>
            </div>
          </div>
          <div className="mega-evolution-image">
            <img
              src="/public/assets/gigantamax/gigantamax.png"
              alt="Símbolo Gigantamax"
            />
            <EvolutionCard
              icon={GiGiant as IconType}
              title={"Mostrar Gigantamax"}
              path={"/gigantamax-visible"}
            />
          </div>
        </div>
      </Row>
    </>
  );
};

export default Gigantamax;
