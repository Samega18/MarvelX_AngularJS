angular
  .module("app")
  .controller("HomeController", [
    "CharactersService",
    "$state",
    "$rootScope",
    HomeController,
  ]);

function HomeController(charactersService, $state, $rootScope) {
  const vm = this;
  vm.characters = [];
  vm.searchName = "";
  vm.offset = 0;

  vm.limits = [5, 10, 20];
  vm.limit = vm.limits[2];
  vm.totalItems = 0;
  vm.search = () => {
    vm.characters = [];
    vm.offset = 0;
    vm.getCharacters(true);
    window.scrollTo({
      top: 550,
      behavior: "smooth",
    });
  };

  vm.getCharacters = (reset) => {
    charactersService
      .getAllCharacters(vm.searchName, vm.offset, vm.limit, $rootScope.categorie)
      .then((response) => {
        vm.totalItems = response.data.data.total;
        if (reset) {
          vm.characters = response.data.data.results;
        } else {
          vm.characters = [...vm.characters, ...response.data.data.results];
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  vm.seeDetails = (character) => {
    console.log("Informação", character);
    $state.go("details", { categorie: $rootScope.categorie,characterId: character.id });
  };

  vm.switchLimit = (limit) => {
    vm.limit = limit;
  };

  vm.seeMore = () => {
    vm.offset += vm.limit;
    vm.getCharacters();
  };
}
