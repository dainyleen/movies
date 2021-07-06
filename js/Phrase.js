// Create initial constructor method
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase()
  }

  /**
  * Display phrase on game board
  */

  addPhraseToDisplay() {
    const phraseDiv = document.getElementById('phrase')
    const split = this.phrase.split('')
    // Use forEach to loop through each letter of the phrase
    split.forEach(letter => {
      if (letter === ' ') {
        let withSpace = '<li class="space"></li>'
      } else {

      }
    })
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