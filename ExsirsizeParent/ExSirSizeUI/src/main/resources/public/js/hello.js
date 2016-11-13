/**
 * Created by rockclef on 13/11/16.
 */
angular.module('hello', [])
    .controller('home', function($scope) {
        $scope.greeting = {id: 'xxx', content: 'Hello World!'}
    })