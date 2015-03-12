var easyPlotControllers = angular.module('EasyPlotControllers', []);

easyPlotControllers.controller('EasyPlotBodyController', function($scope) {
        $scope.name = "Norma"; 
        });

easyPlotControllers.controller('PlotController', ['$scope', function ($scope) {
        $scope.name = "Plot Controller";
        
        // Dummy values  
        $scope.data = [ [[1,2],[2,3],[3,5],[10,10],[20,20],[60,10],[80,22]] ];
        $scope.options = {
                            yaxis: {
                                min: 0,
                                max: 25
                            },
                            xaxis: {
                                min: 0,
                                max: 120,
                                tickDecimals: 0
                            },
                            series:{
                                lines:{
                                    lineWidth:1    
                                }    
                            }
         };
}]);
