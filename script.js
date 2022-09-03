//Function to get elements
elem = (x) =>{
	return document.getElementById(x);
}

//rate function
var rating_card = elem("rating_card");
var thanks_card = elem("thanks_card");
var result = elem("result");
var rate_btn = document.querySelectorAll("li button");
let rate = " ";

active = (y) => {

	for(let i = 1; i <= 5; i++){
		if(i==y){
			rate_btn[i-1].style.background = "var(--Orange)";
			rate_btn[i-1].style.color = "var(--White)";
		}else{
			rate_btn[i-1].style.background= "var(--Dark-Blue-2)"; 
			rate_btn[i-1].style.color = "va(--Medium-Grey)";
		}
	}
	rate = y;



	
}

submit = () =>{
	if (rate!=" ") {
		result.innerText = rate;

		rating_card.style.display = "none";

		setTimeout(function(){
			thanks_card.style.display = "block";
		}, 200);

	}else{
		alert("Kindly choose a Rate for us!");
	}
	

}
