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
    if (this.state.isAiPlaying) {
      return (
        <AIGameComponent
          minimumPossibleNumber={MIN_NUMBER}
          maximumPossibleNumber={MAX_NUMBER}
          allowedNumberOfGuesses={MAX_GUESSES}
          onToggleGameMode={this.onToggleGameMode}
        />
      );
    }

    return (
      <HumanGameComponent allowedNumberOfGuesses={MAX_GUESSES} />
    );
  }
}
