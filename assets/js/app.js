angular.module('pollingSite',['pollingSite.controllers','ui.router'])
.config(function($stateProvider,$urlRouterProvider){

	$stateProvider
	.state('welcome', {
		url:"/welcome",
		templateUrl:"templates/welcome.html",
		controller: "welcomeCtrl"
 
	})

	.state('cVcPolling', {
		url:"/cvcpolling",
		templateUrl:"templates/cvcpolling.html",
		controller: "cvcpollingCtrl"
	})
	
	.state('tlPolling', {
		url:"/tlpolling",
		templateUrl:"templates/tlpolling.html",
		controller: "tlpollingCtrl"
	})
	
	.state('endpolling', {
		url:"/endpolling",
		templateUrl:"templates/endpolling.html",
		controller: "endpollingCtrl"
	});
	
$urlRouterProvider.otherwise('/welcome');
});