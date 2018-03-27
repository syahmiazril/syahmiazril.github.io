console.log('Hello')
// 



fetch('https://api.chucknorris.io/jokes/categories')
.then(function(response){
	return response.json();
}).then(function(json){
	console.log(json.length);
	for (let i = 0; i < json.length ; i++) {
		// console.log(json[i]);
		const btn =  document.createElement('button');
		// console.log(btn);
		btn.innerHTML = json[i];
		document.body.appendChild(btn);
		btn.onclick = function(event){
			event.preventDefault();
			console.log(event.target.innerHTML);
			getJoke(event.target.innerHTML);
		}
	}
})


function getJoke(tag){
	fetch('https://api.chucknorris.io/jokes/random?category=' + tag)
	.then(function(response){
		return response.json();
	}).then(function(json){
	const para = document.getElementById('jokes');
	para.innerHTML = json.value
	})
}