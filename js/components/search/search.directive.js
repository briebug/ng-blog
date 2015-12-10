(function() {
    'use strict';

    angular
        .module('ngBlog.search')
        .directive('search', searchDirective);

    function searchDirective() {
        return {
            restrict: 'E',
            templateUrl: 'js/components/search/search.html',
            scope: {
                search: '='
            },
            controller: SearchController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    SearchController.$inject = [];
    function SearchController() {

    }
})();
