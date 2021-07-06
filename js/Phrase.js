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
        phraseDiv.querySelector('ul').insertAdjacentElement('beforeend', withSpace)
      } else {
        let letterListItem = `<li class="hide letter ${letter}">${letter}</li>`
        phraseDiv.querySelector('ul').insertAdjacentElement('beforeend', letterListItem)
      }
    })
  }

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */

  checkLetter(letter) {
    const split = this.phrase.split('')
    return split.includes(letter)
  }

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */

  showMatchedLetter(letter) {
    const letters = document.getElementsByClassName(letter)
    for (let i = 0; i < letters.length; i++) {
      letters[i].classList.replace('hide', 'show')
    }
  }
}