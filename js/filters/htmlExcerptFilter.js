(function() {
    'use strict';

    angular.module('ngBlog.filters.htmlExcerpt', ['ngLodash'])
        .filter('htmlExcerpt', htmlExcerptFilter);

    htmlExcerptFilter.$inject = ['$sce', '$filter', 'lodash'];

    function htmlExcerptFilter($sce, $filter, lodash) {
        return function(html) {
            var excerpt = lodash.trunc(html, {length: 100, separator: / /});

            return $sce.trustAsHtml(excerpt);
        };
    }
})();
