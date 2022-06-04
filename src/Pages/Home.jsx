import React from 'react';
import './Styles/Home.css';
import PokemonImage from '../Assets/Images/pokemon.png';
import StartImage from '../Assets/Images/start-button.png';

function Home() {
  return (
    <>
      <div className="home-body">
        <div>
          <img src={PokemonImage} alt="pokemon" className="pokemon-img" />
          <div
            className="start-btn"
            onClick={() => {
              window.location = '/login';
            }}
          >
            <img src={StartImage} alt="start" className="start-img" />
            <h1>Start</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
