import { ContactOption, SelectContactsParams } from '../types/contact';
/**
 * 打开通用选择人员界面, 多选用户或者雇员
 *
 * @export
 * @param {SelectContactsParams & ContactOption<unknown>} [options]
 * @returns {Promise<unknown>}
 */
export default function selectContacts(options?: SelectContactsParams & ContactOption<unknown>): Promise<unknown>;
