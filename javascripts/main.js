var initialHeight;
var typingSpeed =65;
var aup = false;
var typeHomeDelay = 2300;
var sentences = [
		"Welcome to Javier's page.",
		"One of the pastime activities that he enjoys the most is solving puzzles. More specifically, use computers to solve puzzles.",
		"He loves his field (and his wife of course!) and he is always excited to learn new things.",
		"Feel free to contact him or connect with him on LinkedIn."
		];
document.addEventListener('DOMContentLoaded', () => {
	initialHeight = document.body.scrollHeight;
	let accordion_buttons = document.querySelectorAll(".accordion-button");
	for (let i = 0; i < accordion_buttons.length; i++) {
	    accordion_buttons[i].addEventListener('click', adjustHeight, false);
	}
	let nav_links = document.querySelectorAll(".nav-link");
	for (let i = 0; i < nav_links.length; i++) {
	    nav_links[i].addEventListener('click', adjustForeground, false);
	}
	typeHome();
});
function adjustHeight(){
	let new_offset = 0;
	if(this.ariaExpanded=="true"){
		let accordion_bodies = document.querySelectorAll(".accordion-body");
			for (let i = 0; i < accordion_bodies.length; i++)
				if(accordion_bodies[i].scrollHeight>new_offset )
					new_offset = accordion_bodies[i].scrollHeight;
	}
	let new_height = initialHeight+new_offset;
	document.body.style.height = new_height+"px";
}
function adjustForeground(){
	let nav_links = document.querySelectorAll(".nav-link");
	if(this.id=="home-tab"){
		document.body.style.height = "100%";
		let nav_links = document.querySelectorAll(".nav-link");
		for (let i = 0; i < nav_links.length; i++) {
			nav_links[i].classList.add("black_link");
			nav_links[i].classList.remove("blue_link");
			nav_links[i].classList.remove("orange_link");
		}
		document.querySelector("#container").classList.add("black_fading");
		document.querySelector("#container").classList.remove("blue_fading");
		document.querySelector("#container").classList.remove("orange_fading");
	}
	else if(this.id=="myworks-tab"){
		for (let i = 0; i < nav_links.length; i++) {
			nav_links[i].classList.remove("black_link");
			nav_links[i].classList.add("blue_link");
			nav_links[i].classList.remove("orange_link");
		}
		document.querySelector("#container").classList.remove("black_fading");
		document.querySelector("#container").classList.add("blue_fading");
		document.querySelector("#container").classList.remove("orange_fading");
	}
	else{
		// aurun();
		document.body.style.height = "100%";
		for (let i = 0; i < nav_links.length; i++) {
			nav_links[i].classList.remove("black_link");
			nav_links[i].classList.remove("blue_link");
			nav_links[i].classList.add("orange_link");
		}
		document.querySelector("#container").classList.remove("black_fading");
		document.querySelector("#container").classList.remove("blue_fading");
		document.querySelector("#container").classList.add("orange_fading");
	}
}
function typeHome(){
	let p = document.createElement("p");
	p.classList.add("cmd_prompt");
	p.classList.add("with_caret");
	document.querySelector("#home").appendChild(p);
	p.innerHTML += " ";
	setTimeout(()=>typeHomeContent(0,0,p), typeHomeDelay);
}
function typeHomeContent(chi,si,paragraph){
	if (chi<sentences[si].length) {
		paragraph.innerHTML += sentences[si].charAt(chi);
		if(sentences[si].charAt(chi)=="." || sentences[si].charAt(chi+1)=="(" || sentences[si].charAt(chi)==")"){
			speed=typingSpeed*20;
			paragraph.classList.add("with_caret");
		}
		else if(sentences[si].charAt(chi)==","){
			speed=typingSpeed*7;
			paragraph.classList.add("with_caret");
		}
		else {
			speed=typingSpeed;
			paragraph.classList.remove("with_caret");
		}
		setTimeout(function(){ typeHomeContent(chi+1, si, paragraph); }, speed);
		}
	else{
		if((si+1)<sentences.length){
			paragraph.classList.remove("with_caret");
			let p = document.createElement("p");
			p.classList.add("cmd_prompt");
			p.classList.add("with_caret");
			document.querySelector("#home").appendChild(p);
			p.innerHTML += " ";
			let ranSpeed = typingSpeed*(Math.floor(Math.random() * (17 - 8 + 1) + 8));
			setTimeout(function(){ typeHomeContent(0, si+1, p); }, ranSpeed);
		}
	}
}
function aurun(){
	if(aup==false){
		aup = true;
		let duration = 0.013*document.body.scrollWidth; //seconds*pixel
		console.log(duration);
		document.querySelector("#amus").style.animation=`run_left ${duration}s 6s linear`;//classList.add("run_left");
	}
}
