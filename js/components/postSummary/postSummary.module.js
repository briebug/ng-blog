(function() {
    'use strict';

    angular.module('ngBlog.components.postSummary',
    [
        'ngBlog.filters.htmlExcerpt',
        'ngBlog.filters.hyphenate',
        'ngBlog.filters.stripHTML'
    ]);
})();
