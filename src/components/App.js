import React, { Component } from 'react';

const MIN_NUMBER = 1
const MAX_NUMBER = 1000

class Guess extends Component {
  render () {
    return (
      <div>
        Is your number {this.props.number}?
      </div>
    );
  }
}

// need a guess button

class App extends Component {
  state = { guesses: [], bestMin: MIN_NUMBER, bestMax: MAX_NUMBER }

  clickGuess = () => {
    const { bestMin, bestMax } = this.state
    const average = Math.floor((bestMin + bestMax) / 2)
    console.log(average)
  }

  render() {
    return (
      <div>
        <h2>Guessing Game</h2>
        <Guess number={1} />
        <Guess number={2} />
      </div>
    );
  }
}

export default App;
