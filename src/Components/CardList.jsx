import React from 'react';
import PokeBall from '../Assets/Images/pokeball.png';
import './Styles/CardList.css';

function CardList({
  id,
  name,
  image,
  activeState,
  minWeight,
  minHeight,
  maxWeight,
  maxHeight,
  classification,
  setActive,
  setSpotlight,
}) {
  return (
    <>
      <div
        className={
          activeState === id
            ? `active card-list pokemon-${id}`
            : `card-list pokemon-${id}`
        }
        onClick={(e) => {
          let target = document.querySelector(`.pokemon-${id}`);

          setSpotlight({
            id,
            name,
            image,
            minWeight,
            minHeight,
            maxWeight,
            maxHeight,
            classification,
          });

          if (!target.classList.contains('active')) {
            setActive(id);
          }
        }}
      >
        <img src={image} alt="pokeball-img" />
        <span>#{id}</span>
        <span className="pokemon-name">{name}</span>
      </div>
    </>
  );
}

export default CardList;
