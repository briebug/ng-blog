(function() {
    'use strict';

    angular
        .module('ngBlog.components.postSummary')
        .directive('postSummary', postSummaryDirective);

    function postSummaryDirective() {
        return {
            restrict: 'E',
            templateUrl: 'js/components/postSummary/postSummary.html',
            scope: {
                post: '='
            },
            controller: function() {},
            controllerAs: 'vm',
            bindToController: true
        };
    }
})();
