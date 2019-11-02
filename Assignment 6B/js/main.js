var alertBox = document.getElementById("alert");
var button = document.getElementById("button");
var display = document.getElementById("displayCount");
//var items = [];
// localStorage.setItem("items", JSON.stringify(items));
// array = JSON.parse(localStorage.getItem("items"));

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
			sessionStorage.glaze_option = null;
		}
		else{
			document.getElementById(id).src = "./images/None(selected).png";
			sessionStorage.glaze_option = "./images/None(selected).png";
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
			sessionStorage.glaze_option = null;
		}
		else{
			document.getElementById('flavour-highlight-none').src = "./images/None.png";
			document.getElementById(id).src = "./images/Vanilla(selected).png";
			sessionStorage.glaze_option = "./images/Vanilla(selected).png";
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
			sessionStorage.glaze_option = null;
		}
		else{
			//console.log(src);
			document.getElementById('flavour-highlight-none').src = "./images/None.png";
			document.getElementById('flavour-highlight-vanilla').src = "./images/Vanilla.png";
			document.getElementById(id).src = "./images/Sugar(selected).png";
			sessionStorage.glaze_option = "./images/Sugar(selected).png";
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
			sessionStorage.glaze_option = null;
		}
		else{
			document.getElementById('flavour-highlight-none').src = "./images/None.png";
			document.getElementById('flavour-highlight-vanilla').src = "./images/Vanilla.png";
			document.getElementById('flavour-highlight-sugar').src = "./images/Sugar.png";
			document.getElementById(id).src = "./images/DoubleChocolate(selected).png";	
			sessionStorage.glaze_option = "./images/DoubleChocolate(selected).png";		
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
			sessionStorage.qty_option = null;
		}
		else{
			document.getElementById(id).src = "./images/1(selected).png";
			sessionStorage.qty_option = "./images/1(selected).png";
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
			sessionStorage.qty_option = null;
		}
		else{
			document.getElementById(id).src = "./images/3(selected).png";
			sessionStorage.qty_option = "./images/3(selected).png";
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
			sessionStorage.qty_option = null;
		}
		else{
			document.getElementById(id).src = "./images/6(selected).png";
			sessionStorage.qty_option = "./images/6(selected).png";
			document.getElementById('quantity-highlight-three').src = "./images/qty3.png";
			document.getElementById('quantity-highlight-one').src = "./images/qty1.png";
			document.getElementById('quantity-highlight-twelve').src = "./images/qty12.png";
		}	
	}
	if (id === "quantity-highlight-twelve"){
		var src = document.getElementById(id).src;
		//console.log(src);
		if(src.includes("12(selected).png") == true){
			document.getElementById(id).src = "./images/qty12.png";
			sessionStorage.qty_option = null;
		}
		else{
			//console.log(src);
			document.getElementById(id).src = "./images/12(selected).png";
			sessionStorage.qty_option = "./images/12(selected).png";
			document.getElementById('quantity-highlight-three').src = "./images/qty3.png";
			document.getElementById('quantity-highlight-six').src = "./images/qty6.png";
			document.getElementById('quantity-highlight-one').src = "./images/qty1.png";
		}	
	}
}

function add_item() {
	// console.log('add_item() fn')
	var glaze = sessionStorage.getItem("glaze_option");
	var qty = sessionStorage.getItem("qty_option");
	var bun_type = document.getElementsByClassName("product")[0];
	if(bun_type.alt == "original")
		var img_src = "images/bun.jpg";
	else if(bun_type.alt == "blueberry")
		var img_src = "images/Blueberry.jpg";
	else if(bun_type.alt == "pecan")
		var img_src = "images/PEcan.jpeg";
	else if(bun_type.alt == "pumpkin spice")
		var img_src = "images/PumpkinSpice.jpg";
	else if(bun_type.alt == "original(gf)")
		var img_src = "images/Original(GlutenFree).jpeg";
	else 
		var img_src = "images/Walnut.jpg";
	
	var item = [img_src, glaze, qty];
	// localStorage.setItem("item", JSON.stringify(item)); // stores the item as an json string
	// console.log(item);
	var existingEntries = JSON.parse(localStorage.getItem("items"));
	//console.log(existingEntries);
	if (existingEntries == null) existingEntries = [];
	existingEntries.push(item); // adds the json string to the existing list of items 
	//console.log(existingEntries);
	localStorage.setItem("items", JSON.stringify(existingEntries));
	//console.log(localStorage.getItem("items"));
	populate_carouesel();
}

function remove(item) {
	index = item.id;
	var list1 = JSON.parse(localStorage.getItem("items"));
	if(list1.length > 0)
		list1.splice(index,1);
	else {
		shopping_cart_page = document.getElementById('shopping-cart-info');
		shopping_cart_page.innerHTML = "<div id = \"cart-empty-page\">The Shopping Cart is empty!</div>";
	}
	localStorage.setItem("items", JSON.stringify(list1));
	count = sessionStorage.getItem("clickcount");
	count--;
	sessionStorage.setItem("clickcount", count);
	populate_cart_page();
}

