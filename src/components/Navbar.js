import React from 'react';

const Navbar = ({ score, bestScore }) => {
  return (
    <div className='ui centered grid'>
      <h2 className='ui icon centered header'>
        <img
          src={process.env.PUBLIC_URL + '/images/logo.png'}
          id='header-img'
          alt='logo'
        />
        <div className='content'>Memory Game</div>

        <p>Hướng dẫn: Tích điểm bằng cách chọn 1 tướng 1 lần duy nhất</p>

        <div className='score'>
          <span>Score: {score}</span>
          <span>Best Score: {bestScore}</span>
        </div>
      </h2>
    </div>
  );
};

export default Navbar;
