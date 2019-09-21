app.controller('userController', function ($scope, services,$stateParams) {

    $scope.registerController = function () {
        let data = {}
        data.email = $scope.email;
        data.name = $scope.name;
        data.password = $scope.password;
        console.log("data--", data);

        services.register(data);
    }
    $scope.loginController = function () {
        let data = {}
        data.email = $scope.email;
        data.password = $scope.password;
        console.log("data--", data);

        services.login(data);
    }
    $scope.forgotController = function () {
        let data = {}
        data.email = $scope.email;
        console.log("data--", data);

        services.forgot(data);
    }
    $scope.resetController = function () {
        let data = {}
        data.password = $scope.password;
        $scope.id=$stateParams.token;
        console.log("data--", data);
        services.reset(data,$scope.id);
    }
    $scope.getUsersController = function () {
        $scope.bookList = [];
        $scope.loadData(services.getUsers(bookList));
    }
    
})


