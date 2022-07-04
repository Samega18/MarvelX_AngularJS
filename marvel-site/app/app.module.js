var app = angular.module("app", ["ui.router", "ngAnimate"]);

app.run(['$rootScope', function($rootScope) {

  $rootScope.categorie = 'characters';
  $rootScope.titleCategorie = 'CHARACTERS';
  $rootScope.descriptionCategorie = 'Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!';

  $rootScope.changeCategorie = function(categorie) {

    if(categorie == 1){
      $rootScope.categorie = 'characters';
      $rootScope.titleCategorie = 'CHARACTERS';
      $rootScope.descriptionCategorie = 'Get hooked on a hearty helping of heroes and villains from the humble House of Ideas!';
    } else if(categorie == 2){
      $rootScope.categorie = 'events';
      $rootScope.titleCategorie = 'EVENTS';
      $rootScope.descriptionCategorie = 'Stay on top of marvel events!';
    }else if(categorie == 3){
      $rootScope.categorie = 'series';
      $rootScope.titleCategorie = 'SERIES';
      $rootScope.descriptionCategorie = 'Journey into the cosmic depths of the mighty Marvel Cinematic Universe!';
    }else if(categorie == 4){
      $rootScope.categorie = 'comics';
      $rootScope.titleCategorie = 'COMICS';
      $rootScope.descriptionCategorie = 'Enjoy a world of marvel universe stories!';
    }

  };
  
}]);
