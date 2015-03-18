angular.module('myApp', ['ngAnimate'])

.controller('myController', function($scope) {
    $scope.template = [{
        name: 'your name',
        job_title: 'job title',
        tedious_task: 'tedious task',
        dirty_task: 'dirty task',
        celebrity: 'celebrity',
        useless_skill: 'useless skill',
        obnoxious_celebrity: 'obnoxious celebrity',
        huge_number: 'huge number',
        adjective: 'adjective'
    }];

    $scope.gender = '';

    $scope.maleActive = false;
    $scope.femaleActive = false;

    $scope.changeGender = function(gender){
        $scope.gender = gender;
    };

    $scope.reset = function(){
        $scope.template=[];
        $scope.gender='';
    }


});