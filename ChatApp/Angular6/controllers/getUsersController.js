app.controller('getUsersController', function ($scope, services){
    //$scope.getUsersController = function () {
        services.getUsers(function(err,res){
            if(err){
                return err;
            }
            else{
                $scope.data=res;
            }
        });
    //}
})
