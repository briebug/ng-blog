(function() {
    'use strict';

    angular.module('ngBlog.filters.hyphenate', [])
        .filter('hyphenate', hyphenateFilter);

    function hyphenateFilter() {
        return function(text) {
            if (text) {
                return text.replace(/\s+/g, '-')
                    .replace(/\./g, '-')
                    .toLowerCase();
            } else {
                return text;
            }
        };
    }
})();
