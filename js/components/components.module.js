(function () {
    'use strict';

    /**
     * @ngdoc module
     * @name ngBlog.services
     * @module ngBlog.services
     * @description
     *
     * # ngBlog.services
     * The ngBlog.services module is responsible for injecting
     * services into the app.
     */
    angular.module('ngBlog.components', [
        'ngBlog.components.archives',
        'ngBlog.components.categories',
        'ngBlog.components.post',
        'ngBlog.components.posts',
        'ngBlog.components.postSummary',
        'ngBlog.components.recentPosts',
        'ngBlog.components.search',
        'ngBlog.services'
    ]);
})();
