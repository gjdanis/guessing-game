import React, { Component } from 'react';
import AI from './AI';

export default class AIGameComponent extends Component {
  constructor(props) {
    super(props);
    this.ai = new AI(props.minimumPossibleNumber, props.maximumPossibleNumber);
    this.maximumGuesses = props.allowedNumberOfGuesses;
    this.state = {
      currentBestGuess: null,
      numGuesses: this.maximumGuesses,
      aiVictorious: false
    };
  }

  isStarted = () => this.state.currentBestGuess !== null;
  isGameOver = () => this.state.aiVictorious ||  this.state.numGuesses <= 0;

  onPlayAgain = () => {
    this.ai.resetGuesses();
    this.setState({
      currentBestGuess: null,
      numGuesses: this.maximumGuesses,
      aiVictorious: false
    })
  }

  onStartGame = () => {
    const guess = this.ai.getNextGuess();
    console.log(guess);
    this.setState({
      currentBestGuess: guess,
    });
  }

  onGuessHigher = () => {
    this.ai.lastGuessIsTooLow();
    this.setState({
      currentBestGuess: this.ai.getNextGuess(),
      numGuesses: this.state.numGuesses - 1
    });
  }

  onGuessLower = () => {
    this.ai.lastGuessIsTooHigh();
    this.setState({
      currentBestGuess: this.ai.getNextGuess(),
      numGuesses: this.state.numGuesses - 1
    });
  }

  onGuessedMyNumber = () => this.setState({aiVictorious: true });

  render() {
    if (!this.isStarted()) {
      return (
        <div className='container'>
          <p>Think of a number between 1 and 1000. I'll try and guess it!</p>
          <button onClick={this.onStartGame}>Okay!</button>
        </div>
      );
    }

    if (this.isGameOver()) {
      return (
        <div className='container'>
          <p>Play again?</p>
          <button onClick={this.onPlayAgain}>Okay!</button>
          <button onClick={this.props.onToggleGameMode}>Let Me Guess!</button>
        </div>
      );
    }

    return (
      <div className='container'>
        <p>Is your number {this.state.currentBestGuess}?</p>
        <button onClick={this.onGuessHigher}>Higher</button>
        <button onClick={this.onGuessLower}>Lower</button>
        <button onClick={this.onGuessedMyNumber}>Yes that's it!</button>
      </div>
    );
  }
}
