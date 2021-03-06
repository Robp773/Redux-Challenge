import React from 'react';
import {connect} from 'react-redux';
import Header from './header';
import GuessSection from './guess-section';
import GuessCount  from './guess-count';
import GuessList from './guess-list';
import {resetGame, makeGuess} from '../actions'

export class Game extends React.Component {


    newGame() {
   this.props.dispatch(resetGame())
    }

    guess(guess) {
   this.props.dispatch(makeGuess(guess))
    }

    render() {
        return (
            <div>
                <Header onNewGame={() => this.newGame()}/>
                <GuessSection feedback={this.props.feedback}
                    onGuess={(guess) => this.guess(guess)} />
                <GuessCount count={this.props.guesses.length} />
                <GuessList guesses={this.props.guesses} />
            </div>
        );
    }
}

const mapStateToProps = state => ({
guesses: state.guesses,
feedback: state.feedback,
})

export default connect(mapStateToProps)(Game)

