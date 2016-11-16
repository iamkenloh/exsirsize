var app = angular.module("essApp", ['ngRoute']);

app.controller("homeController", function($scope, UserService){
    $scope.text = UserService.userName;
});

app.controller("mainController", function($scope, UserService){

});

app.controller("settingsController", function($scope, UserService){

});

app.controller("workoutController", function($scope, UserService){

});

app.controller("loginController", function($scope, $location, UserService){
    var vm = this;
    vm.dataLoading = false;
    vm.errorMessage = '';

    vm.login = function(){
        if(vm.username === "iamkenloh"){
            UserService.isLogged = true;
            $location.path('/home');
        } else {
            vm.errorMessage = 'incorrect login';
        }
    };

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
            templateUrl : "views/main.html",
            controller: "mainController as vm"
        })
        .when("/home", {
            templateUrl : "views/home.html",
            controller : "homeController as vm"
        })
        .when("/workout", {
            templateUrl : "views/home.html",
            controller : "workoutController as vm"
        })
        .when("/settings", {
            templateUrl : "views/settings.html",
            controller: "settingsController as vm"
        })
        .when("/login", {
            templateUrl:"views/login.html",
            controller: "loginController as vm"
        })
        .otherwise({
            templateUrl : "views/main.html",
            controller: "mainController as vmßß"
        });
});


