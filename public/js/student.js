var app = angular.module('studentApp', []);
app.directive('uploadDir', function($parse){
	return {
		restrict : 'A',
		link : function(scope, element, attrs){
			element.bind('change', function(){
				scope.$apply(function(){
					console.log("----------",element[0].files);
				  $parse(attrs.uploadDir).assign(scope, element[0].files);
				});
			});
		}
	}
}); // upload-dir



app.controller('studentCtrl', function($scope, $http){
	
	$scope.allData = [];
	$scope.newStudent = {};
	$scope.errorMsg = "";

	$scope.upload = function(){
            // console.log($scope.fileModel);
            $scope.newStudent={ full_name : 'rohit', age : 25, fee : 2500};
           var form = new FormData();
           form.append('image', $scope.fileModel[0]);
			form.append('data', JSON.stringify($scope.newStudent));          
           // console.log(form);
           //form.push($scope.new);
           $http({
           		url : "/upload/",
           		method :"post",
           		data : form,
           		headers: {'Content-Type': undefined,'Process-Data': false}
           }).then(function(res){
           		console.log(res);
           });
   };

	$scope.getAll=function(){
		$http({
			url : '/student/getAll',
			method : 'get'
		}).then(function(res){
			console.log(res.data);
			$scope.allData=res.data;
		});
	}



	$scope.add = function(){
		
		//console.log($scope.newStudent);
		if($scope.newStudent._id)
		{
			var method ='put';
		}
		else
		{

			var method ='post';
		}
		$http({
			url : '/student/add',
			method : method,
			data : $scope.newStudent
		}).then(function(res){
			// console.log(res.data);
			if($scope.newStudent._id)
			{
				if(res.data.ok == 1)
				{
					for(var i=0; i<$scope.allData.length; i++)
					{
						if($scope.allData[i]._id == $scope.newStudent._id)
						{
							$scope.allData[i]=$scope.newStudent;
						}
					}
				}
				else
				{
					$scope.errorMsg="Somthing Error while Data Updating !";
					$("#errorModal").modal("show");
				}
			}
			else
			{
					if(res.data.ops.length>0)
					{
						$scope.allData.push(res.data.ops[0]);
					}
					else
					{
						$scope.errorMsg="Somthing Error while Data Insering !";
						$("#errorModal").modal("show");
					}
				
			}
		});
	};

	$scope.askDelete=function(obj){
		$scope.selectedObj=obj;
	}
	$scope.delete=function(){
		var index = $scope.allData.indexOf($scope.selectedObj);
		$http({
			url : "/student/delete",
			method : 'post',
			data : $scope.selectedObj
		}).then(function(res){
			console.log(res.data);
			if(res.data.ok==1)
			{
				$scope.allData.splice(index, 1);
			}
			else
			{
				$scope.errorMsg="Somthing Error while Deleteing Data !";
				$("#errorModal").modal("show");
			}
		});
	}
	$scope.askEdit=function(obj){
		// $scope.newStudent=obj;
		angular.copy(obj, $scope.newStudent);
	}
});






