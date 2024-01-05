import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";

export default function PokemonList({
  pokemons,
  pokemonsInCart,
  addToCart,
  removeFromCart,
  isLoading,
}) {
  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon, idx) => (
        <li key={`${idx}-${pokemon.name}`} tabIndex={1 + idx}>
          <PokemonCard
            pokemon={pokemon}
            isInCart={pokemonsInCart.find(
              (cartItem) => cartItem.id === pokemon.id
            )}
            addToCart={(pokeCard) => addToCart(pokeCard)}
            removeFromCart={(pokeCard) => removeFromCart(pokeCard)}
            isLoading={isLoading}
          />
        </li>
      ))}
    </ul>
  );
}
