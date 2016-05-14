app.config(function($stateProvider){
	$stateProvider
		.state('addRecipe',{
			url:'/addrecipe',
			templateUrl: '/js/addrecipe/addrecipe.html',
			controller : 'addrecipeCTRL'
		});
});
