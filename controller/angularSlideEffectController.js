var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope) {

	$scope.hello = "";

	$scope.textChange = function () {
        // console.log($scope.hello);
if ($scope.hello.length > 0) {
	// console.log("I'm here");
	if ($scope.hello == "i") {
		$("p").replaceWith('<div class="i_1"></div>')
		// .appendTo('.after')
		;
	}
} else{
	console.log("not here");
}
    };




});




