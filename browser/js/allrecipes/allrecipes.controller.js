'use strict';
app.controller('recipesCTRL',function($scope, recipes, $state){
$scope.recipes = recipes;
const allRecipeCommands = {
};


const setupCommands = function(){
  recipes.forEach(function(recipe){
    let recipeId = recipe._id;
    let recipeName = recipe.name.toLowerCase();
    allRecipeCommands[recipeName] = function(){
      $state.go('recipeDetail', {id: recipeId});
    };
  });
};

setupCommands();

annyang.addCommands(allRecipeCommands);
// // // Start listening.
annyang.start();
});
