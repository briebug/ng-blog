(function() {
    'use strict';

    angular.module('ngBlog.filters.htmlSanitize', [])
        .filter('htmlSanitize', htmlSanitizeFilter);

    htmlSanitizeFilter.$inject = ['$sce'];
    function htmlSanitizeFilter($sce) {
        return function(htmlCode) {
            return $sce.trustAsHtml(htmlCode);
        };
    }
})();
