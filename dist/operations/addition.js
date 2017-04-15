"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var addition = function addition() {
    for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
        numbers[_key] = arguments[_key];
    }

    return numbers.reduce(function (prev, curr) {
        return prev + curr;
    });
};

exports.default = addition;