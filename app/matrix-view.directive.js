'use strict';

var angular = require('angular');

angular.module('matrix').directive('matrixView', MatrixViewDirective);

function MatrixViewDirective() {
    return {
        restrict: 'E',
        transclude: true,
        scope: {},
        templateUrl: 'matrix-view.html',
        controller: ['$scope', function MatrixViewController($scope) {
            $scope.select = function(m) {
                angular.forEach($scope.matrix, function(m) {
                    m.checked = false;
                });
                m.checked = true;
            };

            var fill = function(n, m) {
                var array = [];
                for (var i = 0; i < n; i++) {
                    var nestedArray = [];
                    for (var j = 0; j < m; j++) {
                        nestedArray.push(0);
                    }
                    array.push(nestedArray);
                }
                return array;
            }

            this.change = function(m, i, j, value) {
                $scope.matrix.forEach(function(item) {
                    if (item.name == m) {
                        item.array[i][j] = value;
                        return;
                    }
                });

            }

            var initMatrix = function(name, checked, n, m) {
                return {
                    name: 'Матрица ' + name,
                    checked: checked,
                    array: fill(n, m)
                };
            }

            $scope.init = function() {
                var matrix = [];
                matrix.push(initMatrix('А', true, 4, 2));
                matrix.push(initMatrix('В', false, 2, 3));
                $scope.matrix = matrix;
            }

            this.matrix = function() {
                return $scope.matrix;
            }

            $scope.init();
        }],
    };
}
