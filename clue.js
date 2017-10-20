var app = angular.module('app', []);

app.controller('CommentController', function ($scope) {
    $scope.hiddenDiv = false;
    $scope.showDiv = function () {
        $scope.hiddenDiv = !$scope.hiddenDiv;
    };
    $scope.lists = [
	"artTiles/kitchentile.png",
	"artTiles/ballroomtile.png",
	"artTiles/librarytile.png",
	"artTiles/loungetile.png",
	"artTiles/halltile.png",
	"artTiles/conservatorytile.png",
	"artTiles/studytile.png",
	"artTiles/diningtile.png"];
   }); 