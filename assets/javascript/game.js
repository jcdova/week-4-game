
//display a random number on load (19-120)
//each crystal will be assigned points randomly between (1-12) and should be hidden
//each crystal will be worth a certain amount of point
//player clicks  a crystal
//when player clicks crystal it will add the amount of points it is assigned to the total score
//the score adder will be updated
//player wins if the total score = random number
//player loses if the total score > random number
//game reset back to initial values when player wins or loses except for the total wins/losses
//the game totals the number of games the player wins or loses


$(document).ready(function() {


//variables
var rdmNum = 0;
var rdmRCrystal = 0;
var rdmBCrystal = 0;
var rdmYCrystal = 0;
var rdmGCrystal = 0;
var scoreAdder = 0;
var totalWins = 0;
var totalLosses = 0;




//display a random number on load (19-120)

$("#rdmNumber").load("load", function() {
	rdmNum = Math.floor((Math.random() * 102 + 19));     
	$("#rdmNumber").html("<h1>" + rdmNum + "</h1>")              
});


//each crystal will be assigned points randomly between (1-12) and should be hidden

$("#rdmRed").load("load", function() {
	rdmRCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#rdmRedbelow").html("<h1>" + rdmRCrystal + "</h1>");
    $("#rdmRedbelow").hide();
});

$("#rdmBlue").load("load", function() {
	rdmBCrystal = Math.floor((Math.random() * 12) + 1);   
    $("#rdmBluebelow").html("<h1>" + rdmBCrystal + "</h1>");
   	$("#rdmBluebelow").hide();
});

$("#rdmYellow").load("load", function() {
	rdmYCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#rdmYellowbelow").html("<h1>" + rdmYCrystal + "</h1>");
    $("#rdmYellowbelow").hide();
});

$("#rdmGreen").load("load", function() {
	rdmGCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#rdmGreenbelow").html("<h1>" + rdmGCrystal + "</h1>");
    $("#rdmGreenbelow").hide();
});


//player clicks  a crystal
//when player clicks crystal it will add the amount of points it is assigned to the total score
//the score adder will be updated

$("#rdmRed").on("click", function() {
	scoreAdder = scoreAdder + rdmRCrystal;    
    $("#totalScore").html("<h1>" + scoreAdder + "</h1>");  
    roundComplete();    
});

$("#rdmBlue").on("click", function() {
	scoreAdder = scoreAdder + rdmBCrystal;    
    $("#totalScore").html("<h1>" + scoreAdder + "</h1>");
    roundComplete();                   
});

$("#rdmYellow").on("click", function() {
	scoreAdder = scoreAdder + rdmYCrystal;    
    $("#totalScore").html("<h1>" + scoreAdder + "</h1>");
    roundComplete();                    
});

$("#rdmGreen").on("click", function() {
	scoreAdder = scoreAdder + rdmGCrystal;    
    $("#totalScore").html("<h1>" + scoreAdder + "</h1>");
    roundComplete();                   
});



//functions
//player wins if the total score = random number
function roundComplete() {
	if (scoreAdder === rdmNum) {
		// alert("Player Wins!")
		totalWins++;
		$("#totWins").html("<p>" + "Wins: " + totalWins + "</p>");
		randomReset();
		
		

	};

	//player loses if the total score > random number
	if (scoreAdder > rdmNum) {
		// alert("Player Loses!")
		totalLosses++;
		$("#totLosses").html("<p>" + "Losses: " + totalLosses + "</p>");
		randomReset();
		
	};
	

};

function randomReset() {
	scoreAdder = 0;
	$("#rdmNumber").load("load", function() {
	rdmNum = Math.floor((Math.random() * 102 + 19));     
	$("#rdmNumber").html("<h1>" + rdmNum + "</h1>")              
});

$("#rdmRed").load("load", function() {
	rdmRCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#rdmRedbelow").html("<h1>" + rdmRCrystal + "</h1>");
    $("#rdmRedbelow").hide();
});

$("#rdmBlue").load("load", function() {
	rdmBCrystal = Math.floor((Math.random() * 12) + 1);   
    $("#rdmBluebelow").html("<h1>" + rdmBCrystal + "</h1>");
   	$("#rdmBluebelow").hide();
});

$("#rdmYellow").load("load", function() {
	rdmYCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#rdmYellowbelow").html("<h1>" + rdmYCrystal + "</h1>");
    $("#rdmYellowbelow").hide();
});

$("#rdmGreen").load("load", function() {
	rdmGCrystal = Math.floor((Math.random() * 12) + 1);    
    $("#rdmGreenbelow").html("<h1>" + rdmGCrystal + "</h1>");
    $("#rdmGreenbelow").hide();
});


};




})
