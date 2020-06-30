(function(){
'use strict';
angular.module('LunchCheck',[])

.controller('LunchCheckController', lunchFunction);

lunchFunction.$inject = ['$scope'];
function lunchFunction($scope){

    $scope.findNumberOfDishes = function(){
        if($scope.dishes === "") $scope.message = "Please enter data first";
        else{
            var numberOfDishes = $scope.dishes.split(',').length;
            if (numberOfDishes<=3) $scope.message = "Enjoy!";
            else $scope.message = "Soo much!";
        }
    }
}

})();