/**
 * Created by Administrator on 2016/11/5.
 */
var myModule = angular.module("HelloAngular", []);

myModule.controller("helloAngular", ['$scope',
    function HelloAngular($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
    }
]);

