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


let game;
const startGameButton = document.getElementById('btn__reset')
const keys = document.querySelector('#qwerty')

startGameButton.addEventListener('click', () => {
  game = new Game()
  game.startGame()
})

keys.addEventListener('click', (e) => {
  e.target && e.target.nodeName == 'BUTTON' ? game.handleInteraction(e.target) : null
})





