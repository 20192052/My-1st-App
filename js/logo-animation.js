function navToMenu(){
	console.log("triggered")
}

gsap.to("#logo",{
	//animations for 2 seconds
	duration: 2, 
	//Moves Up 50 pixels
	y: -50: 
	// fully visible at the end 
	opacity; 1, 
	// when finished 
	onComplete: navToMenu
});