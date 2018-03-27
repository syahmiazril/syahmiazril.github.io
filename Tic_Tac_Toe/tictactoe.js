const box = document.querySelectorAll('.boxes');
const board = document.querySelector('.board');
const O = 'O';
const X = 'X';
var win = [
	[0,1,2],
	[3,4,5],
	[6,7,8],
	[0,3,6],
	[1,4,7],
	[2,5,8],
	[0,4,8],
	[2,4,6]];
const button = document.getElementById('press')
let count = 0
let gameEnd = false
// console.log(board)
// console.log(box)

$("button").click(function(){
        $("button").fadeOut();
        $("table").fadeIn("slow");
    });

button.onmouseover = function() {
	button.style.backgroundColor = "green";
}
button.onmouseout = function(){
	button.style.backgroundColor = "purple";
}
		//create index for each box 
for (var i = 0; i < box.length; i++) {
	box[i].onclick = function (event) {
		if(gameEnd == false){
			count +=1
			if (count==9){
				window.alert('Draw!!')
			}
				if (event.target.innerHTML == O || event.target.innerHTML == X){
				window.alert("Space Taken!!");
				count -=1;
				return;
				}
				else if ( count%2==0) {
				event.target.innerHTML = X;
				checkWon();
				return;
				}
				else {
				event.target.innerHTML = O;
				checkWon();
				return;
			}
		} else {
			console.log('Game has ended')
		}


	}
}




function checkWon(){
	for(var a = 0; a < win.length; a ++){
		if((box[win[a][0]].innerHTML == X) && (box[win[a][1]].innerHTML==X) && (box[win[a][2]].innerHTML == X)){
			window.alert("X won!");
			gameEnd = true
			$("table").fadeOut("slow");
			$("button").fadeIn("slow");
			$("button").click(function(){
				location.reload()
			})
		}
		else if ((box[win[a][0]].innerHTML == O) && (box[win[a][1]].innerHTML==O) && (box[win[a][2]].innerHTML == O)){
			window.alert("O won!");
			count == 10;
			gameEnd = true
			$("table").fadeOut("slow");
			$("button").fadeIn("slow");
			$("button").click(function(){
				location.reload()
			})
		}
	} 
	// else if (typeof(box[a].innerHTML) = "string"){
	// 	window.alert("draw!");
	// }
}


function draw(){
	
}



