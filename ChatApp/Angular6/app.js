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
        url: '/reset/:id',
        templateUrl: './templates/reset.html',
        controller: 'userController'
    })
    //$urlRouterProvider.otherwise('register')
    
});
