var easyPlotControllers = angular.module('EasyPlotControllers', []);

easyPlotControllers.controller('EasyPlotBodyController', function($scope) {
    $scope.name = "Norma"; 
});

easyPlotControllers.controller('PlotController', ['$scope', function ($scope) {
    $scope.name = "Plot Controller";  
}]);
