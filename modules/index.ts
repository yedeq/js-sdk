import { CoreOptions } from './types/core';
import * as core from './core';
import Image from './image';
import * as Contact from './contact';
import * as Location from './location';
import Device from './device';
import EventLog from './eventlog';
import File from './file';
import * as Network from './network';
import Util from './util';
import * as Email from './email';
import * as Auth from './auth';
import * as Eventlistener from './eventlistener';
import * as App from './app';
import * as Session from './session';
import * as User from './user';
import * as Header from './header';
import * as Webview from './webview';

/** WorkPlus SDK 版本 */
export const version = '__VERSION__';
export const native = {};

/** 图像接口 */
export const image = Image;

/** 联系人接口 */
export const contact = Contact;

/** 用户接口 */
export const user = User;

/** 聊天会话接口 */
export const session = Session;

/** 应用 */
export const app = App;

/** 网页接口 */
export const webview = Webview;

/** 网页头部接口 */
export const header = Header;

/** 工具类接口 */
export const util = Util;

/** 地理位置接口 */
export const location = Location;
/** 设备信息接口 */
export const device = Device;
/** 事件日志接口 */
export const eventlog = EventLog;
/** 文件接口 */
export const file = File;
/** 网络信息接口 */
export const network = Network;
/** 邮箱接口 */
export const email = Email;
/** 认证接口 */
export const auth = Auth;
/** 网页事件 */
export const event = Eventlistener;

/** WrokPlus SDK 初始化配置 */
export const init = core.init;
/** Cordova 首次注入时的触发事件 */
export const ready = core.ready;
/** Cordova 执行事件（异步） */
export const exec = core.exec;
/** Cordova 执行事件（同步） */
export const execSync = core.execSync;
/** WorkPlus SDK 监听错误回调 */
export const error = core.error;

/** Vue Plugin install function */
/*eslint @typescript-eslint/no-explicit-any: 0*/
export const install = (Vue: any, options?: CoreOptions, globalMode?: boolean) => {
  if (!globalMode) {
    core.init(options);
  }

  /* eslint no-param-reassign: 0 */
  Vue.prototype.$w6s = {
    version,
    image,
    contact,
    user,
    session,
    app,
    webview,
    header,
    util,
    location,
    device,
    eventlog,
    file,
    network,
    email,
    auth,
    event,
    ready,
    exec,
    execSync,
    error,
  };

  if (globalMode) {
    Vue.prototype.$w6s.init = init;
  }
};

/* @ts-ignore */
if (typeof window !== 'undefined' && window.Vue) {
  /* @ts-ignore */
  install(window.Vue, null, true);
}
