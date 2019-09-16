import React, { Component } from "react";
import Card from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import cards from "./friends.json";
import "./App.css";

class App extends Component {

  state = {
    cards,
    score: 0,
    highscore: 0
  };

  clickCount = id => {
    this.state.cards.find((char, i) => {
      if (char.id === id) {
        // checks to see if card count is 0 and if so add +1
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
          });
          // sorts cards
          this.state.cards.sort(() => Math.random() - 1)
          return true; 
        } else {
          this.handleReset();
        }
      }
    });
  }
  handleReset = () => {
    // Checks to see if score is greater than highscore
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert("Game Over, You scored " + this.state.score)
    this.setState({score: 0});
    return true;
  }

  render() {
    return (
      <Wrapper>
        <Title score={this.state.score} highscore={this.state.highscore}>Clicky Game</Title>
        {this.state.cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;