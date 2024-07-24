//your JS code here. If required.
const squares=document.querySelectorAll('.square');
squares.addEventListener('mouseover',handleMouseOver);
squares.addEventListener('mouseout',handleMouseOut);

function handleMouseOver() {
	squares.forEach((square)=>{
		if(square!=event.target){
			square.style.backgroundColor="#6F4E37";
		}
	});
	
}

function handleMouseOut() {
	
	
}