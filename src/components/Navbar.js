import React from 'react';

const Navbar = ({ score, bestScore }) => {
  return (
    <div className='ui centered grid'>
      <h2 className='ui icon centered header'>
        <img src='/champions/logo.png' id='header-img' alt='logo' />
        <div className='content'>Memory Game</div>

        <div className='score'>
          <span>Score: {score}</span>
          <span>Best Score: {bestScore}</span>
        </div>
      </h2>
    </div>
  );
};

export default Navbar;
