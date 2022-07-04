angular.module("app").component("categories", {
    bindings: {
        changeSearch: "&",
        sideBar: "&",
      },
    templateUrl: "public/features/characters/components/categories/categories.html",
    controller: [ '$rootScope' , function ($rootScope) {
        const vm = this;
        vm.categorieValue = $rootScope.categorie;

        //Atualiza a variável local da categoria presente nos dois components(Desktop e Mobile) se ela já foi alterada
        //Necessário pois um component não consegue informar ao outro a mudança
        setInterval(() => {
            vm.categorieValue = $rootScope.categorie;
        }, 100);

        //Atualiza a variável local da categoria ao mudar a seleção no HTML
        vm.changeCategorieLocal = (value) =>{
            $rootScope.changeCategorie(value);
            vm.categorieValue = $rootScope.categorie;
            vm.changeSearch();
            vm.sideBar();
        }
    }],
    controllerAs: "ctrl",
});