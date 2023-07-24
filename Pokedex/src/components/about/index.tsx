import "./style.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-text">
        <h1>Sobre o Site:</h1>
        <p>
          Bem-vindo ao nosso incrível mundo Pokémon! Neste site, você encontrará
          uma extensa coleção de informações sobre essas fascinantes criaturas
          que cativaram gerações de fãs em todo o mundo.
        </p>
        <p>
          Em nosso portal, você terá acesso a uma vasta gama de dados sobre os
          Pokémon, seus tipos e habilidades. Explore os diferentes mundos e
          regiões que essas criaturas habitam e mergulhe na história e nas
          aventuras que os aguardam. Descubra os segredos das mega evoluções,
          uma poderosa forma de transformação que permite que alguns Pokémon
          alcancem todo o seu potencial de combate.
        </p>
        <p>
          Além disso, você encontrará um guia completo sobre onde assistir ao
          anime Pokémon e acompanhar as emocionantes jornadas de Ash e seus
          amigos. Se você é um treinador dedicado de Pokémon GO, está no lugar
          certo! Oferecemos dicas e truques valiosos para dominar o jogo, além
          de uma calculadora de IV que o ajudará a encontrar os Pokémon mais
          fortes e poderosos para suas batalhas. Não deixe de conferir nossas
          listas dos melhores Pokémon de ataque e defesa, selecionados com base
          em suas habilidades únicas e estatísticas poderosas. Com essas
          informações, você estará pronto para enfrentar qualquer desafio que o
          mundo Pokémon possa oferecer! Então, prepare-se para embarcar nesta
          emocionante jornada pelo universo Pokémon e descobrir tudo o que essa
          incrível franquia tem a oferecer. Seja você um treinador experiente ou
          um novato curioso, estamos aqui para garantir que sua jornada seja
          repleta de diversão e conhecimento.
        </p>
        <p>
          Caso tenha alguma sugestão ou encontrou algum erro, por favor entre na
          página de sugestões e suporte e nos contacte.
        </p>
        <h5> Divirta-se explorando e treinando seus Pokémon favoritos!</h5>
      </div>
      <div className="about-image">
        <img src="/assets/about/meowth.png" alt="Meowth" />
        <img src="/assets/about/charmander.png" alt="Charmander" />
      </div>
    </div>
  );
};

export default About;
