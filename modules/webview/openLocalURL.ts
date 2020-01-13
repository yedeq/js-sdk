// This file is auto gererated by scripts/create-api.js
import * as core from '../core';
import { WebviewOption, OpenLocalURLParams } from '../types/webview';
import { WORKPLUS_WEBVIEW } from '../constants';

export default function openLocalURL(
  options?: WebviewOption<OpenLocalURLParams, void>,
): Promise<void> {
  return core.exec<OpenLocalURLParams, void, unknown>(
    WORKPLUS_WEBVIEW,
    'openLocalURL',
    options?.data ?? [],
    options?.success,
    options?.fail,
  );
}