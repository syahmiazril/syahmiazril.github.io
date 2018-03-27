console.log('Hello')
const wordToGuess = "syahmi";
const wordState = [];
let guessesLeft = 10;
const prevGuesses = [];

function displayWordState(state){
 let output = "";
 for (let i = 0; i<state.length; i++){
 	const char = state[i];
 		output = output + char;
 	output = output + " ";
 }

 const wordStateContainer = document.getElementById('word');
 wordStateContainer.innerHTML =  output;
}

function displayGuessesLeft(num){
	document.getElementById('guesses-left').innerHTML = num;
}

function displayPreviousGuesses(guessesArray){
	const list = document.getElementById('past-guesses')
	list.innerHTML = '';
	for (let i = 0; i<guessesArray.length; i++){
		const guess = document.createElement('li');
		guess.innerHTML = guessesArray[i];
		list.appendChild(guess);
	}
}

function guess(wordToGuess, wordState, currGuess){
	for(let i = 0; i<wordToGuess.length; i++){
		if(wordToGuess[i] == currGuess){
			wordState[i] = currGuess;
		}
	}
	displayWordState(wordState);
}

function setup(){
	for(let i = 0; i<wordToGuess.length; i++){
	wordState.push('_');
	}
	displayWordState(wordState)
	displayGuessesLeft(guessesLeft)
	displayPreviousGuesses(prevGuesses)
}

function setupForm(){
	const form = document.getElementById('player-input');
	const input = document.getElementById('player-guess');

	form.onsubmit = function (event){
		event.preventDefault();
		const currentInput = input.value.toLowerCase();
		input.value = ""
		if(!validateInput(currentInput, prevGuesses)){
			window.alert('Please enter a valid character!');
			return;
		}
		prevGuesses.push(currentInput);
		guessesLeft -= 1;
		displayGuessesLeft(guessesLeft);
		guess(wordToGuess, wordState, currentInput);
		const won = checkWon(wordState);
		if (won){
		window.alert('You Won!')
		}
		else if(guessesLeft == 0){
		window.alert('You Lost!');
}
		displayPreviousGuesses(prevGuesses);
	}
}

function checkWon(wordState){
	let hasBlanks = false;
	for(let i = 0; i <wordState.length; i++ ){
		if(wordState[i] == '_'){
			hasBlanks = true
		}
	}
	return !hasBlanks;
}

function validateInput(guess, prevGuesses){
	if (guess.length == 1 && prevGuesses.indexOf(guess) == -1){
		return true;
	}
	else{
		return false;
	}
}

setup();
setupForm();