function populate_carouesel() {
	console.log('populating sidebar');
	var list1 = JSON.parse(localStorage.getItem("items"));
	shopping_cart_carousel = document.getElementById('cart-items');

	if(list1 == null || list1.length == 0){
		shopping_cart_carousel.innerHTML = "<div id = \"cart-empty\">The Shopping Cart is empty!</div>";
		console.log('empty shopping cart')
	}
	else{
		console.log('We are in the list');
		//console.log(list1.length);
		var i = 0;
		var item = [];
		var display = '';
		for(i=0;i<list1.length;i++){
			item = list1[i];
			if(item[0].includes('bun'))
				var name = 'Original';
			else if(item[0].includes('Blueberry'))
				var name = 'Blueberry';
			else if(item[0].includes('Original(GlutenFree)'))
				var name = 'Original(GlutenFree)';
			else if(item[0].includes('PEcan'))
				var name = 'Pecan';
			else if(item[0].includes('PumpkinSpice'))
				var name = 'Pumpkin Spice';
			else if(item[0].includes('Walnut'))
				var name = 'Walnut';

			if(item[1].includes('None'))
				var glaze = 'None';
			else if(item[1].includes('Vanilla'))
				var glaze = 'Vanilla';
			else if(item[1].includes('Sugar'))
				var glaze = 'Sugar';
			else if(item[1].includes('DoubleChocolate'))
				var glaze = 'Double Chocolate';

			if(item[2].includes('1'))
				var qty = 'Quantity: 1';
			if(item[2].includes('3'))
				var qty = 'Quantity: 3';
			if(item[2].includes('6'))
				var qty = 'Quantity: 6';
			if(item[2].includes('12'))
				var qty = 'Quantity: 12';
			
			display += "<div class = \"item\"><img class = \"item-img\" src = \""+item[0]+"\"alt = \"Bun Type\"><div class = \"cart-content\"><div class = \"product-name\">"+name+"</div><div class = \"glaze-name\">"+glaze+"</div><div class = \"quantity-total\">"+qty+"</div></div></div>";
		}
		shopping_cart_carousel.innerHTML = display;
	}
}

function populate_cart_page() {
	
	console.log('populating shopping cart');
	var list1 = JSON.parse(localStorage.getItem("items"));
	shopping_cart_page = document.getElementById('shopping-cart-info');

	if(list1 == null || list1.length == 0){
		shopping_cart_page.innerHTML = "<div id = \"cart-empty-page\">The Shopping Cart is empty!</div>";
		console.log('empty shopping cart')
	}
	else{
		console.log('We are in the list');
		var i = 0;
		var item = [];
		var display = '';
		for(i=0;i<list1.length;i++){
			item = list1[i];
			if(item[1].includes('None'))
				var glaze = 'None';
			else if(item[1].includes('Vanilla'))
				var glaze = 'Vanilla';
			else if(item[1].includes('Sugar'))
				var glaze = 'Sugar';
			else if(item[1].includes('DoubleChocolate'))
				var glaze = 'Double Chocolate';

			display += "<div id = \"cart-item-page\"><img class = \"product-cart\" src = \""+item[0]+"\" alt = \"cinnamon bun\"><div class = \"toppings-cart\"><div class = \"topping-name\">Glaze</div><div class = \"cart-details\"><img class = \"flavour\" src = \""+item[1]+"\" alt = \""+glaze+"\"><div class =\"container-desc\"><div class = \"caption product-desc selected\">"+glaze+"</div></div></div><div class = \"topping-name\">Quantity</div><div><img class = \"flavour\" src = \""+item[2]+"\" alt = \"qty\"></div><img id = \""+i+"\" class = \"delete-icon\" onclick = \"remove(this);\" src = \"images/trashcan.jpg\" alt = \"delete\"></div></div>";
		}
		shopping_cart_page.innerHTML = display;
	}
}

function counter() {
	// increments the counter and prompts the alert box
	alertBox.style.display = "block";
	if (typeof(Storage) !== "undefined") {
	    if (sessionStorage.clickcount) {
	      sessionStorage.clickcount = Number(sessionStorage.clickcount)+1;
	    } 
	    else {
	      sessionStorage.clickcount = 1;
	    }
	    //document.getElementById("result").innerHTML = "You have clicked the button " + sessionStorage.clickcount + " time(s).";
	    display.innerHTML = "(" + sessionStorage.clickcount + ")";
	} 
	else {
	    display.innerHTML = "(" + sessionStorage.clickcount + ")";
	}
	add_item();
}

function display_count() {
	var count = sessionStorage.getItem("clickcount");
	if(count === null){
		count = 0;
	}
	display.innerHTML = "(" + count + ")";
}

window.onclick = function(event) {
	// closes the alert box when clicked outside the alert box window as well
	if(event.target == alertBox) {
		alertBox.style.display = "none";
	}
}

function openNav() {
	document.getElementById("SideBar").style.width = "250px";
	document.getElementById("main").style.marginRight = "250px";
}

function closeNav() {
  document.getElementById("SideBar").style.width = "0";
  document.getElementById("main").style.marginRight= "0";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}