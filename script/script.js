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
	rate_btn[y-1].style.background = "var(--Orange)";
	rate_btn[y-1].style.color = "var(--White)";
	
	rate = y;
}

submit = () =>{
	result.innerText = rate;

	rating_card.style.display = "none";

	setTimeout(function(){
		thanks_card.style.display = "block";
	}, 200);

}
