import React from 'react';
import MonsterCard from '../monster-card/MonsterCard';
import './MonsterContainer.styles.css';

const MonsterContainer = ({ monsters }) => {
  return (
    <div className="monster-container">
      {monsters.map((monster, key) => {
       return <MonsterCard key={key} monster={monster} />;
      })}
   </div>
 );
};

export default MonsterContainer;
