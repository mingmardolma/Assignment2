import './App.css'
import { React, useState, useEffect } from 'react';
import Card from "./components/Card";

const cardImages = [
  { "src": "/img/butterfly.jpg", matched: false },
  { "src": "/img/cat.jpg", matched: false },
  { "src": "/img/dog.jpg", matched: false },
  { "src": "/img/hedgehog.jpg", matched: false },
  { "src": "/img/panda.jpg", matched: false },
  { "src": "/img/penguin.jpg", matched: false },
  { "src": "/img/fish.jpg", matched: false },
  { "src": "/img/flamingo.jpg", matched: false }
]

function App() {
  const [cards, setCards] = useState([])
  const [moves, setMoves] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)


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
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => {
          return (prevCards.map(card => {
            if (card.src === choiceOne.src) {
              return {...card, matched: true}
            } 
            else {
              return card
            }
          }))
        })
        setTimeout(() => resetMove(), 1250)
      } else {
        setTimeout(() => resetMove(), 1250)
      }
    }

  }, [choiceOne, choiceTwo])

  console.log(cards)

  // reset moves & increase turn 
  const resetMove = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setMoves(prevMoves => prevMoves + 1 )
    setDisabled(false)
  }

  // start a game automatically on page visit
  useEffect(() => {
    shuffleCards()
  }, [])

  return (
    <div className="App">
      <h1>Game of Memory: Animals</h1>
      <button onClick={shuffleCards}> New Game </button>
      <h4>Moves: {moves}</h4>

      <div className="board"> 
        {cards.map(card => (
          <Card 
            key={card.id} 
            card={card} 
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>

    </div>
  );
}

export default App;

