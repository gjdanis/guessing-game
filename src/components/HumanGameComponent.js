import React, { Component } from 'react';

// https://www.codingame.com/playgrounds/6517/react-router-tutorial

export default class HumanGameComponent extends Component {
  constructor(props) {
    super(props);
    this.chosenNumber = 100;
    this.maximumGuesses = props.allowedNumberOfGuesses;
    this.state = {
      isStarted: false,
      guesses: [],
      guessInput: '',
      numGuesses: this.maximumGuesses
    };
  }

  lastGuess = () => {
    if (this.state.guesses.length === 0) {
      return null;
    }

    return this.state.guesses[this.state.guesses.length - 1];
  }

  isHumanWinner = () => this.lastGuess() === this.chosenNumber;
  isHumanLoser = () => this.numGuesses <= 0;

  onStartGame = () => this.setState({isStarted: true});

  onSubmitGuess = (e) => {
    this.setState({
      guesses: this.state.guesses.concat(parseInt(this.state.guessInput)),
      guessInput: '',
      numGuesses: this.numGuesses - 1
    });

    e.preventDefault();
  }

  onGuessChanged = (e) => this.setState({ guessInput: e.target.value });

  onPlayAgain = () => this.setState({
    isStarted: false,
    guesses: [],
    guessInput: '',
    numGuesses: this.maximumGuesses
  })

  getHintText() {
    if (this.lastGuess() === null) {
      return null;
    }

    if ((this.chosenNumber - this.lastGuess()) > 0) {
      return 'Hint: My number is higher than ' + this.lastGuess();
    }

    return 'Hint: My number is lower than ' + this.lastGuess();
  }

  render() {
    if (!this.state.isStarted) {
      return (
        <div className='container'>
          <p>Try and guess my number in 10 guesses!</p>
          <button onClick={this.onStartGame}>Start</button>
        </div>
      );
    }

    if (this.isHumanWinner()) {
      return (
        <div className='container'>
          <p>Nice guessing - {this.chosenNumber} was my number!</p>
          <button onClick={this.onPlayAgain}>Play again!</button>
          <button onClick={this.props.onToggleGameMode}>Play Against Computer!</button>
        </div>
      );
    }

    if (this.isHumanLoser()) {
      return (
        <div className='container'>
          <p>My number was {this.chosenNumber}</p>
          <button onClick={this.onPlayAgain}>Play again?</button>
        </div>
      );
    }

    return (
      <div className='container'>
        <p>I picked a number between 1 and 1000. Try and guess it!</p>
        { this.getHintText() }
        <ul reversed>
          {
            this.state.guesses.map((guess, index) => 
              <li key={index}>
                You guessed: {guess}
              </li>
            )
          }
        </ul>
        <form onSubmit={this.onSubmitGuess}>
          <label>
            Guess:
            <input type="text" value={this.state.guessInput} onChange={this.onGuessChanged} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
