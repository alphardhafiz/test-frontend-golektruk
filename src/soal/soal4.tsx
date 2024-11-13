import { useState, useRef, useEffect } from "react";

// Soal Nomor 4
// Buatlah sebuah website yang menampilkan daftar pokemon yang di load dengan infinite scroll

interface IPokemon {
  name: string;
  url: string;
}

const BASE_URL = "https://pokeapi.co/api/v2";

const fetchPokemon = async (offset: number, limit: number) => {
  // fungsi untuk fetch data pokemon
  const response = await fetch(
    `${BASE_URL}/pokemon/?offset=${offset}&limit=${limit}`
  );
  const data = await response.json();

  return data.results;
};

const Soal4 = () => {
  const [pokemonList, setPokemonList] = useState<IPokemon[]>([]);
  //  Tambahkan state yang dibutuhkan
  // ...
  const [offset, setOffset] = useState<number>(0);
  const limit: number = 15;
  const [loading, setLoading] = useState<boolean>(false);

  const loadMorePokemon = async () => {
    setLoading(true);
    const newPokemon = await fetchPokemon(offset, limit);
    console.log({ newPokemon });
    setPokemonList((prev) => [...prev, ...newPokemon]);
    setOffset((prev) => prev + limit);
    setLoading(false);
  };

  // Fungsi untuk infinite scroll
  // ...

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight - 50 &&
        !loading
      ) {
        loadMorePokemon();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset, loading]);

  useEffect(() => {
    loadMorePokemon();
  }, []);
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          flexGrow: 1,
          color: "white",
          fontSize: "1.5em",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        <h1
          style={{
            fontWeight: "bolder",
          }}
        >
          Pokémon Infinite Scroll
        </h1>
        {/* list pokemon beserta loading */}
        <ul>
          {pokemonList.map((pokemon, index) => (
            <li key={index}>{pokemon.name}</li>
          ))}
        </ul>
        {loading && <p>Loading more Pokemon...</p>}
      </div>
      <iframe
        src="/soal4.mp4"
        style={{
          height: "100vh",
          border: "1px solid white",
        }}
      ></iframe>
    </div>
  );
};

export default Soal4;
