var app = angular.module('ngBlog.filters.hyphenate', []);

app.filter('hyphenate', hyphenateFilter);

function hyphenateFilter() {
    return function(text) {
        return text.replace(/\s+/g, '-')
            .replace(/\./g, '-')
            .toLowerCase();
    };
}
