// Global Variables
const phraseUl = document.querySelector('#phrase ul')

// Create initial constructor method
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase()
  }

  /**
  * Display phrase on game board
  */

  addPhraseToDisplay() {
    let phraseToDisplay = ''
    // Use forEach
    this.phrase.split('').forEach(letter => {
      if (letter === ' ') {
        phraseToDisplay += `<li class="space"></li>`
      } else {
        phraseToDisplay += `<li class="hide letter ${letter}">${letter}</li>`
      }
    })
    return phraseUl.innerHTML = phraseToDisplay
  }
}