"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("../../src");
describe('Class One:', function () {
    describe('doSomething()', function () {
        it('should do something', function () {
            var classOne = new src_1.ClassOne();
            expect(classOne.doSomething()).toEqual('Something was done...');
        });
    });
});
//# sourceMappingURL=my-class-one.spec.js.map