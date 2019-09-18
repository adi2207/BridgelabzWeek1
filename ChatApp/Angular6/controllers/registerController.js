var registerModule = angular.module("chatapp",[]);
registerModule.controller('registerController', register)
function register($scope){
    $scope.name="";
    $scope.email="";
    $scope.password="";
    $scope.confirmPassword="";
}