import "./style.css";

const HomePage = () => {
  return (
    <div className="home-page">
      <img
        src="/assets/home/pokemons.png"
        style={{
          height: "calc(100vh - 155px)",
        }}
      />
      <p className="pokemon-font">
        OLÁ!
        <span className="pokemon-blue">Bem-vindo ao site Info Poké Stop!</span>
      </p>
    </div>
  );
};

export default HomePage;
