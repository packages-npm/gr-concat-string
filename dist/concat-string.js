"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function concatString(array, between, init, end) {
    if (array === void 0) { array = ["empty..."]; }
    if (between === void 0) { between = ""; }
    if (init === void 0) { init = ""; }
    if (end === void 0) { end = ""; }
    return array.reduce(function (field, concat, index) {
        var result = (field += index < array.length - 1 ? concat + between : concat);
        return index < array.length - 1 ? result : result + end;
    }, init);
}
exports.concatString = concatString;
