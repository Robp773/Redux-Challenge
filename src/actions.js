'use strict'

export const makeGuess = (guess) =>({
  type: 'MAKE_GUESS',
  guess: guess
});

export const resetGame = () => ({
  type: 'RESET',
  answer: Math.floor(Math.random() * 100) + 1
});

export const toggleModal = () =>({
  type: 'TOGGLE_MODAL'
})