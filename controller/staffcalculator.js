angular.module('myApp', ['ngMessages'])
.controller('waitStaffCalculator', function($scope) {

	$scope.subTotal = '0.00';
	$scope.tip = '0.00';

	var totalTip = 0;
	var mealCount = 0;

	$scope.submit = function() {
		if($scope.mealDetailsForm.$valid){

			mealCount = mealCount + 1;

			$scope.subTotal = $scope.basePrice + ($scope.basePrice * ($scope.taxRate / 100));
			$scope.tip = $scope.subTotal * ($scope.tipPercentage/100);
			$scope.tipTotal = $scope.subTotal + $scope.tip;
			$scope.mealCount = mealCount;
			$scope.tipTotal = totalTip + $scope.tip;
			$scope.avgTip = $scope.tipTotal/$scope.mealCount;
			totalTip = $scope.tip;

		}
		return $scope.mealDetailsForm.$valid;
	};

	$scope.resetForm = function() {

		$scope.basePrice = '';
		$scope.taxRate = '';
		$scope.tipPercentage = '';
		$scope.subTotal = '0.00';
		$scope.tip = '0.00';
		$scope.mealCount = '';
		$scope.tipTotal = '';
		$scope.avgTip = '';

		$scope.mealDetailsForm.$submitted = false;
	};

	$scope.cancelForm = function() {
		
		$scope.basePrice = '';
		$scope.taxRate = '';
		$scope.tipPercentage = '';

		$scope.mealDetailsForm.$submitted = false;

	};
});