app.controller('addrecipeCTRL',function($scope, $state, RecipesFactory){
$scope.recipe = {
  ingredients:['ingredient'],
  directions:['direction step 0'],
  notes:['note 0']
};

$scope.addIngredientLine = function(){
    $scope.recipe.ingredients.push('ingredientz ' + ($scope.recipe.ingredients.length));
};
$scope.addDirectionLine = function(){
    $scope.recipe.directions.push('direction step ' + ($scope.recipe.directions.length));
};
$scope.addNoteLine = function(){
    $scope.recipe.notes.push('Note ' + ($scope.recipe.notes.length));
};


$scope.addRecipe = function(){
  console.log($scope.recipe);
  RecipesFactory.addRecipe($scope.recipe)
  .then(function(recipe){
    console.log('recipe is added', recipe);
    $state.go('allrecipes');
  });
};

});//end controller
