var playerScore = 0;
var computerScore = 0;
var playerChoice = 0;
var computerChoice = 0;
var compString = " ";


  $(document).ready(function(){
   //  $("#playerscore").html(playerScore);
   //  $("#computerscore").html(computerScore);
  

// Control for choosing ROCK
   $("#rock").click(function(){
    playerChoice = 1;
    computerChoice = Math.floor(1+Math.random()*3);
    switch (computerChoice){
       case 1:
          compString = "ROCK.<br/>It's a tie!";
          break;
       case 2:
          compString = "PAPER.<br/>You lost this round.";
          computerScore += 1;
          break;
       case 3:
          compString = "SCISSORS. <br/>You won!";
          playerScore += 1;
          break;
    }

    $("#result").html("You chose ROCK.<br/>Computer chose " + compString);
    $("#playerscore").html(playerScore);
    $("#computerscore").html(computerScore);
  });
 
// Control for choosing PAPER
   $("#paper").click(function(){
    playerChoice = 2;
    computerChoice = Math.floor(1+Math.random()*3);
    switch (computerChoice){
       case 1:
          compString = "ROCK.<br/>You won!";
          playerScore += 1;
          break;
       case 2:
          compString = "PAPER.<br/>This one's a tie!";
          break;
       case 3:
          compString = "SCISSORS. <br/>Computer gets this point.";
          computerScore += 1;
          break;
    }
   
    $("#result").html("You chose PAPER.<br/>Computer chose " + compString);
    $("#playerscore").html(playerScore);
    $("#computerscore").html(computerScore);
  });
  
// Control for choosing SCISSORS
   $("#scissors").click(function(){
    playerChoice = 3;
    computerChoice = Math.floor(1+Math.random()*3);
    switch (computerChoice){
       case 1:
          compString = "ROCK.<br/>Computer wins this one.";
          computerScore += 1;
          break;
       case 2:
          compString = "PAPER.<br/>You won the round!";
          playerScore += 1;
          break;
       case 3:
          compString = "SCISSORS. <br/>All tied up this round!";
          break;
    }
    
    $("#result").html("You chose SCISSORS.<br/>Computer chose " + compString);
    $("#playerscore").html(playerScore);
    $("#computerscore").html(computerScore);
  });

 });