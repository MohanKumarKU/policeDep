app.controller("getEvidenceController", function($scope, $location, $http) {

	$scope.getEvidence = function(group) {

		alert("userdata--" + group.caseno);
			
			$http.get('getEvidence', group).success(function(response) {
				
				alert("success");
				
				$scope.group = response.data;
				evidenceViewService.set(response.data);
			});
			
			$location.path('evidenceView');
		
	};
});
