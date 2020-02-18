const average = (a, b) => Math.floor((a + b) / 2);

export default class AI {
  constructor(bestMin, bestMax) {
    this.startingBestMin = bestMin;
    this.startingBestMax = bestMax;
    this.resetGuesses();
  }
  
  resetGuesses() {
    this.currentBestMin = this.startingBestMin;
    this.currentBestMax = this.startingBestMax;
    this.currentBestGuess = null;
  }

  getNextGuess() {
    this.currentBestGuess = average(this.currentBestMin, this.currentBestMax);
    return this.currentBestGuess;
  }

  lastGuessIsTooHigh() {
    this.currentBestMax = this.currentBestGuess;
  }

  lastGuessIsTooLow() {
    this.currentBestMin = this.currentBestGuess;
  }
}
