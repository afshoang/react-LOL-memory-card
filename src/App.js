import { useState, useEffect } from 'react';
import Card from './components/Card';
import Navbar from './components/Navbar';
import champions from './champions.json';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [listChampions, setListChampions] = useState([]);

  useEffect(() => {
    setListChampions(champions);
  }, []);

  function shuffelChampions(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function gameReset() {
    if (score > bestScore) {
      setBestScore(score);
    }
    setScore(0);

    setListChampions(() => {
      // reset initial champios
      listChampions.map((champion) => {
        if (champion.clicked) {
          champion.clicked = false;
        }
        return champion;
      });
    });
  }

  function handleClick(champion) {
    console.log(champion.name);
    // if max score
    if (score === listChampions.length) {
      gameReset();
    }
    const changedChampions = listChampions.map((cham) => {
      if (cham.id === champion.id) {
        // game over
        if (cham.clicked) {
          if (score > bestScore) {
            setBestScore(score);
          }
          gameReset();
        } else {
          cham.clicked = true;
          setScore(() => score + 1);
        }
      }
      return cham;
    });
    setListChampions(changedChampions);
  }

  return (
    <>
      <Navbar score={score} bestScore={bestScore} />
      <div className='ui six column grid'>
        {shuffelChampions(listChampions).map((champion) => {
          return (
            <Card
              champion={champion}
              handleClick={handleClick}
              key={champion.name}
            />
          );
        })}
      </div>
      <button onClick={handleClick}></button>
    </>
  );
}

export default App;
