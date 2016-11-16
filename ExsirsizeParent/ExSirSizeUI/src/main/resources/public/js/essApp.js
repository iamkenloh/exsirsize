var app = angular.module("essApp", ['ngRoute']).run(run);

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
        if(vm.username === "iamkenloh" || vm.username === "meziskeen"){
            UserService.isLogged = true;
            UserService.userName = vm.username;
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
            controller: "mainController as vm",
            requiresLogin : false
        })
        .when("/home", {
            templateUrl : "views/home.html",
            controller : "homeController as vm",
            requiresLogin : true
        })
        .when("/workout", {
            templateUrl : "views/home.html",
            controller : "workoutController as vm",
            requiresLogin : true
        })
        .when("/settings", {
            templateUrl : "views/settings.html",
            controller: "settingsController as vm",
            requiresLogin : true
        })
        .when("/login", {
            templateUrl:"views/login.html",
            controller: "loginController as vm",
            requiresLogin : false
        })
        .otherwise({
            templateUrl : "views/main.html",
            controller: "mainController as vm",
            requiresLogin : false
        });
});

run.$inject = ['$rootScope', '$location', '$route','UserService'];
function run($rootScope, $location,$route, UserService) {
    // keep user logged in after page refresh
//    $rootScope.globals = $cookieStore.get('globals') || {};
//    if ($rootScope.globals.currentUser) {
//        $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
//    }


    $rootScope.$on('$locationChangeStart', function (event, next, current) {
        // redirect to login page if not logged in and trying to access a restricted page
//        var restrictedPage = $.inArray($location.path(), ['/login', '/register']) === -1;
//        var loggedIn = $rootScope.globals.currentUser;
        var nextPath = $location.path();
        var nextRoute = $route.routes[nextPath];
        if (!UserService.isLogged && nextRoute.requiresLogin) {
            $location.path('/login');
        }
    });
};

//app.directive("checkUser",['$rootScope','$location','UserService', function ($rootScope,$location,UserService) {
//        return {
//            link: function (scope, element, attrs) {
//                console.log("ROUTE CHANGE");
//                $rootScope.$on('$routeChangeStart', function(event, next, current){
//
//                    console.log("ROUTE CHANGE");
//                    if (!UserService.isLogged) {
//                        $location.path('/login');
//                    }
//                });
//            }
//        }
//    }]
//);


