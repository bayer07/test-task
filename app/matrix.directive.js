'use strict';

var angular = require('angular');

angular.module('matrix').directive('matrix', MatrixDirective);

function MatrixDirective() {
    return {
        require: '^^matrixView',
        restrict: 'E',
        scope: {},
        templateUrl: 'matrix.html',
        link: function($scope, $element, $attrs, $ctrl) {

            $scope.matrix = $ctrl.matrix();

            $scope.change = function(m, i, j, value) {                
                $ctrl.change(m, i, j, value);
            }
        }
    };
}
