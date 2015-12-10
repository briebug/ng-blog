/* jshint -W117, -W030 */
(function() {
    'use strict';

    describe('Directive: PostSummary', function() {
        var element,
            vm;

        // inject modules
        beforeEach(function() {
            // bard.appModule pulls in the required modules to run the test
            bard.appModule('ngBlog.components.postSummary');

            // bard.inject adds dependencies to the global namespace
            bard.inject(
                '$compile',
                '$rootScope',
                '$templateCache'
            );
        });

        // create the directive
        beforeEach(function() {
            var html = '<post-summary post="vm.post"></post-summary>';

            // create new scope
            $rootScope = $rootScope.$new();

            // set the template cache
            $templateCache.put('js/components/postSummary/postSummary.html', '');

            // create our directive
            element = $compile(html)($rootScope);

            // wait for angular
            $rootScope.$digest();
        });

        bard.verifyNoOutstandingHttpRequests();

        it('should create directive', function() {
            expect(element).to.be.defined;
        });
    });
})();
