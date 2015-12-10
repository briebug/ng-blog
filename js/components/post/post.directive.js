(function () {
    'use strict';

    angular.module('ngBlog.components.post')
        .directive('post', postDirective);

    function postDirective() {
        return {
            restrict: 'E',
            templateUrl: 'js/components/post/post.html',
            scope: {
                post: '='
            },
            controller: PostController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    PostController.$inject = [];
    function PostController() {
        var vm = this;
    }
})();
