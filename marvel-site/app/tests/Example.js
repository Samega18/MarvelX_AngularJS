var amostraApp = angular.module('testeApp',[]); 

testeApp.controller('AngularTesteController', ['$rootScope' , function($scope, $rootScope) { 
    $scope.categorieTeste = $rootScope.categorie; 
}],

);

describe('AngularTesteController', function() {
    beforeEach(module('testeApp'));

    var $controller;

    beforeEach(inject(function(_$controller_){
              $controller = _$controller_;
    }));

    describe('$scope.categorieTeste', function() {
        it('Check the scope object', function() {
            var $scope = {};
            var controller = $controller('AngularTesteController', { $scope: $scope });
            expect($scope.categorieTeste).toEqual('characters');
        });
    });
});