"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
describe('Class One:', function () {
    describe('doSomething()', function () {
        it('should do something', function () {
            var classTwo = new src_1.ClassTwo();
            expect(classTwo.doSomething().length).toBeGreaterThan(0);
        });
    });
});
//# sourceMappingURL=my-class-two.spec.js.map