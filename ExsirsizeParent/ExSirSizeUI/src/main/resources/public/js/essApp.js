var app = angular.module("essApp", ['ngRoute']);

app.controller("myCtrl", function(){
    this.id = "Ken";

    console.log("I am definitely here");
});

app.config(function($routeProvider){
    $routeProvider
        .when("/", {
            templateUrl : "views/main.html",
            controller : "myCtrl"
        })
        .when("/home", {
            templateUrl : "views/home.html"
        })
        .when("/settings", {
            templateUrl : "views/settings.html"
        })
        .otherwise({
            template : "<h1>I'll be surprised if this works</h1>"
        });
});
