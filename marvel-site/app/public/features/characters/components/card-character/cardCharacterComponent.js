angular.module("app").component("cardCharacter", {
    bindings: {
        seeDetails: "&",
        character: "<",
      },
    templateUrl: "public/features/characters/components/card-character/cardCharacter.html",
    controller: function () {},
    controllerAs: "ctrl",
});