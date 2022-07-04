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
  vm.isLoading = false;
  vm.errorView = false;
  vm.characters = [];
  vm.searchName = "";
  vm.offset = 0;

  vm.limits = [5, 10, 20];
  vm.limit = vm.limits[2];
  vm.totalItems = 0;
  
  //Responsável por buscar os resultados com algumas predefinições
  vm.search = (mount) => {
    vm.characters = [];
    vm.offset = 0;
    vm.getCharacters(true);

    if(mount){
      
    } else {
      window.scrollTo({
        top: 550,
        behavior: "smooth",
      });
    }

  };

  //Responsável por pegar os resultados com o service
  vm.getCharacters = (reset) => {
    vm.errorView = false;
    vm.isLoading = true;

    charactersService
      .getAllCharacters(vm.searchName, vm.offset, vm.limit, $rootScope.categorie)
      .then((response) => {
        vm.totalItems = response.data.data.total;

        //Se o resultado não possuir conteúdo, mostra o erro que não encontrou nada
        if(response.data.data.results.length == 0){
          vm.characters = [];
          vm.errorView = true;
        }
        //Se não, vai colocar os resultados na variável ou adicionar com os que já possui 
        else {
          if (reset) {
            vm.characters = response.data.data.results;
          } else {
            vm.characters = [...vm.characters, ...response.data.data.results];
          }
        }
        
        vm.searchName = "";
        vm.isLoading = false
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //Responsável por ir para a tela de detalhes com o Id e o tipo da categoria
  vm.seeDetails = (character) => {
    $state.go("details", { categorie: $rootScope.categorie, characterId: character.id });
  };

  vm.switchLimit = (limit) => {
    vm.limit = limit;
  };

  //Responsável por mostrar mais resultados na tela
  vm.seeMore = () => {
    vm.offset += vm.limit;
    vm.getCharacters();
  };

  $rootScope.searchForRoot = () => {
    vm.search();
  }

}
