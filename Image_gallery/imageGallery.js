const close = document.querySelector('.close')
const lightBox = document.querySelector('.lightbox')
const pictures = document.querySelectorAll('.gallery-item');
const next = document.querySelector('.next');
const previous = document.querySelector('.previous')
close.onclick = function(event) {
	event.preventDefault();
	$(".lightbox").fadeOut();
}

for (var i = 0; i <pictures.length; i++) {
	const item = pictures[i];
	// console.log(pictures[i]);
	let nxtIndex = document.createElement('input')
	nxtIndex.name = i
	nxtIndex.setAttribute('hidden', 'true')
	item.appendChild(nxtIndex)

	// console.log(pictures[i]);
	item.onclick= function (event) {
		 $(".lightbox").fadeIn(1000);
		const galleryItem = event.target
		const parent = galleryItem.parentElement
		const display = document.querySelector('.displayedLightbox');
		display.innerHTML = parent.innerHTML;
		// console.log(nxtIndex.value)
		next.onclick= function (event) {
			// event.preventDefault();
			// $(".lightbox").fadeTo("slow",0);
			let index = document.querySelector('.displayedLightbox');
			console.log(index.lastChild.name)
			let newNumber = parseInt(index.lastChild.name) + 1;
			let newDisplay = pictures[newNumber];
			display.innerHTML = newDisplay.innerHTML;
			
		}
		previous.onclick = function(event){
			// event.preventDefault();
			// $(".lightbox").fadeTo("slow",0);
			let index = document.querySelector('.displayedLightbox');
			console.log(index.lastChild.name)
			let newNumber = parseInt(index.lastChild.name) - 1;
			let newDisplay = pictures[newNumber];
			display.innerHTML = newDisplay.innerHTML;
		}
	}
}



