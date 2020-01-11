import React from 'react';
import './MonsterCard.styles.css';

const MonsterCard = ({ monster }) => {
  return (
    <div className="monster-card">
      <img src={`https://robohash.org/${monster.id}?=set2&size=180x180`} alt={`${monster.name}'s avatar'`}/>
      <h2>{monster.name}</h2>
    </div>
  )
};

export default MonsterCard;
