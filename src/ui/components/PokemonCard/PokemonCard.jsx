import "./PokemonCard.css";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import PokeBallIcon from "../../assets/pokeball.png";

export default function PokemonCard({
  pokemon,
  isInCart,
  addToCart,
  removeFromCart,
}) {
  const {
    name,
    sprites: { front_default },
  } = pokemon;

  function handleClick(pokemon) {
    if (!isInCart) {
      addToCart(pokemon);
    } else {
      removeFromCart(pokemon);
    }
  }

  return (
    <button className="pokemon-card" onClick={() => handleClick(pokemon)}>
      <img src={front_default} alt={`${name}-sprite`} />
      <p>
        {name[0].toUpperCase() + name.slice(1)}
        {isInCart ? (
          <span className="pokeball-icon added-to-cart">
            <img src={PokeBallIcon} alt="pokeball" />
          </span>
        ) : (
          <>
            <PlusCircleIcon className="plus-circle-icon" />
            <span className="pokeball-icon">
              <img src={PokeBallIcon} alt="pokeball" />
            </span>
          </>
        )}
      </p>
    </button>
  );
}
