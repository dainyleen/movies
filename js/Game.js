// Create initial constructor method
class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = 0
    this.phrases = this.createPhrases()
    this.activePhrase = null
  }

  /**
  * Creates phrases for use in game
  * @return {array} An array of phrases that could be used in the game
  */

   
  createPhrases() {
    const phrases = [
      new Phrase('Life is like a box of chocolates'),
      new Phrase('I am your father'),
      new Phrase('Houston, we have a problem'),
      new Phrase('You had me at hello'),
      new Phrase('Hasta la vista, baby')
    ]

    return phrases
  }
}