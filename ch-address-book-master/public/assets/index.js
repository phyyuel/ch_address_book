angular.module('app', ['ngRoute', 'angular-toArrayFilter'])
.factory('Contacts',function($q, $http){
		return $http.get('assets/contacts.json');
})

.controller('ContactsController', ['$scope', 'Contacts', function ($scope, Contacts) {
	$scope.contacts = Contacts.success(function(response){
		$scope.contacts = response.contacts;
		$scope.selected = $scope.contacts[0]
		$scope.selectedId = 0;
		$scope.editorEnabled = false;
	});
	
	$scope.getDetail = function(id, event){
		$scope.selected = $scope.contacts[id];
		console.log($scope.selected);
		$scope.selectedId = id;
	};
	
	$scope.enableEdit = function(){
		$scope.editorEnabled = true;
		console.log("edit clilcked, enable edit: " + $scope.editorEnabled);
	};
	
	$scope.disableEdit = function(){
		$scope.editorEnabled = false;
		console.log("edit finished, enable eidt: " + $scope.editorEnabled);
		
	};		
}])

.controller('ContactsEditController', ['$scope', '$routeParams', 'Contacts', function ($scope, $routeParams, Contacts) {
	$scope.contact = Contacts.success(function(response){
		$scope.contact = response.contacts[$routeParams.id];
	});
	
}])
		
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: '/contacts.html',
			controller: 'ContactsController',
		})
}]);