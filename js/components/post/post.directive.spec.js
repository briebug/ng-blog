/* jshint -W117, -W030 */
(function() {
    'use strict';

    describe('Directive: post', function() {
        var element,
            vm;

        // inject modules
        beforeEach(function() {
            // bard.appModule pulls in the required modules to run the test
            bard.appModule('ngBlog.post');

            // bard.inject adds dependencies to the global namespace
            bard.inject(
                '$compile',
                '$rootScope',
                '$templateCache'
            );
        });

        // create the directive
        beforeEach(function() {
            var html = '<post post="{}"></post>';

            // create new scope
            $rootScope = $rootScope.$new();

            // set the template cache
            $templateCache.put('js/components/post/post.html', '');

            // create our directive
            element = $compile(html)($rootScope);

            // wait for angular
            $rootScope.$digest();

            vm = element.controller('posts');
        });

        // verify that there aren't any unexpected http requests
        bard.verifyNoOutstandingHttpRequests();

        // verify that both element and vm are defined
        it('is able to be created', function() {
            expect(element).to.be.defined;
            expect(vm).to.be.defined;
        });
    });
})();
