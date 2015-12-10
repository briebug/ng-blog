(function() {
    'use strict';

    angular
        .module('ngBlog.components.archives')
        .directive('archives', archivesDirective);

    function archivesDirective() {
        return {
            restrict: 'E',
            templateUrl: 'js/components/archives/archives.html',
            scope: {
                archives: '='
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
