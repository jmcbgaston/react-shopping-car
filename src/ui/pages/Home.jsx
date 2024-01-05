import { useEffect, useState } from "react";
import "./Home.css";
import Title from "../components/Title/Title";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import PokemonList from "../components/PokemonList/PokemonList";
import Loading from "../components/Loading/Loading";
import Pagination from "../components/Pagination/Pagination";

export default function Home() {
  const [itemsInCart, setItemsInCart] = useState([]);
  const [pokemonList, setPokemonList] = useState();
  const [totalPokemonCount, setTotalPokemonCount] = useState(0);
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  // TODO: Consider using data.next & data.previous instead of calculating the offset
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
      setTotalPokemonCount(data.count);
    } catch (error) {
      console.log({ Error: error });
    }
  }

  function addToCart(pokemonCard) {
    setItemsInCart((prevItemsInCart) => [...prevItemsInCart, pokemonCard]);
  }

  function removeFromCart(pokemonCard) {
    let filteredPokemons = itemsInCart.filter(
      (item) => item.id !== pokemonCard.id
    );
    setItemsInCart(filteredPokemons);
  }

  // Runs when pageNumber changes
  useEffect(() => {
    console.log({ pageNumberUpdated: pageNumber });
    fetchPokemonList();
  }, [pageNumber]);

  // Runs when we get a new pokemonList
  useEffect(() => {
    console.log({ pokemonListUpdated: pokemonList });
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

  // Runs when we addToCart
  useEffect(() => {
    console.log({ itemsInCartUpdated: itemsInCart });
  }, [itemsInCart]);

  return (
    <div className="Home">
      <header>
        <Title />
        <ShoppingCart itemsInCart={itemsInCart.length} />
      </header>
      <main>
        {loading ? (
          <Loading />
        ) : (
          <div className="home-main-content">
            <PokemonList
              pokemons={pokemons}
              pokemonsInCart={itemsInCart}
              addToCart={(pokeCard) => addToCart(pokeCard)}
              removeFromCart={(pokeCard) => removeFromCart(pokeCard)}
            />
            <Pagination
              pageNumber={pageNumber}
              totalPageNumbers={Math.round(totalPokemonCount / itemsPerPage)}
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
