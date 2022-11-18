import './App.css'
import { React, useState, useEffect } from 'react';
import Card from "./components/Card";

const cardImages = [
  { "src": "/img/butterfly.png", matched: false },
  { "src": "/img/cat.png", matched: false },
  { "src": "/img/dog.png", matched: false },
  { "src": "/img/hedgehog.png", matched: false },
  { "src": "/img/panda.png", matched: false },
  { "src": "/img/penguin.png", matched: false },
  { "src": "/img/fish.png", matched: false },
  { "src": "/img/flamingo.png", matched: false }
]

function App() {
  const [cards, setCards] = useState([])
  const [moves, setMoves] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)


  // shuffles cards 
  const shuffleCards = () => {
    const shuffledCards = [ ...cardImages, ...cardImages ]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledCards)
    setMoves(0)
    setChoiceOne(null)
    setChoiceTwo(null)
  }

  // handle a choice
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  // compare 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {

      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return (prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } else {
              return card
            }
          }))
        })
        resetMove()
      } else {
        resetMove()
      }
    }

  }, [choiceOne, choiceTwo])
  console.log(cards)

  // reset moves & increase turn 
  const resetMove = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setMoves(prevMoves => prevMoves + 1 )
  }

  return (
    <div className="App">
      <h1>Game of Memory: Animal</h1>
      <button onClick={shuffleCards} > Start Game </button>
      <button onClick={shuffleCards} > New Game </button>
      {/* moves: {moves} */}
      <h4>moves: {moves}</h4>

      <div className='board'> 
        {cards.map(card => (
          <Card key = {card.id} card={card} handleChoice={handleChoice}/>
        ))}
      </div>

    </div>
  );
}

export default App;

