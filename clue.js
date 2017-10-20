var app = angular.module('app', []);

app.controller('CommentController', function ($scope) {
    $scope.hiddenDiv = false;
    $scope.showDiv = function () {
        $scope.hiddenDiv = !$scope.hiddenDiv;
    };
    $scope.lists = ["Kitchen","Ballroom","Library","Lounge","Hall","Conservatory","Study","Dining"];
   }); 