// Create Game class
class Game {
  constructor(missed, phrases, activePhrase) {
    this.missed = missed
    this.phrases = phrases
    this.activePhrase = activePhrase
  }

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */

  getRandomPhrase() {
    const index = Math.floor(Math.random() * this.phrases.length)
    return this.phrases[index]
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

  // Remove Heart life
  removeLife() {
    this.missed += 1
    const scoreboard = document.querySelector('#scoreboard ol').children
    const heartImage = scoreboard[this.missed - 1].querySelector('img')

    heartImage.src = 'img/lostHeart.png'

    if (this.missed === 5) {
      this.gameOver('lose')
    }
  }

  // Check if the player is winning
  checkForWin() {
    const keyList = document.querySelector('#phrase ul').children
    let showLetterCount = 0
    let spaceCount = 0

    for (let i = 0; i < keyList.length; i++) {
      if (keyList[i].classList.contains('show')) {
        showLetterCount +=1
      } else if (keyList[i].classList.contains('space')) {
        spaceCount +=1
      }
    }
    return (showLetterCount + spaceCount) === keyList.length
  }

  // Gameover
  gameOver(gameStatus) {
    document.removeEventListener('keyup', eventHandler)

    const gameOverlay = document.getElementById('overlay')
    gameOverlay.style.display = 'block'

    const gameOverMessage = document.getElementById('game-over-message')

    if (gameStatus === 'lose') {
      gameOverMessage.textContent = 'Sorry... Game Over.'
    } else if (gameStatus === 'win') {
      gameOverMessage.textContent = 'Awesome! You won.'
    }

    const overlay = document.getElementById('overlay')
    const currentOverlayClass = overlay.className
    overlay.classList.replace(currentOverlayClass, gameStatus)

    this.resetGame()
  }

  resetGame() {
    const keyList = document.querySelector('#phrase ul')
    keyList.innerHTML = ''

    const keys = document.getElementsByClassName('key')
    // For Loop
    for (let i = 0; i < keys.length; i++) {
      keys[i].className = 'key'
      keys[i].disabled = false
    }

    const buttonReset = document.getElementById('btn__reset')
    buttonReset.textContent = 'Play Again'
    const scoreboard = document.querySelector('#scoreboard ol').children
    // For loop
    for (let i = 0; i < scoreboard.length; i++) {
      const heartImage = scoreboard[i].querySelector('img')
      heartImage.src = 'img/liveHeart.png'
    }
  }
}