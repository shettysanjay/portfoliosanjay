import React, { useState, useEffect } from "react";
import Card from "../PokemonApp/Card";
import PokeInfo from "../PokemonApp/PokeInfo";
import axios from "axios";
import "../PokemonApp/css/Pokemon.css";

const Main = () => {
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [loading, setLoading] = useState(false);
  const [nextUrl, setNextUrl] = useState("");
  const [prevUrl, setPrevUrl] = useState("");
  const [pokeData, setPokeData] = useState([]);
  const [pokeDes, setPokeDes] = useState();
  const pokeFun = async () => {
    const response = await axios.get(url);

    setLoading(true);
    setNextUrl(response.data.next);
    setPrevUrl(response.data.previous);

    getPokemon(response.data.results);
    setLoading(false);
  };
  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));

        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);
  return (
    <div className="container__pokemon">
      <div className="left-content">
        <Card
          loading={loading}
          pokemon={pokeData}
          infoPokemon={(poke) => setPokeDes(poke)}
        />
        <div className="btn-grp">
          {nextUrl && (
            <button className="button_pokemon"
              onClick={() => {
                setPokeData([]);
                setUrl(nextUrl);
              }}
            >
              Next
            </button>
          )}
          {prevUrl && (
            <button className="button_pokemon"
              onClick={() => {
                setPokeData([]);
                setUrl(prevUrl);
              }}
            >
              Previous
            </button>
          )}
        </div>
      </div>
      <div className="right-content">
        <PokeInfo data={pokeDes} />
      </div>
    </div>
  );
};
export default Main;
