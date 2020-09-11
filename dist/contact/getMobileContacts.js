"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 获取手机通讯录联系人的列表
 *
 * @export
 * @param {ContactOption<[], unknown>} [options]
 * @returns {Promise<unknown>}
 */
function getMobileContacts(options) {
    var _a;
    return core.exec(constants_1.WORKPLUS_CONTACT, 'getMobileContacts', (_a = options === null || options === void 0 ? void 0 : options.data) !== null && _a !== void 0 ? _a : [], options === null || options === void 0 ? void 0 : options.success, options === null || options === void 0 ? void 0 : options.fail);
}
exports.default = getMobileContacts;
