import PokemonLogo from "../../assets/pokemon_logo.png";
import "./Title.css";

function Title() {
  return (
    <div className="title">
      <img src={PokemonLogo} alt="title-logo" />
      <h1>Shopping!</h1>
    </div>
  );
}

export default Title;
