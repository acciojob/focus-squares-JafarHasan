//your JS code here. If required.
const squares=document.querySelectorAll('.square');

squares.forEach((square)=>{
	square.addEventListener('mouseover',handleMouseOver);
	square.addEventListener('mouseout',handleMouseOut);
})


function handleMouseOver() {
	squares.forEach((square)=>{
		if(square!=event.target){
			square.style.backgroundColor="#6F4E37";
		}
	});
	
}

function handleMouseOut() {
	squares.forEach((square)=>{
		if(square!=event.target){
			square.style.backgroundColor="#E6E6FA";
		}
	})
	
}