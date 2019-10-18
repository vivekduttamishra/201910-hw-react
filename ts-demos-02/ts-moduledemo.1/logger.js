"use strict";
var utils;
(function (utils) {
    function log(message) {
        console.log(message);
    }
    utils.log = log;
})(utils || (utils = {}));
