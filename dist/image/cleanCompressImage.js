"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core = require("../core");
var constants_1 = require("../constants");
/**
 * 清除压缩后的图片
 * @description 拍照或选择照片后都会生成压缩图片，可调用该方法进行清除
 * @module image
 * @returns 无
 */
function cleanCompressImage() {
    return core.execSync(constants_1.WORKPLUS_IMAGE, 'cleanCompressImage', []);
}
exports.default = cleanCompressImage;
