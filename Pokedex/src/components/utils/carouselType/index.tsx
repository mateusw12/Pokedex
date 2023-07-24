import { Carousel } from "antd";
import "./style.css";
import { PokemonType } from "../../../interface/pokemon-type";

interface CarouselTypeProps {
  pokemons: PokemonType[];
}

const CarouselType = (props: CarouselTypeProps) => {
  return (
    <>
      <Carousel
        autoplay
        fade={true}
        className="custom-carousel-dots"
        style={{
          width: 500,
        }}
      >
        {props.pokemons.map((pokemon) => (
          <div key={pokemon.key}>
            <h3 className="content-carousel">
              <h4>{pokemon.name}</h4>
              <img src={pokemon.img} />
            </h3>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default CarouselType;
