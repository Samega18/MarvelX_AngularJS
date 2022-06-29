angular
  .module("app")
  .controller("DetailsController", [
    "CharactersService",
    "$stateParams",
    "$rootScope",
    DetailsController,
  ]);

function DetailsController(charactersService, $stateParams, $rootScope) {
  const vm = this;
  vm.characterId = $stateParams.characterId;
  vm.categorieLocal = $stateParams.categorie;
  vm.categorieView = 'events';
  vm.data = [];
  vm.categorieData = [];

  vm.getDetails = charactersService.getDetails(vm.categorieLocal, vm.characterId).then(data =>{
    vm.data = data.data.data.results[0];
    console.log(vm);

  });

  vm.changeViewCategorie = (value) =>{
    vm.categorieView = value;
    console.log(vm);

    charactersService.getDetailView(vm.categorieLocal, vm.characterId, vm.categorieView).then(data =>{
      vm.categorieData = data.data.data.results;
    });

  };
}
