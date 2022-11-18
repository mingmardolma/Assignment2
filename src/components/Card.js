import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isFlipped: false}
  }

  handleClick = () => {
    this.props.handleChoice(this.props.card)
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
const cardStyle = {
    margin: '5px',
    height:'155px', 
    width:'150px', 
    backgroundColor:'black', 
    borderStyle:'solid', 
    borderColor:'lightpink'
}

const Style = {
    margin: '5px',
    height:'155px', 
    width:'150px', 
    backgroundColor:'lightblue', 
    borderStyle:'solid', 
    borderColor:'lightpink'

}
export default Card;