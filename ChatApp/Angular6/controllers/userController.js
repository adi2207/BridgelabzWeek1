app.controller('userController', function ($scope, services) {

    $scope.registerController = function () {
        let data = {}
        data.email = $scope.email;
        data.name = $scope.name;
        data.password = $scope.password;
        //password validation
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
        //password validation
        console.log("data--", data);

        services.reset(data);
    }
})


