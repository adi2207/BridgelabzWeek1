var resetModule = angular.module("chatapp",[]);
resetModule.controller('resetController', reset)
function reset($scope){
    $scope.password="";
    $scope.confirmPassword="";
}