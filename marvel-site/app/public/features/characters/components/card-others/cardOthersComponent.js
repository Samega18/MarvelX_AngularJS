angular.module("app").component("cardOthers", {
    bindings: {
        seeDetails: "&",
        categorieLocal: "<",
        character: "<",
      },
    templateUrl: "public/features/characters/components/card-others/cardOthers.html",
    controller: function () {},
    controllerAs: "ctrl",
});