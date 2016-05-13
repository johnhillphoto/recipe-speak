app.config(function($stateProvider){
	$stateProvider
		.state('recipeDetail',{
			url:'/recipeDetail/:id',
			templateUrl: '/js/recipeDetail/recipeDetail.html',
			controller : 'recipeDetailCTRL',
			resolve: {
				recipe: function (RecipesFactory, $stateParams) {
					return RecipesFactory.getRecipe($stateParams.id);
				}
			}//end resolve
		});
});
