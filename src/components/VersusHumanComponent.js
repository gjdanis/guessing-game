import React, { Component } from 'react';

export default class VersusHumanComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { guesses: [], currentGuess: '' };
    this.chosenNumber = 100;
    this.maxGuesses = 10;
  }

  lastGuess = () => this.state.guesses.length === 0 ? null : this.state.guesses.slice(-1)[0];

  isGameOver = () => {
    return this.lastGuess() === this.chosenNumber ||
      this.state.guesses.length === this.maxGuesses;
  }

  onSubmitGuess = (e) => {
    this.setState({
      guesses: this.state.guesses.concat(this.state.currentGuess),
      currentGuess: ''
    });

    e.preventDefault();
  }

  onGuessChanged = (e) => {
    this.setState({ currentGuess: e.target.value });
  }

  getHintText() {
    if (this.lastGuess() === null || this.isGameOver()) {
      return null;
    }

    console.log(this.lastGuess());
    console.log(this.isGameOver());

    if ((this.chosenNumber - this.lastGuess()) > 0) {
      return 'Hint: My number is bigger than your last guess';
    }

    return 'Hint: My number is smaller than your last guess';
  }

  render() {
    const hint = this.getHintText();

    return (
      <div>
        <p>I picked a number between 1 and 1000. Try and guess it!</p>
        { hint }
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
            Name:
            <input type="text" value={this.state.currentGuess} onChange={this.onGuessChanged} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
