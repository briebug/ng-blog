var app = angular.module('ngBlog.filters.htmlSanitize', []);

app.filter('htmlSanitize', ['$sce', function($sce) {
    return function(htmlCode) {
        return $sce.trustAsHtml(htmlCode);
    };
}]);
