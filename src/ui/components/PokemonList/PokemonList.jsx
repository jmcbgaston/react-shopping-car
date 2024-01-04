import PokemonCard from "../PokemonCard/PokemonCard";
import "./PokemonList.css";

export default function PokemonList({ pokemons }) {
  return (
    <ul className="pokemon-list">
      {pokemons.map((pokemon, idx) => (
        <li key={`${idx}-${pokemon.name}`} tabIndex={1 + idx}>
          <PokemonCard pokemon={pokemon} />
        </li>
      ))}
    </ul>
  );
}
