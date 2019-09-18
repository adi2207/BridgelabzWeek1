var forgotModule = angular.module("chatapp",[]);
forgotModule.controller('forgotController', forgot)
function forgot($scope){
    $scope.email="";
}