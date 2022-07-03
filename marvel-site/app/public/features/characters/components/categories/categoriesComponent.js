angular.module("app").component("categories", {
    bindings: {
        changeSearch: "&",
        sideBar: "&",
      },
    templateUrl: "public/features/characters/components/categories/categories.html",
    controller: [ '$rootScope' , function ($rootScope) {
        const vm = this;
        vm.categorieValue = $rootScope.categorie;

        setInterval(() => {
            vm.categorieValue = $rootScope.categorie;
        }, 100);

        vm.changeCategorieLocal = (value) =>{
            $rootScope.changeCategorie(value);
            vm.categorieValue = $rootScope.categorie;
            vm.changeSearch();
            vm.sideBar();
        }
    }],
    controllerAs: "ctrl",
});