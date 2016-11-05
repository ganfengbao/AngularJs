/**
 * Created by Administrator on 2016/11/5.
 */
var myModule = angular.module("MyMoudle", []);

myModule.directive("hello", function(){
    return{
        restrict: 'E',
        template:'<div>Hi,everyone</div>',
        replace:true
    }
});

