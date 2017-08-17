(function(){
window.onload = function(){
//Team One
  var teamOneShootButton = document.querySelector("#teamone-shoot");
  var teamOneShoots = document.querySelector("#teamone-numshots");
  var teamOneScores = document.querySelector("#teamone-numhits");
  var psu = document.querySelector("#psu");

  teamOneShootButton.addEventListener("click", function(){
    var numChance = Math.random() * 100; //creates a random number between 0 and 1 and multiplies it by 10
    teamOneShoots.innerHTML = parseInt(teamOneShoots.innerHTML) + 1;
      if (numChance > 50){
      teamOneScores.innerHTML = parseInt(teamOneScores.innerHTML) +1;
    };
    psu.play(); //plays audio
  });

//Team Two
  var teamTwoShootButton = document.querySelector("#teamtwo-shoot");
  var teamTwoShoots = document.querySelector("#teamtwo-numshots");
  var teamTwoScores = document.querySelector("#teamtwo-numhits");
  var osu = document.querySelector("#osu");
  teamTwoShootButton.addEventListener("click", function(){
    var numChance = Math.random() * 100; //creates a random number between 0 and 1 and multiplies it by 10
    teamTwoShoots.innerHTML = parseInt(teamTwoShoots.innerHTML) + 1;
      if (numChance > 50){
          teamTwoScores.innerHTML = parseInt(teamTwoScores.innerHTML) +1;
        };
        osu.play(); //plays audio
      });

//Reset
  var resetButton = document.querySelector("#reset");
  var numOfReset = document.querySelector("#num-resets");

  resetButton.addEventListener("click", function(){
    numOfReset.innerHTML = parseInt(numOfReset.innerHTML) + 1;
    teamOneShoots.innerHTML = 0;
    teamOneScores.innerHTML = 0;
    teamTwoShoots.innerHTML = 0;
    teamTwoScores.innerHTML = 0;

  });
}
})()
