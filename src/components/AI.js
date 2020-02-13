const average = (a, b) => Math.floor((a + b) / 2);

export default class AI {
  constructor(bestMin, bestMax) {
    this.bestMin = bestMin;
    this.bestMax = bestMax;
    this.bestGuess = null;
  }

  getNextGuess() {
    this.bestGuess = average(this.bestMin, this.bestMax);
    return this.bestGuess;
  }

  lastGuessIsTooHigh() {
    this.bestMax = this.bestGuess;
  }

  lastGuessIsTooLow() {
    this.bestMin = this.bestGuess;
  }

  resetGuesses() {
    this.bestMin = MIN_NUMBER
    this.bestMax = MAX_NUMBER
    this.bestGuess = null
  }
}
