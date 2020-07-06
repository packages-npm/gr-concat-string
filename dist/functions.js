"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Concatenates string array by passing as divider text, initial and final.
 * @param array Array de string para concatenação.
 * @param betewee String que irá ficar entre um valor e outro.
 * @param init String inicial da concatenção.
 * @param end String final da concatenação.
 * @return String
 */
function concatString(array, between, init, end) {
    if (array === void 0) { array = ["empty..."]; }
    if (between === void 0) { between = ""; }
    if (init === void 0) { init = ""; }
    if (end === void 0) { end = ""; }
    return array.reduce(function (field, concat, index) {
        var result = (field +=
            index < array.length - 1 ? concat + between : concat);
        return index < array.length - 1 ? result : result + end;
    }, init);
}
exports.concatString = concatString;
/**
 * queryEncodeURI
 * @param QUERY String
 * @return String
 */
function queryEncodeURI(query) {
    query = query.replace(/\n( )+/g, "");
    return encodeURI(query);
}
exports.queryEncodeURI = queryEncodeURI;
