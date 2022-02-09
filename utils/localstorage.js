/**
 * 设置Storage
 * @param {Object} key 键
 * @param {Object} value 值
 */
export function setStorage(key, value) {
	uni.setStorageSync(key, value);
}

/**
 * 得到Storage
 * @param {Object} key 键
 * @param {Object} value 值
 */
export function getStorage(key) {
	const value = uni.getStorageSync(key)
	if(value) {
		return value
	}
	return '';
}

/**
 * 删除指定key的值
 * @param {Object} key 键
 */
export function removeStorage(key) {
	uni.removeStorageSync(key)
}