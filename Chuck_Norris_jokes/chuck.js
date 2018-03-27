console.log('Hello')

fetch('https://api.chucknorris.io/jokes/random?category=movie')
.then(function (response){
	return response.json();
}).then(function(json){
	const para = document.getElementById('jokes');
	para.innerHTML = json.value
})