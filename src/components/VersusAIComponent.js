import React, { Component } from 'react';

export default class VersusAIComponent extends Component {
  constructor(props) {
    super(props);
    this.ai = props.ai;
    this.onRestartGame = props.onRestartGame;
    this.state = { currentBestGuess: this.ai.getNextGuess() };
  }

  onGuessHigher = () => {
    this.ai.lastGuessIsTooLow();
    this.setState({ currentBestGuess: this.ai.getNextGuess() }, this.props.onNewGuess);
  }

  onGuessLower = () => {
    this.ai.lastGuessIsTooHigh();
    this.setState({ currentBestGuess: this.ai.getNextGuess() }, this.props.onNewGuess);
  }

  render() {
    return (
      <div>
        <h2>Is your number {this.state.currentBestGuess}?</h2>
        <button onClick={this.onGuessHigher}>Higher</button>
        <button onClick={this.onGuessLower}>Lower</button>
        <button onClick={this.onRestartGame}>Yes that's it!</button>
      </div>
    );
  }
}
