angular.module("app").component("categories", {
    bindings: {
        changeSearch: "&",
      },
    templateUrl: "public/features/characters/components/categories/categories.html",
    controller: [ '$rootScope' , function ($rootScope) {
        const vm = this;
        vm.categorieValue = $rootScope.categorie;

        vm.changeCategorieLocal = (value) =>{
            $rootScope.changeCategorie(value);
            vm.categorieValue = $rootScope.categorie;
            vm.changeSearch();
        }
    }],
    controllerAs: "ctrl",
});