/* TESTING ON DEV TOOLS */

// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.phrase}`);

// const game = new Game()
// game.phrases.forEach((phrase, index) => {
//   console.log(`Phrase ${index} - phrase: ${phrase.phrase}`)
// })

// const logPhrase = (phrase) => {
//   console.log(`Phrase - phrase: `, phrase.phrase)
// }

// const game = new Game()

// logPhrase(game.getRandomPhrase())
// logPhrase(game.getRandomPhrase())
// logPhrase(game.getRandomPhrase())
// logPhrase(game.getRandomPhrase())
// logPhrase(game.getRandomPhrase())

// const game = new Game();
// const randomPhrase = game.getRandomPhrase();
// const phrase = new Phrase(randomPhrase.phrase);
// phrase.addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.phrase}`);


const missed = 0

const phrases = [
  new Phrase('Life is like a box of chocolates'),
  new Phrase('I am your father'),
  new Phrase('Houston, we have a problem'),
  new Phrase('You had me at hello'),
  new Phrase('Hasta la vista, baby')
]

const activePhrase = null

let eventHandler = function(event) {
    let keyPressed = event.key
    for (let i = 0; i < keys.length; i++) {
      if (keys[i].innerHTML === keyPressed) {
        if (keys[i].disabled) {
          continue
      } else {
        game.handleInteraction(keys[i])
      }
    }
  }
}

const keys = document.getElementsByClassName('key')
const startGameButton = document.getElementById('btn__reset')

startGameButton.addEventListener('click', () => {
  game = new Game(missed, phrases, activePhrase)
  game.startGame()

  document.addEventListener('keyup', eventHandler)
})

for (let i = 0; i < keys.length; i++) {
  // Event listener listens for when one of the keys on the screen will be clicked
  keys[i].addEventListener('click', (event) => {
    // Invoke the game interaction for the key that was clicked
    game.handleInteraction(event.target);
  })
}
