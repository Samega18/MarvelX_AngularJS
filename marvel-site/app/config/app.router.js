angular.module("app").config([
  "$stateProvider",
  "$urlRouterProvider",
  function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "public/home/home.template.html",
      })
      .state("details", {
        url: "/details/:categorie/:characterId",
        templateUrl:
          "public/details/details.html",
        params: {
          characterId: null,
        },
      });
    $urlRouterProvider.otherwise("/home");
  },
]);
