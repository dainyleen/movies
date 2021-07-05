// Create Game class
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

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */

  getRandomPhrase() {
    return this.phrases[Math.floor(Math.random() * this.phrases.length)]
  }

  /**
  * Begins game by selecting a random phrase and displaying it to user
  */

  startGame() {
    const gameOverlay = document.getElementById('overlay')
    gameOverlay.style.display = 'none'

    this.activePhrase = this.getRandomPhrase()
    this.activePhrase.addPhraseToDisplay()
  }

  /**
  * Handles onscreen keyboard button clicks
  * @param (HTMLButtonElement) button - The clicked button element
  **/

  handleInteraction(button) {
    button.disabled = true
    const key = button.textContent
    if (this.activePhrase.checkLetter(key)) {
      button.classList.add('chosen')
      this.activePhrase.showMatchedLetter(key)
      const winner = this.checkForWin()
      if (winner) {
        this.gameOver('win')
      }
    } else {
      button.classList.add('wrong')
      this.removeLife()
    }
  }

  removeLife() {
    this.missed += 1
    const scoreboard = document.querySelector('#scoreboard ol').children
    const heartImage = scoreboard[this.missed - 1].querySelector('img')

    heartImage.src = 'img/lostHeart.png'

    if (this.missed === 5) {
      this.gameOver('lose')
    }
  }

  checkForWin() {
    const keysList = document.querySelector('#phrase ul').children
    let showLetterCount = 0
    let spaceCount = 0

    for (let i = 0; i < keysList.length; i++) {
      if (keyList[i].classlist.contains('show')) {
        showLetterCount +=1
      } else if (keyList[i].classList.contains('space')) {
        spaceCount +=1
      }
    }
    return (showLetterCount + spaceCount) === keyList.length
  }

  gameOver(gameWon) {
    const startScreen = document.getElementById('overlay')
    const endMessage = document.getElementById('game-over-message')
    startScreen.style.display = ''

    if (key) {
      endMessage.textContent = 'Awesome!'
      startScreen.className = 'win'
      startGameButton.textContent = 'Play again'
      this.resetGame()
    } else {
      endMessage.textContent = 'Try again!'
      startScreen.className = 'lose'
      startGameButton.textContent = 'Play again'
      this.resetGame()
    }
  }
}