import "./Card.css"

export default function Card({ card, handleChoice, flipped, disabled }) {

  const handleClick = () => {
    if (!disabled) { // if disabled is not true,
      handleChoice(card)
    }
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