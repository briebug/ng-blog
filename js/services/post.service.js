(function () {
    'use strict';

    angular.module('ngBlog.services')
        .factory('PostService', PostService);

    PostService.$inject = ['restService'];

    function PostService(restService) {

        var resource = '/api/posts';

        return {
            loadTopTen: loadTopTen,
            loadById: loadById,
            loadByLinkUrl: loadByLinkUrl,
            search: search
        };

        function loadTopTen() {
            return restService.GET(resource);
        }

        function loadById(id) {
            return restService.GET(resource + '/' + id);
        }

        function loadByLinkUrl(params) {
            return restService.GET(resource + '/' +
                params.year + '/' + params.month + '/' +
                params.day + '/' + params.name);
        }

        function search(qry, limit, offset) {
            var filter = restService.buildFilter(qry),
                obj = {
                    filter: filter,
                    offset: offset,
                    limit: limit
                };
            return restService.GET(resource + '/search', null, null, false, obj);
        }
    }
})();
