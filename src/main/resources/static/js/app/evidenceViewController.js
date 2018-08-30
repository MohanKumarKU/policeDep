app.controller("evidenceViewController",function($scope,$location,evidenceViewService){
	
	$scope.group = evidenceViewService.get();
	
});