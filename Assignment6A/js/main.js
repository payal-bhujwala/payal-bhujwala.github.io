var alertBox = document.getElementById("alert");
var button = document.getElementById("button");
var span = document.getElementsByClassName("close")[0];
var count = 0; //used for the counter to count items in the cart 
var display = document.getElementById("displayCount");

button.onclick = function() {
	// increments the counter and prompts the alert box
	alertBox.style.display = "block";
	count++;
	display.innerHTML = "(" + count + ")";
}

span.onclick = function(){
	// closes the alert box
	alertBox.style.display = "none";
}

window.onclick = function(event) {
	// closes the alert box when clicked outside the alert box window as well
	if(event.target == alertBox) {
		alertBox.style.display = "none";
	}
}

function highlight_glaze(glaze){
	// picks one glaze; toggles between select and deselect
	var id = glaze.id;
	if (id === "flavour-highlight-none"){
		var src = document.getElementById(id).src;
		if(src.includes("None(selected).png") == true){
			//console.log(src);
			//set = false;
			//console.log(set);
			document.getElementById(id).src = "./images/None.png";
		}
		else{
			document.getElementById(id).src = "./images/None(selected).png";
			document.getElementById('flavour-highlight-vanilla').src = "./images/Vanilla.png";
			document.getElementById('flavour-highlight-sugar').src = "./images/Sugar.png";
			document.getElementById('flavour-highlight-chocolate').src = "./images/Chocolate.png";			
		}	
	}
	else if (id === "flavour-highlight-vanilla"){
		var src = document.getElementById(id).src;
		if(src.includes("Vanilla(selected).png") == true){
			//console.log(src);
			//set = false;
			document.getElementById(id).src = "./images/Vanilla.png";
		}
		else{
			document.getElementById('flavour-highlight-none').src = "./images/None.png";
			document.getElementById(id).src = "./images/Vanilla(selected).png";
			document.getElementById('flavour-highlight-sugar').src = "./images/Sugar.png";
			document.getElementById('flavour-highlight-chocolate').src = "./images/Chocolate.png";			
		}	
	}
	else if (id === "flavour-highlight-sugar"){
		var src = document.getElementById(id).src;
		if(src.includes("Sugar(selected).png") == true){
			//console.log(src);
			//set = false;
			document.getElementById(id).src = "./images/Sugar.png";
		}
		else{
			//console.log(src);
			document.getElementById('flavour-highlight-none').src = "./images/None.png";
			document.getElementById('flavour-highlight-vanilla').src = "./images/Vanilla.png";
			document.getElementById(id).src = "./images/Sugar(selected).png";
			document.getElementById('flavour-highlight-chocolate').src = "./images/Chocolate.png";			
		}	
	}
	else{		
		var src = document.getElementById(id).src;
		console.log(src);
		if(src.includes("DoubleChocolate(selected).png") == true){
			//console.log(src);
			//set = false;
			document.getElementById(id).src = "./images/Chocolate.png";
		}
		else{
			document.getElementById('flavour-highlight-none').src = "./images/None.png";
			document.getElementById('flavour-highlight-vanilla').src = "./images/Vanilla.png";
			document.getElementById('flavour-highlight-sugar').src = "./images/Sugar.png";
			document.getElementById(id).src = "./images/DoubleChocolate(selected).png";			
		}	
	}
}

function highlight_qty(qty){
	// picks one quantity; toggles between select and deselect
	var id = qty.id;

	if (id === "quantity-highlight-one"){
		var src = document.getElementById(id).src;
		console.log(src);
		if(src.includes("1(selected).png") == true){
			document.getElementById(id).src = "./images/qty1.png";
		}
		else{
			document.getElementById(id).src = "./images/1(selected).png";
			document.getElementById('quantity-highlight-three').src = "./images/qty3.png";
			document.getElementById('quantity-highlight-six').src = "./images/qty6.png";
			document.getElementById('quantity-highlight-twelve').src = "./images/qty12.png";
		}	
	}
	if (id === "quantity-highlight-three"){
		var src = document.getElementById(id).src;
		console.log(src);
		if(src.includes("3(selected).png") == true){
			document.getElementById(id).src = "./images/qty3.png";
		}
		else{
			document.getElementById(id).src = "./images/3(selected).png";
			document.getElementById('quantity-highlight-one').src = "./images/qty1.png";
			document.getElementById('quantity-highlight-six').src = "./images/qty6.png";
			document.getElementById('quantity-highlight-twelve').src = "./images/qty12.png";
		}	
	}
	if (id === "quantity-highlight-six"){
		var src = document.getElementById(id).src;
		console.log(src);
		if(src.includes("6(selected).png") == true){
			document.getElementById(id).src = "./images/qty6.png";
		}
		else{
			document.getElementById(id).src = "./images/6(selected).png";
			document.getElementById('quantity-highlight-three').src = "./images/qty3.png";
			document.getElementById('quantity-highlight-one').src = "./images/qty1.png";
			document.getElementById('quantity-highlight-twelve').src = "./images/qty12.png";
		}	
	}
	if (id === "quantity-highlight-twelve"){
		var src = document.getElementById(id).src;
		//console.log(src);
		if(src.includes("12(selected).png") == true){
			//console.log(src);
			set = false;
			//console.log(set);
			document.getElementById(id).src = "./images/qty12.png";
		}
		else{
			//console.log(src);
			document.getElementById(id).src = "./images/12(selected).png";
			document.getElementById('quantity-highlight-three').src = "./images/qty3.png";
			document.getElementById('quantity-highlight-six').src = "./images/qty6.png";
			document.getElementById('quantity-highlight-one').src = "./images/qty1.png";
		}	
	}
}

