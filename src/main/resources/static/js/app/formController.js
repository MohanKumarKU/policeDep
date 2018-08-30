app.controller("formController",
		function($scope, $location, $http, formService) {

			var file;

			$scope.saveForm = function(group) {

				alert("userdata--" + group.message);
				
				const  formData = new FormData();

				/*formData  = "caseno=" + group.caseno + "&evidancename="
						+ group.evidancename + "&officer=" + group.officer
						+ "&phone=" + group.phone + "&message=" + group.message + "&file=" + formService.get();*/
				
				/*formData.append('caseno',group.caseno);
				
				formData.append('file',formService.get());
				
				formData.append('info', new Blob([JSON.stringify(this.model)],
				        {
				            type: "application/json"
				        }));*/
				
				$http.post('register', group);
				
			};

			setFile = function(element) {
				alert("element" + element);
				formService.set(element);
			};
		});