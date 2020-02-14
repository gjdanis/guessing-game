import React, { Component } from 'react';
import AI from './AI';
import VersusAIComponent from './VersusAIComponent';
import VersusHumanComponent from './VersusHumanComponent';

const MIN_NUMBER = 1;
const MAX_NUMBER = 1000;
const MAX_GUESSES = 10;

class App extends Component {
  state = {
    bestGuess: null,
    isStarted: false,
    isWinner: false,
    isAIPlaying: true,
    numGuesses: 0
  };

  ai = new AI(MIN_NUMBER, MAX_NUMBER);

  isGameOver = () => this.state.isWinner || this.state.numGuesses > MAX_GUESSES;

  onStartGame = () => {
    this.setState({
      isStarted: true,
      bestGuess: this.ai.getNextGuess()
    })
  }

  onNewGuess = () => {
    this.setState({numGuesses: this.state.numGuesses + 1});
  }

  onRestartGame = () => {
  }

  render() {
  
    return <VersusHumanComponent />

    const { isWinner, isStarted, isAIPlaying } = this.state;

    if (!this.state.isStarted) {
      return (
        <div>
          <h2>Guessing Game</h2> {
            !isStarted && (
              <div>
                <p>Think of a number between 1 and 1000. I'll try and guess it!</p>
                <button onClick={this.onStartGame}>Okay!</button>
              </div>
            )
          } {
            isWinner && (
              <div>
                <p>Nice game!</p>
                <button onClick={this.onPlayAgain}>Play again?</button>
              </div>
            )
          }
        </div>
      );
    }
    
    if (isAIPlaying) {
      return <VersusAIComponent ai={this.ai} onNewGuess={this.onNewGuess} />
    }

  }
}

export default App;
