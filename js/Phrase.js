// Create initial constructor method
class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase()
  }

  /**
  * Display phrase on game board
  */

  addPhraseToDisplay() {
    const phraseContainer = document.getElementById('phrase')
    const splitWords = this.phrase.split('')
    // Use forEach to loop through each letter of the phrase
    splitWords.forEach(letter => {
      if (letter === ' ') {
        let spaceListItem = '<li class="space"> </li>'
        phraseContainer.querySelector('ul').insertAdjacentHTML('beforeend', spaceListItem)
      } else {
        let letterListItem = `<li class="hide letter ${letter}">${letter}</li>`
        phraseContainer.querySelector('ul').insertAdjacentHTML('beforeend', letterListItem)
      }
    })
  }

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */

  checkLetter(letter) {
    const splitWords = this.phrase.split('')
    return splitWords.includes(letter)
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