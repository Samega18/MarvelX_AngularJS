angular
  .module("app")
  .filter('upper', function() {
    return function(input) {
      return input.toUpperCase();
    };
  })
  .controller("DetailsController", [
    "CharactersService",
    "$stateParams",
    "$rootScope",
    DetailsController,
  ]);

function DetailsController(charactersService, $stateParams, $rootScope) {
  const vm = this;
  vm.isLoadingPage = true;
  vm.isLoadingCategorie = false;
  vm.characterId = $stateParams.characterId;
  vm.categorieLocal = $stateParams.categorie;
  vm.categorieView = 'events';
  vm.data = [];
  vm.categorieData = [];

  vm.totalItems = 0;
  vm.offset = 0;
  vm.limit = 20;

  vm.getDetails = charactersService.getDetails(vm.categorieLocal, vm.characterId).then(data =>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    vm.isLoadingPage = false;
    vm.data = data.data.data.results[0];

  });

  vm.changeViewCategorie = (value, reset) =>{
    console.log("1: "+value)
    console.log("2: "+reset)
    vm.isLoadingCategorie = true;
    vm.categorieView = value;

    if(value == 'characters'){
      vm.totalItems = vm.data.characters.available;
    } else if(value == 'events'){
      vm.totalItems = vm.data.events.available;
    } else if(value == 'series'){
      vm.totalItems = vm.data.series.available;
    } else if(value == 'comics'){
      vm.totalItems = vm.data.comics.available;
    } else if(value == 'stories'){
      vm.totalItems = vm.data.stories.available;
    } else if(value == 'creators'){
      vm.totalItems = vm.data.creators.available;
    }

    charactersService.getDetailView(vm.categorieLocal, vm.characterId, vm.categorieView, vm.limit, vm.offset).then(data =>{

      if (reset) {
        vm.categorieData = data.data.data.results;
      } else {
        vm.categorieData = [...vm.categorieData, ...data.data.data.results];
      }

      vm.isLoadingCategorie = false;
    });

  };

  vm.seeMore = () => {
    vm.offset += vm.limit;
    vm.changeViewCategorie(vm.categorieView);
  };

}
