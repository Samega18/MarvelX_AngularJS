var app = angular.module("app", ["ui.router", "ngAnimate"]);

app.run(['$rootScope', function($rootScope) {

  $rootScope.categorie = 'characters';
  $rootScope.titleCategorie = 'PERSONAGENS';
  $rootScope.descriptionCategorie = 'Fique viciado em uma generosa ajuda de heróis e vilões da humilde Casa das Ideias!';

  $rootScope.changeCategorie = function(categorie) {

    if(categorie == 1){
      $rootScope.categorie = 'characters';
      $rootScope.titleCategorie = 'PERSONAGENS';
      $rootScope.descriptionCategorie = 'Fique viciado em uma generosa ajuda de heróis e vilões da humilde Casa das Ideias !';
    } else if(categorie == 2){
      $rootScope.categorie = 'events';
      $rootScope.titleCategorie = 'EVENTOS';
      $rootScope.descriptionCategorie = 'Fique por dentro dos eventos realizados pela Marvel !';
    }else if(categorie == 3){
      $rootScope.categorie = 'series';
      $rootScope.titleCategorie = 'SÉRIES';
      $rootScope.descriptionCategorie = 'Viaje para as profundezas cômicas do poderoso Universo Marvel !';
    }else if(categorie == 4){
      $rootScope.categorie = 'comics';
      $rootScope.titleCategorie = 'QUADRINHOS';
      $rootScope.descriptionCategorie = 'Desfrute de um mundo repletro de histórias do Universo Marvel !';
    }

  };
  
}]);
