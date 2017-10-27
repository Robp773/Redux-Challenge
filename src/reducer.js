const initialState = {
	guesses: [],
	feedback: 'Make your guess!',
	correctAnswer: Math.floor(Math.random() * 100) + 1,
	showInfoModal: false
}
export default (state, action) => {
	state = state || initialState;
	if (action.type === 'MAKE_GUESS') {
		if (isNaN(action.guess)) {
			state = Object.assign({}, state, {
				feedback: 'You must enter a number.'
			})
			return state;
		}
		console.log(action.guess)
		var feedback
		var diff
		diff = state.correctAnswer - action.guess
		if (diff < 0) {
			diff = diff * -1;
		}
		if (diff >= 30) {
			feedback = 'Cold'
		} else if (diff < 30) {
			feedback = 'Kinda warm'
		} else if (diff < 20) {
			feedback = 'Warm'
		} else if (diff < 10) {
			feedback = 'Very varm'
		} else if (diff < 5) {
			feedback = 'Hot'
		} else if (diff === 0) {
			feedback = "You Got It"
		}
		state = Object.assign({}, state, {
			feedback: feedback,
			guesses: [...state.guesses, action.guess]
		});
		console.log('state.guesses')
		console.log(state.guesses)
		return state;
	}
	if (action.type === 'RESET') {
		state = Object.assign({}, initialState, {
			correctAnswer: action.answer
		})
		return state;
	}
	if (action.type === 'TOGGLE_MODAL') {
		state = Object.assign({}, state, {
			showInfoModal: !state.showInfoModal
		})
		return state
	}
	return state;
}