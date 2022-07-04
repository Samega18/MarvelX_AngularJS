angular.module("app").component("appHeader", {
    templateUrl: "shared/components/header/header.html",
    controller: [ '$rootScope', '$state' , function ($rootScope, $state) {
        const vm = this;
        vm.headerClass = "header-menu-section";
        vm.headerShow = "header-menu-toggle";

        //Altera a classe do Side bar do Header
        //Com isso é possível abrir e fechar a Barra do Menu na versão Mobile
        vm.changeHeaderClass = () =>{

            if(vm.headerClass == "header-menu-section"){
                document.body.style.overflowY = 'hidden';
                vm.headerClass = "header-menu-section on";
            } else {
                document.body.style.overflowY = 'scroll';
                vm.headerClass = "header-menu-section";
            }

        }
        
        //Responsável por Identificar a rota toda vez, para remover o Menu Hamburguer do header
        //Esse menu pertence apenas ao Home
        setInterval(() => {
            const pathDetails = window.location.hash;

            if(pathDetails.startsWith("#!/details")){
                vm.headerShow = "header-menu-toggle-details";
            } else {
                vm.headerShow = "header-menu-toggle";
            }
        }, 200);

        //Responsável por fazer a busca na mudança da categoria, para alterar os cards  
        vm.search = () =>{
            $rootScope.searchForRoot();
        }
    }],
    controllerAs: "ctrl",
});