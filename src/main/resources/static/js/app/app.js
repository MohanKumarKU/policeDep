'use strict';


var homeApp = {};


var app = angular.module('homeApp',  ['ngRoute','ngMessages','homeApp.services','homeApp.formServices','homeApp.evidenceViewService']);


app.config(['$routeProvider', function($routeProvider) {
	
 
	 $routeProvider.
	  when('/home', {
	    templateUrl: 'views/home.html',
	    controller: 'HomeController'
	  });
	 
	 $routeProvider.
	 when('/form',{
		 templateUrl: 'views/form.html',
		 controller:'formController'
	 });
	 $routeProvider.
	 when('/getEvidence',{
		 templateUrl: 'views/getEvidence.html',
		 controller:'getEvidenceController'
	 });
	 $routeProvider.
	 when('/evidenceView',{
		 templateUrl: 'pages/evidenceView.html',
		 controller:'UserViewController'
	 });
	 
	/* $routeProvider.
	  when('/user', {
	    templateUrl: 'pages/user.html',
	    controller: 'UserController'
	  });*/
	 
	 /*$routeProvider.
	  when('/admin', {
	    templateUrl: 'pages/admin.html',
	    controller: 'AdminController'
	  });
	 
	 $routeProvider.
	  when('/customer', {
	    templateUrl: 'pages/customer.html',
	    controller: 'CustomerController'
	  });
	 
	 
	 $routeProvider.
	 when('/userView',{
		 templateUrl: 'pages/userView.html',
		 controller:'UserViewController'
	 });
	
	 $routeProvider.
	 when('/formView',{
		 templateUrl: 'pages/formView.html',
		 controller:'formViewController'
	 });
	 $routeProvider.
	 when('/registerform',{
		 templateUrl: 'pages/registerForm.html',
		 controller:'registerFormController'
	 });
	 $routeProvider.
	 when('/checklogin',{
		 templateUrl: 'pages/checking.html',
		 controller:'checkingController'
	 });
	 $routeProvider.
	 when('/routeparam',{
		 templateUrl: 'pages/routeparam.html',
		 controller:'RouteParamController'
	 });
	 $routeProvider.
	 when('/routeview/:name/:password',{
		 templateUrl: 'pages/RouteView.html',
		 controller:'RouteViewController'
	 });
	 $routeProvider.
	 when('/newregister',{
		 templateUrl: 'pages/newRegister.html',
		 controller:'NewRegisterController'
	 });
	 $routeProvider.
	 when('/forgotpassword',{
		 templateUrl: 'pages/forgotPassword.html',
		 controller:'ForgotPasswordController'
	 });*/
//	 $routeProvider.otherwise({
//	    redirectTo:'/user'
//	  });
//	$routeProvider.
//	when('/userview',{
//		templateUrl: 'pages/userview.html',
//		controller:'userviewController'
//	});
	
}]);