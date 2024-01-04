import "./PokemonCard.css";
import { PlusCircleIcon } from "@heroicons/react/24/outline";
import PokeBallIcon from "../../assets/pokeball.png";

export default function PokemonCard({
  pokemon: {
    name,
    sprites: { front_default },
  },
}) {
  return (
    <div className="pokemon-card">
      <img src={front_default} alt={`${name}-sprite`} />
      <p>
        {name[0].toUpperCase() + name.slice(1)}
        <PlusCircleIcon className="plus-circle-icon" />
        <span className="pokeball-icon">
          <img src={PokeBallIcon} alt="pokeball" />
        </span>
      </p>
    </div>
  );
}
