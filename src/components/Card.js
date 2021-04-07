import React from 'react';

const Card = ({ champion, handleClick }) => {
  // Capialize first letter of champions
  function captalize(name) {
    return name.charAt(0).toUpperCase() + name.slice(1);
  }

  return (
    <div className='column' onClick={() => handleClick(champion)}>
      <div className='ui fluid card'>
        <div className='image'>
          <img src={champion.image} alt={champion.name} />
        </div>
        <div className='content ui'>
          <span className='header'>{captalize(champion.name)}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
