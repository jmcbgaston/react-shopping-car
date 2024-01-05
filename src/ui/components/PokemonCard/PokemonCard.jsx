import "./PokemonCard.css";
import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import PokeBallIcon from "../../assets/pokeball.png";

export default function PokemonCard({
  pokemon,
  isInCart,
  addToCart,
  removeFromCart,
  isLoading,
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

  if (isLoading) {
    return (
      <div className="skeleton-pokemon-card shimmer">
        <div className="skeleton-sprite" />
        <div className="skeleton-button" />
      </div>
    );
  } else {
    return (
      <button className="pokemon-card" onClick={() => handleClick(pokemon)}>
        <img src={front_default} alt={`${name}-sprite`} />
        <p className={isInCart ? "item-in-cart" : "item-not-in-cart"}>
          {name[0].toUpperCase() + name.slice(1)}
          {isInCart ? (
            <>
              <MinusCircleIcon className="minus-circle-icon" />
              <span className="pokeball-icon added-to-cart">
                <img src={PokeBallIcon} alt="pokeball" />
              </span>
            </>
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
}
