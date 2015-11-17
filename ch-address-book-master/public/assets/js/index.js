angular.module('app', ['ngRoute', 'angular-toArrayFilter'])
.factory('Contacts',function($q, $http){
		return $http.get('assets/contacts.json');
})

.controller('ContactsController', ['$scope', 'Contacts', function ($scope, Contacts) {
	
	Contacts.then(function(response){
			$scope.contacts = response.data.contacts;
			if ($scope.contacts == undefined || $scope.contacts==''){
				$scope.selected = null;
				$scope.hasData = false;
			}else{
				$scope.selected = $scope.contacts[0];	
				$scope.hasData = true;
			}
			
			$scope.selectedId = 0;
			$scope.editorEnabled = false;
			
			$scope.getDetail = function(id, event){
				$scope.selected = $scope.contacts[id];
				$scope.selectedId = id;
			};
			
			$scope.enableEdit = function(){
				if ($scope.selected == null){
					$scope.editorEnabled = false;
					alert("No contacs selected");
				}else{
					$scope.editorEnabled = true;
				}
			};
			
			$scope.disableEdit = function(){
				$scope.editorEnabled = false;
			};	
		});
	
	
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