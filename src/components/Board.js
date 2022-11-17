import React from "react";
import Card from "./Card";
import "./Board.css";

// makes number of cards passed in. Returns <Card /> component
const makeCards = num => {
  // num = number of cards
  let results = [];

  for (let i = 0; i < num; i++) {
    results.push(<Card />);
  }
  return results;
};

const Board = props => {
  const { numCards } = props;

  return <section id="board">{makeCards(numCards)}</section>;
};
  
export default Board;
