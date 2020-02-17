import React, { Component } from 'react';
import AIGameComponent from './AIGameComponent';
import HumanGameComponent from './HumanGameComponent';

const MIN_NUMBER = 1;
const MAX_NUMBER = 1000;
const MAX_GUESSES = 10;


export default class App extends Component {
  state = {
    isAiPlaying: true
  };

  onToggleGameMode = () => this.setState({ isAiPlaying: !this.state.isAiPlaying });

  render() {
    const gameModeToggle = (
      <button onClick={this.onToggleGameMode}>
        { this.state.isAiPlaying ? 'Play as guesser' : 'Play against computer'}
      </button>
    );

    const gameComponent = (
      this.state.isAiPlaying ?
        <AIGameComponent
          minimumPossibleNumber={MIN_NUMBER}
          maximumPossibleNumber={MAX_NUMBER}
          allowedNumberOfGuesses={MAX_GUESSES}
        /> :
        <HumanGameComponent
          allowedNumberOfGuesses={MAX_GUESSES}
        />
    );

    return (
      <div>
        {gameModeToggle}
        {gameComponent}
      </div>
    );
  }
}
