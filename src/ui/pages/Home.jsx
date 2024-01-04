import { useEffect, useState } from "react";
import "./Home.css";
import Title from "../components/Title/Title";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import PokemonList from "../components/PokemonList/PokemonList";

export default function Home() {
  const [itemsInCart, setItemsInCart] = useState(0);
  const [pokemonList, setPokemonList] = useState();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchPokemonData({ url }) {
    try {
      const pokemonResponse = await fetch(url);
      const pokemonData = await pokemonResponse.json();

      return pokemonData;
    } catch (error) {
      console.log({ Error: error });
    }
  }

  async function fetchPokemonList() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=151"
      );
      const data = await response.json();

      setPokemonList(data.results);
    } catch (error) {
      console.log({ Error: error });
    }
  }

  useEffect(() => {
    fetchPokemonList();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      if (pokemonList) {
        try {
          const fetchPromises = pokemonList.map((pokemonData) =>
            fetchPokemonData(pokemonData)
          );
          const fetchedPokemons = await Promise.all(fetchPromises);
          setPokemons(fetchedPokemons);
        } catch (error) {
          console.log({ Error: error });
        } finally {
          setLoading(false);
        }
      }
    };

    fetchData();
  }, [pokemonList]);

  return (
    <div className="Home">
      <header>
        <Title />
        <ShoppingCart itemsInCart={itemsInCart} />
      </header>
      <main>
        {loading ? <p>Loading...</p> : <PokemonList pokemons={pokemons} />}
      </main>
      <footer></footer>
    </div>
  );
}
