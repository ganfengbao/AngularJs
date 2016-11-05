/**
 * Created by Administrator on 2016/11/5.
 */
function CommonController($scope){
    $scope.commonFn=function(){
        alert("这是一个通用的方法")
    }
}

function Controller1($scope){
    $scope.greeting = {
        text:"Hello1"
    }
    $scope.test1=function(){
        alert("test1");
    }
}

function Controller2($scope){
    $scope.greeting = {
        text:"Hello2"
    }
    $scope.test2=function(){
        alert("test2");
    }
}
