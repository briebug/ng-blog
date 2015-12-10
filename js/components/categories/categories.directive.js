(function() {
    'use strict';

    angular
        .module('ngBlog.categories')
        .directive('categories', categoriesDirective);

    function categoriesDirective() {
        return {
            restrict: 'E',
            templateUrl: 'js/components/categories/categories.html',
            scope: {
                categories: '='
            },
            controller: CategoriesController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    CategoriesController.$inject = [];
    function CategoriesController() {

    }
})();
