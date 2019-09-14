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

  handleReset = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.cards.forEach(card => {
      card.count = 0;
    });
    alert("Game Over")
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.cards.find((o, i) => {
      if (o.id === id) {
        if(cards[i].count === 0){
          cards[i].count = cards[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.cards.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.handleReset();
        }
      }
    });
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