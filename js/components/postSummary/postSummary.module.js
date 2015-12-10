(function() {
    'use strict';

    angular.module('ngBlog.components.postSummary',
    [
        'ngBlog.filters.htmlSanitize',
        'ngBlog.filters.hyphenate'
    ]);
})();
