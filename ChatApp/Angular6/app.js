var app= angular.module("chatapp",['ui.router']);

app.config(function($stateProvider , $urlRouterProvider){
    $stateProvider.state('registerState',{
        url: '/register',
        templateUrl: './templates/register.html',
        controller: 'userController'
    })
    .state('loginState',{
        url: '/login',
        templateUrl: './templates/login.html',
        controller: 'userController'
    })
    .state('forgotState',{
        url: '/forgot',
        templateUrl: './templates/forgot.html',
        controller: 'userController'
    })
    .state('resetState',{
        url: '/reset/:token',
        templateUrl: './templates/reset.html',
        controller: 'userController'
    })
    .state('getUsersState',{
        url: '/getAllUsers',
        templateUrl: './templates/getUsers.html',
        controller: 'getUsersController'
    })
    $urlRouterProvider.otherwise('login')
    
});
