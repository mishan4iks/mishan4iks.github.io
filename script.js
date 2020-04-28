for(var i=0; i<9; i++){
	document.querySelector(".box").innerHTML+="<div class='block'></div>";
}
var play=document.querySelector(".player");
var hod=0;
var player1="x";
var player2="0";
play.innerHTML="Ходит Крест";
document.querySelector(".box").onclick=function(event){

	if (event.target.innerHTML ==='') {

		if (hod%2===0) {

			event.target.innerHTML=player1;
			play.innerHTML="Ходит ноль";
		}
		else{
			event.target.innerHTML=player2;
			play.innerHTML="Ходит Крест";
		}
		hod++;
		winner();

	}
}

function winner(){
	var blocks=document.getElementsByClassName("block");
	var arr=[
	[ 0,1,2 ],
	[ 3,4,5 ],
	[ 6,7,8 ],
	[ 0,4,8 ],
	[ 6,4,2 ],
	[ 1,4,7 ],
	[ 2,5,8 ],
	[ 0,3,6 ]

	]
	for(var i=0; i<arr.length; i++){
		if (blocks[arr[i][0]].innerHTML===player1 && blocks[arr[i][1]].innerHTML===player1 && blocks[arr[i][2]].innerHTML===player1) {
			play.innerHTML="Победил крест";
		}
		else if (blocks[arr[i][0]].innerHTML===player2 && blocks[arr[i][1]].innerHTML===player2 && blocks[arr[i][2]].innerHTML===player2) {
			play.innerHTML="Победил ноль";
		}
		else if ( hod==9 && blocks[arr[i][0]].innerHTML===player2 && blocks[arr[i][1]].innerHTML===player2 && blocks[arr[i][2]].innerHTML===player2) {
			play.innerHTML="Победил ноль";
		}
		else if ( hod==9 && blocks[arr[i][0]].innerHTML===player1 && blocks[arr[i][1]].innerHTML===player1 && blocks[arr[i][2]].innerHTML===player1) {
			play.innerHTML="Победил крест";
		}
		else if (hod==9 && blocks[arr[i][0]].innerHTML!=player1 && blocks[arr[i][1]].innerHTML===player1 && blocks[arr[i][2]].innerHTML===player1) {
			play.innerHTML="Ничья";
		}
		else if (hod==9 && blocks[arr[i][0]].innerHTML!=player2 && blocks[arr[i][1]].innerHTML===player2 && blocks[arr[i][2]].innerHTML===player2) {
			play.innerHTML="Ничья";
		}
	}
	
	
}