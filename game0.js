var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;
$('.rules-container').css('display', 'none');
setTimeout(function(){
  $('.rules-container').fadeIn();

}, 100)
$('.icon-close').click(function(){
  $('.rules-container').fadeOut();
})
$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    newSequence();
    started = true;
  }
});
$('h1').click(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    newSequence();
    started = true;
  }
});
$('.btn').on('click', function() {
  var userChosenColour = this.id;
  userClickedPattern.push(userChosenColour);
  animatePress(userChosenColour);
  gameSounds(userChosenColour);
  checkAnswer(userClickedPattern.length-1);


})

function newSequence() {
  userClickedPattern = [];
  level++;
  $('h1').text('Level ' + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  $('#' + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  gameSounds(randomChosenColour);




}

function checkAnswer(currentlevel) {

  if (gamePattern[currentlevel] === userClickedPattern[currentlevel]) {
    console.log('same');

  if (userClickedPattern.length === gamePattern.length) {
    setTimeout(function() {
      newSequence();

    }, 1000);
  }
  } else {
    gameOver();
    startOver();
  }

}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;
}
function gameOver(){
  $('h1').text('GAME OVER, PAYAH BET BGSADT, KLIK GUA UTK RESTART.');
  var gameover = new Audio('sounds/wrong.mp3');
  gameover.play();
  $('body').addClass('game-over');
  setTimeout(function(){
    $('body').removeClass('game-over');
  },200);


}

function gameSounds(selected) {
  switch (selected) {
    case "red":
      var red = new Audio('sounds/red.mp3');
      red.play();
      break;
    case "blue":
      var blue = new Audio('sounds/blue.mp3');
      blue.play();
      break;
    case "green":
      var green = new Audio('sounds/green.mp3');
      green.play();
      break;
    case "yellow":
      var yellow = new Audio('sounds/yellow.mp3');
      yellow.play();
      break;
    default:
      console.log(selected);
  }
}

function animatePress(currentColour) {
  $('.' + currentColour).addClass('pressed');
  setTimeout(function() {
    $('.' + currentColour).removeClass('pressed');
  }, 100);
}
