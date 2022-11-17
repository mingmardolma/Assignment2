import './App.css'
import { React, useState } from 'react';
import Header from "./components/Header"
import Card from "./components/Card"
import Board from "./components/Board";


const cardImages = [
  { "src": "/img/butterfly.png" },
  { "src": "/img/cat.png" },
  { "src": "/img/dog.png" },
  { "src": "/img/hedgehog.png" },
  { "src": "/img/panda.png" },
  { "src": "/img/penguin.png" },
  { "src": "/img/fish.png" },
  { "src": "/img/flamingo.png" }
]


function App() {  
  const [cards, setCards] = useState([ ...cardImages, ...cardImages ]);
  const [moves, setMoves] = useState(0)

  console.log(cards)

  const shuffleCards = () => {
    const shuffledCards = [ ...cardImages, ...cardImages ]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setMoves(0)
  }

  console.log(cards, moves)
  
  return(
    <div className= "App">
      <Header />
      <button onClick={shuffleCards}> Start Game </button>
      <button onClick={shuffleCards}> New Game </button>
      <Board numCards="16" />
      </div>
  )
}

export default App;
