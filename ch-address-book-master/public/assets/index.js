angular.module('app', ['ngRoute', 'angular-toArrayFilter'])
.factory('Contacts',function($q, $http){
//	var val = null;
//
//	function LoadData() {
//		var defer = $q.defer();
//		$http.get('assets/contacts.json').success(function (data) {
//			val = data;
//				
//			defer.resolve();
//		});
//		return defer.promise;
		return $http.get('assets/contacts.json');
//	}

//	return {
//		GetData: function () { return val ; },
//		LoadData:LoadData
//	}
})

.controller('ContactsController', ['$scope', 'Contacts', function ($scope, Contacts) {
//		$scope.contacts = Contacts.GetData();
		$scope.contacts = Contacts.success(function(response){
			$scope.contacts = response.contacts;
		});

}])

//.controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
	//	$scope.todos = Todos;
	//}])
	
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/contacts.html',
			controller: 'ContactsController',
//			resolve:{
//					load:function(Contacts){
//							return Contacts.LoadData();
//							}
//			}
		});
}]);

//
//angular.module('app', ['ngRoute'])
//
//.factory(' ', function(){
//	return [
//		{ name: 'AngularJS Directives', completed: true, note: 'add notes...' },
//		{ name: 'Data binding', completed: true, note: 'add notes...' },
//		{ name: '$scope', completed: true, note: 'add notes...' },
//		{ name: 'Controllers and Modules', completed: true, note: 'add notes...' },
//		{ name: 'Templates and routes', completed: true, note: 'add notes...' },
//		{ name: 'Filters and Services', completed: false, note: 'add notes...' },
//		{ name: 'Get started with Node/ExpressJS', completed: false, note: 'add notes...' },
//		{ name: 'Setup MongoDB database', completed: false, note: 'add notes...' },
//		{ name: 'Be awesome!', completed: false, note: 'add notes...' },
//	];
//})
//
//.controller('TodoController', ['$scope', 'Todos', function ($scope, Todos) {
//	$scope.todos = Todos;
//}])
//	
//.controller('TodoDetailCtrl', ['$scope', '$routeParams', 'Todos', function ($scope, $routeParams, Todos) {
//	$scope.todo = Todos[$routeParams.id];
//}])
//	
//.config(['$routeProvider', function ($routeProvider) {
//	$routeProvider
//		.when('/', {
//			templateUrl: '/todos.html',
//			controller: 'TodoController'
//		})
//	
//		.when('/:id', {
//			templateUrl: '/todoDetails.html',
//			controller: 'TodoDetailCtrl'
//	 });
//}]);