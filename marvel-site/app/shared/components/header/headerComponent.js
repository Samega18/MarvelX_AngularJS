angular.module("app").component("appHeader", {
    templateUrl: "shared/components/header/header.html",
    controller: [ '$rootScope', '$state' , function ($rootScope, $state) {
        const vm = this;
        vm.headerClass = "header-menu-section";
        vm.headerShow = "header-menu-toggle";
        
        setInterval(() => {
            const pathDetails = window.location.hash;

            if(pathDetails.startsWith("#!/details")){
                vm.headerShow = "header-menu-toggle-details";
            } else {
                vm.headerShow = "header-menu-toggle";
            }
        }, 200);

        vm.search = () =>{
            $rootScope.searchForRoot();
        }
    }],
    controllerAs: "ctrl",
});