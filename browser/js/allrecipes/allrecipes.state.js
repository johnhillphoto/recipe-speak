app.config(function($stateProvider){
	$stateProvider
		.state('allrecipes',{
			url:'/allrecipes',
			templateUrl: '/js/allrecipes/allrecipes.html',
			controller : 'recipesCTRL',
			resolve: {
				recipes: function (RecipesFactory) {
					return RecipesFactory.getAll();
				}
			}//end resolve
		});
});
