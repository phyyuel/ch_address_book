describe('contact address book', function() {
	
//	beforeEach(function(){
//		// loads the app module
//		module('app');
//		inject(function(_$controller_){
//			// inject removes the underscores and finds the $controller Provider
//			$controller = _$controller_;
//		});
//	});

	beforeEach(module('app'));
	
	var $controller;

	beforeEach(inject(function(_$controller_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$controller = _$controller_;
	}));
	
	// critical
	it('all contacts are loaded', function() {});
	it('display selected contact', function() {});
	it('edit contact of current view', function() { });
	it('search both firstname and lats name', function() { });	

	// nice-to-haves
	it('no contact and detail displayed when no contacts', function() { });
	it('search both uppercase and lowercase and symbols', function() { });

});