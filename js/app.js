
var easyPlot = angular.module('easyPlot', [
    'EasyPlotControllers',
    'ngRoute',
    'angular-flot'
]);

easyPlot.config(['$routeProvider', 

    function($routeProvider) {
        $routeProvider.when('/plot', {
            templateUrl:'partials/plot.html',
            controller:'PlotController'    
        }).
        otherwise({
            redirectTo: '/plot'   
        }); 
    }]);
