import { useEffect, useState } from "react";
import "./Home.css";
import Title from "../components/Title/Title";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import PokemonList from "../components/PokemonList/PokemonList";
import Loading from "../components/Loading/Loading";
import Pagination from "../components/Pagination/Pagination";

export default function Home() {
  const [itemsInCart, setItemsInCart] = useState(0);
  const [pokemonList, setPokemonList] = useState();
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 18;

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
    const offsetAmount = itemsPerPage * pageNumber;

    try {
      setLoading(true);
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon?limit=${itemsPerPage}&offset=${offsetAmount}`
      );
      const data = await response.json();

      setPokemonList(data.results);
    } catch (error) {
      console.log({ Error: error });
    }
  }

  useEffect(() => {
    fetchPokemonList();
  }, [pageNumber]);

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
        {loading ? (
          <Loading />
        ) : (
          <div className="home-main-content">
            <PokemonList pokemons={pokemons} />
            <Pagination
              pageNumber={pageNumber}
              totalPageNumbers={Math.round(151 / itemsPerPage)}
              onNext={() => setPageNumber(pageNumber + 1)}
              onPrevious={() => setPageNumber(pageNumber - 1)}
            />
          </div>
        )}
      </main>
      <footer>
        <p>
          Data provided by the PokeApi <a href="https://pokeapi.co/">(link)</a>
        </p>
      </footer>
    </div>
  );
}
