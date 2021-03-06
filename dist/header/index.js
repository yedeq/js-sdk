"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hideSearchBar = exports.showSearchBar = exports.visibleLeftButton = exports.setTitle = exports.rightButtons = exports.navigation = exports.leftButton = exports.clearRightButtons = exports.clearLeftButton = exports.changeLeftButton = void 0;
var rightButtons_1 = require("./rightButtons");
exports.rightButtons = rightButtons_1.default;
var setTitle_1 = require("./setTitle");
exports.setTitle = setTitle_1.default;
var visibleLeftButton_1 = require("./visibleLeftButton");
exports.visibleLeftButton = visibleLeftButton_1.default;
var clearLeftButton_1 = require("./clearLeftButton");
exports.clearLeftButton = clearLeftButton_1.default;
var clearRightButtons_1 = require("./clearRightButtons");
exports.clearRightButtons = clearRightButtons_1.default;
var leftButton_1 = require("./leftButton");
exports.leftButton = leftButton_1.default;
var navigation_1 = require("./navigation");
var changeLeftButton_1 = require("./changeLeftButton");
exports.changeLeftButton = changeLeftButton_1.default;
var showSearchBar_1 = require("./showSearchBar");
exports.showSearchBar = showSearchBar_1.default;
var hideSearchBar_1 = require("./hideSearchBar");
exports.hideSearchBar = hideSearchBar_1.default;
var navigation = {
    lock: function () {
        navigation_1.default('lock');
    },
    unlock: function () {
        navigation_1.default('unlock');
    },
};
exports.navigation = navigation;
