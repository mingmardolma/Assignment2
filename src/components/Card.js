import React from 'react';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isFlipped: false}
  }

  handleClick = () => {
    this.setState(state => ({isFlipped: !state.isFlipped}));
  }
  
  render() {
    if(this.state.isFlipped === false) {
      return (
        <div style={cardStyle}
             onClick={this.handleClick}> </div>
      );
		}
    return (
    <div style={Style}
           onClick={this.handleClick}>{this.props.img}</div>
    );
  }
}

const cardStyle = {
    margin: '10px',
    height:'120px', 
    width:'100px', 
    backgroundColor:'black', 
    borderStyle:'solid', 
    borderColor:'lightpink'
}

const Style = {
    margin: '10px',
    height:'120px', 
    width:'100px', 
    backgroundColor:'lightblue', 
    borderStyle:'solid', 
    borderColor:'lightpink'

}
export default Card;