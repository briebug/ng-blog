(function() {
    'use strict';

    angular.module('ngBlog.postSummary',
    [
        'ngBlog.filters.htmlSanitize',
        'ngBlog.filters.hyphenate'
    ]);
})();
