/**
 * Created by Administrator on 2016/11/5.
 */
var myMoudle = angular.module("HelloAngular",[]);

myMoudle.controller('helloAngular',['$scope',
    function HelloAngular($scope){
        $scope.greeting = {
            text:'Hello'
        };
    }
]);

