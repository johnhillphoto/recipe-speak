app.directive('lister',function(){
	return{
		restrict : 'E',
		templateUrl : '/js/recipeDetail/directive-views/lister.html',
    scope: {
      listtype: '@',
      lineitem: '=',
      index: '@',
			say:'='
    }
	};
});
