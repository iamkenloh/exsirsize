var app = angular.module("essApp", ['ngRoute']);

app.controller("homeController", function($scope, UserService){
    $scope.text = UserService.userName;
});

/* Object User Service returns some data that can be used in different controllers*/
app.factory('UserService', function(){
    return {
        isLogged : false,
        userName : ", A Whole Bunch Of Text DUDE"
    };
});


app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl : "views/main.html"
        })
        .when("/home", {
            templateUrl : "views/home.html",
            controller : "homeController as hc"
        })
        .when("/settings", {
            templateUrl : "views/settings.html"
        })
        .otherwise({
            template : "<h1>I'll be surprised if this works</h1>"
        });
});

