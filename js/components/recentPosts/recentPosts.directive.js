(function() {
    'use strict';

    angular
        .module('ngBlog.components.recentPosts')
        .directive('recentPosts', recentPostsDirective);

    function recentPostsDirective() {
        return {
            restrict: 'E',
            templateUrl: 'js/components/recentPosts/recentPosts.html',
            scope: {
                recentPosts: '='
            },
            controller: RecentPostsController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    RecentPostsController.$inject = [];
    function RecentPostsController() {

    }
})();
