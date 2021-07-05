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

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */

  checkLetter(letter) {
    return this.phrase.split('').includes(letter)
  }

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */

  showMatchedLetter(letter) {
    const letters = document.querySelectorAll('.letter')

    letters.forEach((li) => {
      if (li.textContent === letter)
        li.setAttribute('class', 'show')
    })
  }
}