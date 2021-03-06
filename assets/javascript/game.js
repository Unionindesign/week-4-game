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

$(document).ready(function() {

// =============== OBJECTS ===============
let characters = {

	'eddieMurphy': {
		name: 'Eddie Murphy',
		health: 80,
		attack: 15,
		enemyAttackBack: 20,
		imageUrl: "assets/images/thumbEddie.png",
		jokes: ["Yo mama so fat the back of her neck looks like a pack of hot dogs", 
		"Yo mamma so fat I took a picture of her last Christmas and its still printing", 
		"Your momma is so ugly she made One Direction go in another direction.", 
		"Yo mama name is Earl", 
		]
	},

	'daveChappelle': {
		name: 'Dave Chapelle',
		health: 70,
		attack: 10,
		enemyAttackBack: 33,
		imageUrl: "assets/images/thumbChappelle.png",
		jokes: [
		"Yo momma so fat when she goes camping the bears hide their food.",
		"Yo momma's so stupid, she put two quarters in her ears and thought she was listening to 50 Cent.",
		"Yo Momma So Fat The Only Letters She Knows In The Alphabet Are K.F.C",	
		"Yo mamma is so fat she doesn't need the internet, because she's already world wide.",
		]
	},

	'chrisRock': {
		name: 'Chris Rock',
		health: 100,
		attack: 20,
		enemyAttackBack: 18,
		imageUrl: "assets/images/thumbChris.png",
		jokes: [
		"Yo mama so fat Mount Everest tried to climb her.",
		"Yo mamma so ugly even Bob the Builder said 'We cant fix it'",
		"Yo Momma So Fat The Only Letters She Knows In The Alphabet Are K.F.C",	
		"Yo mamma is so ugly when she tried to join an ugly contest they said Sorry, no professionals.",
		]
	},

	'richardPryor': {
		name: 'Richard Pryor',
		health: 120,
		attack: 25,
		enemyAttackBack: 33,
		imageUrl: "assets/images/thumbRichard.png",
		jokes: [
		"Yo' Mama is so stupid, when they said, 'Order in the court,' she asked for fries and a shake.",
		"Yo momma's so fat, that when she fell, no one was laughing but the ground was cracking up.",
		"Yo Momma So Fat The Only Letters She Knows In The Alphabet Are K.F.C",	
		"Yo mamma is so fat she doesn't need the internet, because she's already world wide.",
		]
	}
};

var currSelectedCharacter;
var currDefender;
var combatants = [];
var indexofSelChar;
var attackResult;
var turnCounter = 1;
var killCount = 0;

var renderOne = function(character, renderArea, makeChar) {
  //character: obj, renderArea: class/id, makeChar: string
  var charDiv = $("<div class='character' data-name='" + character.name + "'>");
  var charName = $("<div class='character-name'>").text(character.name);
  var charImage = $("<img alt='image' class='character-image'>").attr("src", character.imageUrl);
  var charHealth = $("<div class='character-health'>").text(character.health);
  charDiv.append(charName).append(charImage).append(charHealth);
  $(renderArea).append(charDiv);
  //Capitalizes the first letter in characters name
  // $('.character').css('textTransform', 'capitalize');
  // conditional render
  if (makeChar == 'enemy') {
    $(charDiv).addClass('enemy');
  } else if (makeChar == 'defender') {
    currDefender = character;
    $(charDiv).addClass('target-enemy');
  }
};


// Create function to render game message to DOM
var renderMessage = function(message) {
  var gameMesageSet = $("#gameMessage");
  var newMessage = $("<div>").text(message);
  gameMesageSet.append(newMessage);

  if (message == 'clearMessage') {
    gameMesageSet.text('');
  }
};

var renderCharacters = function(charObj, areaRender) {
  //render all characters
  if (areaRender == '#characters-section') {
    $(areaRender).empty();
    for (var key in charObj) {
      if (charObj.hasOwnProperty(key)) {
        renderOne(charObj[key], areaRender, '');
      }
    }
  }
  //render player character
  if (areaRender == '#selected-character') {
    $('#selected-character').prepend("Your Character");       
    renderOne(charObj, areaRender, '');
    $('#attack-button').css('visibility', 'visible');
  }
  //render combatants
  if (areaRender == '#available-to-attack-section') {
      $('#available-to-attack-section').prepend("Choose Your Next Opponent");      
    for (var i = 0; i < charObj.length; i++) {

      renderOne(charObj[i], areaRender, 'enemy');
    }
    //render one enemy to defender area
    $(document).on('click', '.enemy', function() {
      //select an combatant to fight
      name = ($(this).data('name'));
      //if defernder area is empty
      if ($('#defender').children().length === 0) {
        renderCharacters(name, '#defender');
        $(this).hide();
        renderMessage("clearMessage");
      }
    });
  }
  //render defender
  if (areaRender == '#defender') {
    $(areaRender).empty();
    for (var i = 0; i < combatants.length; i++) {
      //add enemy to defender area
      if (combatants[i].name == charObj) {
        $('#defender').append("Your selected opponent")
        renderOne(combatants[i], areaRender, 'defender');
      }
    }
  }
  //re-render defender when attacked
  if (areaRender == 'playerDamage') {
    $('#defender').empty();
    $('#defender').append("Your selected opponent")
    renderOne(charObj, '#defender', 'defender');
    lightsaber.play();
  }
  //re-render player character when attacked
  if (areaRender == 'enemyDamage') {
    $('#selected-character').empty();
    renderOne(charObj, '#selected-character', '');
  }
  //render defeated enemy
  if (areaRender == 'enemyDefeated') {
    $('#defender').empty();
    var gameStateMessage = "You have defated " + charObj.name + ", you can choose to fight another enemy.";
    renderMessage(gameStateMessage);
    blaster.play();
  }
};
//this is to render all characters for user to choose their computer
renderCharacters(characters, '#characters-section');
$(document).on('click', '.character', function() {
  name = $(this).data('name');
  //if no player char has been selected
  if (!currSelectedCharacter) {
    currSelectedCharacter = characters[name];
    for (var key in characters) {
      if (key != name) {
        combatants.push(characters[key]);
      }
    }
    $("#characters-section").hide();
    renderCharacters(currSelectedCharacter, '#selected-character');
    //this is to render all characters for user to choose fight against
    renderCharacters(combatants, '#available-to-attack-section');
  }
});

// ----------------------------------------------------------------
// Create functions to enable actions between objects.
$("#attack-button").on("click", function() {
  //if defernder area has enemy
  if ($('#defender').children().length !== 0) {
    //defender state change
    var attackMessage = "You attacked " + currDefender.name + " for " + (currSelectedCharacter.attack * turnCounter) + " damage.";
    renderMessage("clearMessage");
    //combat
    currDefender.health = currDefender.health - (currSelectedCharacter.attack * turnCounter);

    //win condition
    if (currDefender.health > 0) {
      //enemy not dead keep playing
      renderCharacters(currDefender, 'playerDamage');
      //player state change
      var counterAttackMessage = currDefender.name + " attacked you back for " + currDefender.enemyAttackBack + " damage.";
      renderMessage(attackMessage);
      renderMessage(counterAttackMessage);

      currSelectedCharacter.health = currSelectedCharacter.health - currDefender.enemyAttackBack;
      renderCharacters(currSelectedCharacter, 'enemyDamage');
      if (currSelectedCharacter.health <= 0) {
        renderMessage("clearMessage");
        restartGame("You have been defeated...GAME OVER!!!");
        force.play();
        $("#attack-button").unbind("click");
      }
    } else {
      renderCharacters(currDefender, 'enemyDefeated');
      killCount++;
      if (killCount >= 3) {
        renderMessage("clearMessage");
        restartGame("You Won!!!! GAME OVER!!!");
        jediKnow.play();
        // The following line will play the imperial march:
        setTimeout(function() {
        audio.play();
        }, 2000);

      }
    }
    turnCounter++;
  } else {
    renderMessage("clearMessage");
    renderMessage("No enemy here.");
    rtwoo.play();
  }
});

//Restarts the game - renders a reset button
var restartGame = function(inputEndGame) {
  //When 'Restart' button is clicked, reload the page.
  var restart = $('<button class="btn">Restart</button>').click(function() {
    location.reload();
  });
  var gameState = $("<div>").text(inputEndGame);
  $("#gameMessage").append(gameState);
  $("#gameMessage").append(restart);
};

});