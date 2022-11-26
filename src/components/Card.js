import "./Card.css"

export default function Card({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if (!disabled) { // if disabled is not true,
      handleChoice(card)
    }
  }
  if(card.matched && flipped){
    return (
      <div className="card">
        <div className="flipped">
          <img
            className="matched"
            src={card.src}
            alrt="no card"
          />
        </div>
      </div>
    )
  }
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img
          className="front"
          src={card.src}
          alrt="front of card"
        />
        <img 
          className="back" 
          src="/img/cardBack.jpg" 
          onClick={handleClick}
          alt= "back of card"
        />
      </div>
    </div>
  );
}