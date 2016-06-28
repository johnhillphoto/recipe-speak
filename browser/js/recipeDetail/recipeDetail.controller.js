app.controller('recipeDetailCTRL',function($scope, recipe){
$scope.recipe = recipe;
$scope.mainText;
var ingredientCounter = 0;
var directionCounter = 0;
var type, counter;

function highlighter(){
  var elementId = '#' + type + "-" + counter;
    var el = angular.element( document.querySelector( elementId ) );
  el.addClass('speakHighlight');
  return;
}
function unHighlighter(){
  var elementId = '#' + type + "-" + counter;
  console.log('done');
    var el = angular.element( document.querySelector( elementId ) );
  el.removeClass('speakHighlight');
  return;
}
var parameters = {
  volume: 1,
    onstart: highlighter,
    onend: unHighlighter,
};

var speakItem = function(){
    // highlighter(type, counter);
  if($scope.recipe[type].length === counter){
    responsiveVoice.speak("All "+ type +" have been read.", "US English Female", {volume: 1});
  } else {
    responsiveVoice.speak($scope.recipe[type][counter], "US English Female", parameters);
    // responsiveVoice.speak($scope.recipe[type][counter], "US English Female", {volume: 1});

    // responsiveVoice.speak("hello world", "UK English Male", {onstart: StartCallback, onend: EndCallback});

    return;
  }
};

$scope.speakIngredients = function(){
  ingredientCounter = 0;
  type = 'ingredients';
  counter = ingredientCounter;
  speakItem();
  ingredientCounter++;
};
$scope.nextIngredient = function(){
  type = 'ingredients';
  counter = ingredientCounter;
  speakItem();
  ingredientCounter++;
};


$scope.speakDirections = function(){
  directionCounter = 0;
  type = 'directions';
  counter = directionCounter;
  speakItem();
  directionCounter++;
};
$scope.nextDirection = function(){
  type = 'directions';
  counter = directionCounter;
  speakItem();
  directionCounter++;
};
//this is tied to Say ingredient Button
$scope.say = function(listtype, index){
  if(listtype === 'ingredient'){
    ingredientCounter = index;
    type = 'ingredients';
    counter = ingredientCounter;
    speakItem();
    ingredientCounter++;
  } else{
    directionCounter = index;
    type = 'directions';
    counter = directionCounter;
    speakItem();
    directionCounter++;
  }
};
$scope.commands = {
  'speak ingredients': function() {
    $scope.speakIngredients();
  },
  'next ingredient': function() {
    $scope.nextIngredient();
  },
  'repeat ingredient': function() {
    ingredientCounter--;
    $scope.nextIngredient();
  },
  'previous ingredient': function() {
    ingredientCounter -= 2;
    $scope.nextIngredient();
  },
  'start over ingredients': function() {
    ingredientCounter = 0;
    $scope.speakIngredients();
  },
  'speak directions': function() {
    $scope.speakDirections();
  },
  'next direction': function() {
    $scope.nextDirection();
  },
  'repeat direction': function() {
    directionCounter--;
    $scope.nextDirection();
  },
  'previous direction': function() {
    directionCounter -= 2;
    $scope.nextDirection();
  },
  'start over directions': function() {
    directionCounter = 0;
    $scope.speakDirections();
  },
};

  annyang.addCommands($scope.commands);
  // // // Start listening.
  annyang.start();

});//end controller
