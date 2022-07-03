angular.module("app").component("appHeader", {
    templateUrl: "shared/components/header/header.html",
    controller: [ '$rootScope' , function ($rootScope) {
        const vm = this;
        vm.headerClass = "header-menu-section";

        vm.changeHeaderClass = () =>{

            if(vm.headerClass == "header-menu-section"){
                document.body.style.overflowY = 'hidden';
                vm.headerClass = "header-menu-section on";
            } else {
                document.body.style.overflowY = 'scroll';
                vm.headerClass = "header-menu-section";
            }

        }

        vm.search = () =>{
            $rootScope.searchForRoot();
        }
    }],
    controllerAs: "ctrl",
});