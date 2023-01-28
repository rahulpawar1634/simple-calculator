var app = angular.module("calculatorApp", []);
app.controller("calculatorController", function($scope){
    $scope.operand1 = 0;
    $scope.operand2 = 0;
    $scope.result = 0;
    $scope.operator = "";

    $scope.calculate = function() {
        switch($scope.operator) {
            case "+":
                $scope.result = $scope.operand1 + $scope.operand2;
                break;
            case "-":
                $scope.result = $scope.operand1 - $scope.operand2;
                break;
            case "*":
                $scope.result = $scope.operand1 * $scope.operand2;
                break;
        }
    }
});