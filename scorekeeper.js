var p1Button=document.querySelector("#p1");
var p2Button=document.querySelector("#p2");
var resetbutton=document.getElementById("reset");
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var numInput=document.querySelector("input");
var p=document.querySelector("p span");
var p1Score=0;
var p2Score=0;
var gameover=false;
var winningscore=5;


p1Button.addEventListener("click",function(){
if (!gameover) {
	p1Score++;
	p1Display.textContent=p1Score;
	if (p1Score==winningscore) {
	p1Display.classList.add("winner");
	gameover=true;
}
}
});


p2Button.addEventListener("click",function(){
	if(!gameover)
	{
	p2Score++;
	p2Display.textContent=p2Score;
if(p2Score===winningscore)
{
	p2Display.classList.add("winner");
	gameover=true;
}
}
});

resetbutton.addEventListener("click",function(){
	reset();	
});
function reset(){
	p1Score=0;
	p2Score=0;
	p1Display.textContent=0;
	p2Display.textContent=0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameover=false;
}

numInput.addEventListener("change",function(){
	//change fires the functions each time the value is entered.....nomatter from click or via a keyboard
	p.textContent=numInput.value;
	winningscore=Number(numInput.value);
	reset();

});
