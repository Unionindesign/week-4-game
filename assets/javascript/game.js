// jQuery Star wars style RPGgame

// Yo mama jokes

//TODO: create objects for each character
	// set attributes for health points, joke power, comeback power
	// large array of jokes for each character
	// 2 images min for thumbnail and gameplay

//game start
	//when character selected, values are set/reset to their base
	//jokes-display is empty or cleared from last round


	//TODO: set game to begin when a character is selected with onclick event handler
		//TODO: switch to 2nd card in accordion, show selected character float left,
		//TODO: other three float right, choose an opponenet
	//TODO: once oponent is clicked, move characters to bottom of screen
		//Accordion stays open during game play, defeated opponents are removed from r side float	

//Game Play

	//TODO: When joke button is pressed
		//Select Joke from selected player's joke array
		//append to joke-display - float left????
		//TODO:display joke for x seconds ?????
		//joke power adds back onto itself
		//opponent loses health points
			//opponent comeback
			//appened to joke-display - float right ??? for x seconds?
			//player lose health points

	//if player health <0
		//You lose! displayed in joke-diplay
		//Restart button appears
			//Run game start function

	//if oponent health <0
		//You win! displayed in joke-display
		//defeated opponent disappears from 2nd accordion

		//continue to next round
			//TODO:new opponent automatically selected????

	//when all opponents are defeated, you win! 

	//sounds easy, right?

//Game end



// =============== OBJECTS ===============

var eddie {
	lifePoints: 80;
	jokePower: 5;
	comebackPower: 20;
	jokes: ["Yo mama so fat the back of her neck looks like a pack of hot dogs", 
	"Yo mamma so fat I took a picture of her last Christmas and its still printing", 
	"Yo mamma is so ugly when she tried to join an ugly contest they said Sorry, no professionals.", 
	"Yo momma's so fat, that when she fell, no one was laughing but the ground was cracking up.", 
	"Your momma is so ugly she made One Direction go in another direction.", 
	"Yo mama name is Earl", 
	"Yo mamma so ugly even Bob the Builder said 'We cant fix it'",
	"Yo' Mama is so stupid, when they said, 'Order in the court,' she asked for fries and a shake.",
	"Yo momma so fat when she goes camping the bears hide their food.",
	"Yo mama so fat Mount Everest tried to climb her.", 
	"Yo Momma So Fat The Only Letters She Knows In The Alphabet Are K.F.C" ];
	"Yo momma's so stupid, she put two quarters in her ears and thought she was listening to 50 Cent.", 



}