var app = angular.module('studentApp', []);
app.controller('studentCtrl', function($scope, $http){
	$scope.allData = [];
	$scope.newStudent = {};
	$scope.errorMsg = "";

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
		console.log($scope.newStudent);
		$http({
			url : '/student/add',
			method : 'post',
			data : $scope.newStudent
		}).then(function(res){
			// console.log(res.data);
			if(res.data.ops.length>0)
			{
				$scope.allData.push(res.data.ops[0]);
			}
			else
			{
				$scope.errorMsg="Somthing Error while Data Insering !";
				$("#errorModal").modal("show");
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
});
