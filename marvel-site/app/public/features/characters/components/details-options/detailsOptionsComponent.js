angular.module("app").component("detailsOptions", {
    bindings: {
        changeViewCategorie: "&",
        categorieLocal: "<",
        categorieView: "<",
        isLoadingCategorie: "<",
        categorieData: "<",
        data: "<",
      },
    templateUrl: "public/features/characters/components/details-options/detailsOptions.html",
    controller: function () {},
    controllerAs: "ctrl",
});