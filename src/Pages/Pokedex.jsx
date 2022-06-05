import React, { useState, useEffect } from 'react';
import './Styles/Pokedex.css';
import PokemonImage from '../Assets/Images/pokemon.png';
import LogoutButton from '../Assets/Images/back-button.png';
import CardList from '../Components/CardList';
import Pagination from '../Components/Pagination';
// import PokeBall from '../Assets/Images/pokeball.png';

function Pokedex() {
  const [active, setActive] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const [spotlight, setSpotlight] = useState({});
  const [listPokemons, setListPokemons] = useState([]);

  const query = `
  {
    pokemons(first: 151) { 
      number
      name
      image
      classification
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
    }
  }`;

  useEffect(() => {
    fetch('https://graphql-pokemon2.vercel.app/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => res.json())
      .then((resJSON) => {
        let { minimum: minWeight, maximum: maxWeight } =
          resJSON.data.pokemons[0].weight;
        let { minimum: minHeight, maximum: maxHeight } =
          resJSON.data.pokemons[0].height;

        setPokemons(resJSON.data.pokemons);
        setSpotlight({
          id: resJSON.data.pokemons[0].number,
          name: resJSON.data.pokemons[0].name,
          image: resJSON.data.pokemons[0].image,
          classification: resJSON.data.pokemons[0].classification,
          minHeight,
          maxHeight,
          minWeight,
          maxWeight,
        });
        setActive(resJSON.data.pokemons[0].number);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <div className="pokedex-body">
        <img src={PokemonImage} alt="pokemon" className="pokedex-img" />
        <div className="pokedex-container">
          <div className="left-content">
            <div className="lc-list">
              {listPokemons.map((pokemon) => (
                <CardList
                  id={pokemon.number}
                  name={pokemon.name}
                  image={pokemon.image}
                  minWeight={pokemon.weight.minimum}
                  minHeight={pokemon.height.maximum}
                  maxWeight={pokemon.weight.minimum}
                  maxHeight={pokemon.height.maximum}
                  classification={pokemon.classification}
                  key={pokemon.number}
                  activeState={active}
                  setActive={setActive}
                  setSpotlight={setSpotlight}
                />
              ))}
            </div>
            <div className="lc-paginate">
              <Pagination
                pokemons={pokemons}
                setListPokemons={setListPokemons}
              />
            </div>
          </div>

          <div className="right-content">
            <div className="rc-header">
              <h1>#{spotlight.id}</h1>
              <h1>{spotlight.name}</h1>
            </div>
            <div className="rc-body">
              <img src={spotlight.image} alt="spotlight-pokemon" />
            </div>
            <div className="rc-footer">
              <table>
                <tbody>
                  <tr>
                    <td className="inactive">Classification</td>
                    <td colSpan={2}>{spotlight.classification}</td>
                  </tr>
                  <tr>
                    <td className="inactive">Height</td>
                    <td>{spotlight.minHeight}</td>
                    <td>{spotlight.maxHeight}</td>
                  </tr>
                  <tr>
                    <td className="inactive">Weight</td>
                    <td>{spotlight.minWeight}</td>
                    <td>{spotlight.maxWeight}</td>
                  </tr>
                  <tr>
                    <td></td>
                    <td className="inactive">Min</td>
                    <td className="inactive">Max</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="logout-btn">
          <button
            className="logout-btn"
            onClick={() => {
              window.location = '/';
            }}
          >
            <img src={LogoutButton} alt="logout" />
            <h1>Logout</h1>
          </button>
        </div>
      </div>
    </>
  );
}

export default Pokedex;
