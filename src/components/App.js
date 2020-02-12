import React, { Component } from 'react';

const MIN_NUMBER = 1;
const MAX_NUMBER = 1000;
const MAX_GUESSES = 11;

const average = (a, b) => Math.floor((a + b) / 2);

class ComputerGuesser extends Component {
  state = {
    bestMin: MIN_NUMBER,
    bestMax: MAX_NUMBER,
    guesses: []
  }

  lastGuess = () => this.state.guesses[this.state.guesses.length - 1];
  isGameStarted = () => this.state.guesses.length > 0;
  isGameOver = () => this.state.guesses.length === MAX_GUESSES;

  onRestartGame = () => {
    const state = {
      bestMin: MIN_NUMBER,
      bestMax: MAX_NUMBER,
      guesses: []
    }

    this.setState(state, this.guess);
  }

  guess() {
    const bestGuess = average(this.state.bestMin, this.state.bestMax);
    this.setState({ guesses: this.state.guesses.concat(bestGuess) });
  }

  onGuessHigher = () => this.setState({bestMin: this.lastGuess()}, this.guess);
  onGuessLower = () => this.setState({bestMax: this.lastGuess()}, this.guess);

  render() {
    if (this.isGameOver()) {
      return (
        <button onClick={this.onRestartGame}>New Game</button>
      );
    }
    
    if (this.isGameStarted()) {
      const lastGuess = this.state.guesses[this.state.guesses.length - 1];

      return (
        <div>
          <h2>Is your number {lastGuess}?</h2>
          <button onClick={this.onGuessHigher}>Higher</button>
          <button onClick={this.onGuessLower}>Lower</button>
          <button onClick={this.onRestartGame}>Yes that's it!</button>
        </div>
      );
    }

    return (
      <button onClick={this.onRestartGame}>Start</button>
    );
  }
}

// need a guess button

class App extends Component {

  clickGuess = () => {
    const { bestMin, bestMax } = this.state
    const average = Math.floor((bestMin + bestMax) / 2)
    console.log(average)
  }

  render() {
    return (
      <div>
        <h2>Guessing Game</h2>
        <p>Think of a number between 1 and 1000. I'll try and guess it!</p>
        <ComputerGuesser />
      </div>
    );
  }
}

export default App;
