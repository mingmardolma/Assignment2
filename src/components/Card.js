import React from 'react';

class Card extends React.Component {

  handleClick = () => {
    this.setState(state => ({isFlipped: !state.isFlipped}));
  }
  
  render() {
    if(this.state.isFlipped === false) {
      return (
        <div style={cardStyle} onClick={this.handleClick}> 
          <div className='card'>
            <div>
              <img style={{ width: 150, height: 155 }} className="back" src="/img/cardBack.png" alt= "card back"/>
            </div>
          </div>
        </div>
      );
		}
    if(this.state.isFlipped === true) return (
    <div style={Style} onClick={this.handleClick}>
        <div className='card'>
          <div>
            <img style={{ width: 150, height: 155 }} className="front" src={this.props.card.src} alt="card front"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;