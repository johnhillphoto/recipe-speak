app.controller('recipeDetailCTRL',function($scope, recipe){
$scope.recipe = recipe;
$scope.mainText;
var ingredientCounter = 0;
var directionCounter = 0;

// function highlighter(type){
//   var counter = 0;
//   if (type === 'ingredient') {counter = ingredientCounter;
//   }
//   else {counter = directionCounter; }
//   var elementId = '#' + type + "-" + counter;
//   console.log('elementId', elementId);
//     var el = angular.element( document.querySelector( elementId ) );
//   el.addClass('speakHighlight');
//   return;
// }


var speakItem = function(type, counter){
    // highlighter(type);
  if($scope.recipe[type].length === counter){
    responsiveVoice.speak("All "+ type +" have been read.", "US English Female", {volume: 1});
  } else {
    responsiveVoice.speak($scope.recipe[type][counter], "US English Female", {volume: 1});
    return;
  }
};

$scope.speakIngredients = function(){
  ingredientCounter = 0;
  speakItem('ingredients', ingredientCounter);
  ingredientCounter++;
};
$scope.nextIngredient = function(){
  speakItem('ingredients', ingredientCounter);
  ingredientCounter++;
};


$scope.speakDirections = function(){
  directionCounter = 0;
  speakItem('directions', directionCounter);
  directionCounter++;
};
$scope.nextDirection = function(){
  speakItem('directions', directionCounter);
  directionCounter++;
};

$scope.say = function(listtype, index){
  if(listtype === 'ingredient'){
    ingredientCounter = index;
    speakItem('ingredients', ingredientCounter);
    ingredientCounter++;
  } else{
    directionCounter = index;
    speakItem('directions', directionCounter);
    directionCounter++;
  }
};
var commands = {
  'speak ingredients': function() {
    $scope.speakIngredients()
    console.log('speak ingredients');
  },
  'next ingredient': function() {
    $scope.nextIngredient();
    console.log('next ingredient');
  },
  'repeat ingredient': function() {
    ingredientCounter--;
    $scope.nextIngredient();
    console.log('repeat ingredient');
  },
  'start over ingredients': function() {
    ingredientCounter = 0;
    $scope.speakIngredients();
    console.log('start over ingredients');
  },
  'speak directions': function() {
    $scope.speakDirections();
    console.log('speak directions');
  },
  'next direction': function() {
    $scope.nextDirection();
    console.log('next direction');
  },
  'repeat direction': function() {
    directionCounter--;
    $scope.nextDirection();
    console.log();
  },
  'start over directions': function() {
    directionCounter = 0;
    $scope.speakDirections();
    console.log('start over directions');
  },
};


  // // // Add our commands to annyang
  annyang.addCommands(commands);
  // //
  // // // Start listening.
  annyang.start();
// }

});//end controller
