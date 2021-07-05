// Create initial constructor method
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase()
  }

  /**
  * Display phrase on game board
  */

  addPhraseToDisplay() {
    const wordPhrases = this.phrase.split(' ')
    const ul = document.createElement('ul')
    const div = document.getElementById('phrase')

    
  }
}