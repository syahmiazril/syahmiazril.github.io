const form = document.getElementById('form');
const input = document.getElementById('input');
const list = document.getElementById('list');
const answerChoices = document.getElementById('answer-choices');
const tags = ['dogs', 'cats', 'burger', 'donkey', 'horse', 'games', 'mouse', 'city', 'smartphone', 'girls', 'avengers', 'Marvel', 'DC'];
let x = "";

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

function gameplay(){
	answerChoices.innerHTML = "";
	x = tags[Math.trunc(Math.random()*tags.length)];
	runFetch(x);
	let pick = [];
	pick.push(x);
	console.log(pick.length);
	console.log(pick);
	while(pick.length<5){
		let choices = tags[Math.trunc(Math.random()*tags.length)]
		if(pick.indexOf(choices) == -1){
			pick.push(choices);
			pick = shuffle(pick)
		}
	}
	console.log(pick.length)
	for (var i = 0; i < pick.length; i++){
		console.log(pick[i]);
		const pickList = document.createElement('li');
		const button = document.createElement('button');
		button.innerHTML = pick[i];
		button.id = 'button';
		pickList.appendChild(button);
		answerChoices.appendChild(pickList);
		button.onclick = function(event){
			console.log(event.target);
			console.log(x);
			if(event.target.innerHTML == x){
				window.alert('Correct!');
				location.reload();
			}
			else{
				window.alert('wrong');
				location.reload();
			}
		}
	}
}


// form.onsubmit=function (event) {
// 	event.preventDefault();
// 	const inputValue = input.value;
// 	console.log(inputValue);
// 	runFetch(inputValue)
// 	// body...
// }

function runFetch(tag){


	fetch('https://api.tumblr.com/v2/tagged?tag=' + tag + '&limit=40&api_key=54JB2d8DQYyVP7QMrniXWmPtzs7JTotR43weZJJkBLaRnuY3P5')
	.then(function(response){
		return response.json();
	})
	.then(function(result){
		let item = result.response;
			list.innerHTML = ''
		for(let i = 0; i<item.length; i++){
			if(item[i].type == "photo"){
			let li = document.createElement('li');
			console.log(item)
			const altSizes = item[i].photos[0].alt_sizes
			let pic = altSizes[3].url;
			let img = document.createElement('img')
			img.src = pic
			// console.log(img)
			// console.log(li)
			// console.log(list)
			li.appendChild(img);
			// li.innerHTML = pic
			list.appendChild(li);
		}
		}
	})
}
gameplay();