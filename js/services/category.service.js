(function () {
    'use strict';

    angular.module('ngBlog.services')
        .factory('CategoryService', CategoryService);

    CategoryService.$inject = ['restService'];

    function CategoryService(restService) {

        var resource = '/api/categories';

        return {
            loadAll: loadAll
        };

        function loadAll() {
            return restService.GET(resource);
        }
    }
})();
