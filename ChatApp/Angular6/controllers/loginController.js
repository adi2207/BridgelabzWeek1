var loginModule = angular.module("chatapp",[]);
loginModule.controller('loginController', login)
function login($scope){
    $scope.email="";
    $scope.password="";
}