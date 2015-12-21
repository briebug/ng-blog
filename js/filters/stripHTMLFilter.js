(function() {
    var app = angular.module('ngBlog.filters.stripHTML', []);

    app.filter('stripHTML', stripHTMLFilter);

    function stripHTMLFilter() {
        return function(text) {
            return text.replace(/<(?:.|\n)*?>/gm, '');
        };
    }
})();
