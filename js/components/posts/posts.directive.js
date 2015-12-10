(function() {
    'use strict';

    angular
        .module('ngBlog.components.posts')
        .directive('posts', postsDirective);

    function postsDirective() {
        return {
            restrict: 'E',
            templateUrl: 'js/components/posts/posts.html',
            scope: {
                posts: '='
            },
            controller: PostsController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    PostsController.$inject = [];
    function PostsController() {

    }
})();
