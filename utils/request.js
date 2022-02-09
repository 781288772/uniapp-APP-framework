import baseUrl from '../config/index.js';
import { getStorage } from './localstorage.js'

const request = (options = {}) => {
	let token = getStorage('BLADEAUTH');
	let obj = {
		'Authorization': 'Basic c2FiZXI6c2FiZXJfc2VjcmV0',
		'Tenant-Id': '000000',
		'Blade-Auth': `bearer ${token}`,
		'User-Type': 'app'
	};
	if(options.header) {
		let headers = Object.assign(options.header, obj);
		options.header = headers;
	} else {
		options.header = obj
	}
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + options.url || '',
			method: options.type || 'GET',
			data: options.data || {},
			header: options.header || {}
		}).then(data => {
			let [err, res] = data;
			if(res.statusCode != 200) {
				uni.showToast({
					icon: 'none',
					title: res.data.msg
				})
				if(res.statusCode == 401) {
					uni.redirectTo({
						url: '/pages_user/pages/login/login',
						fail(err) {
							console.log(err)
						}
					})
				}
				reject(res);
			}
			resolve(res.data);
		}).catch(error => {
			reject(error)
		})
	});
}

const get = (url, data, options = {}) => {
	options.type = 'GET';
	options.data = data;
	options.url = url;
	return request(options)
}

const post = (url, data, options = {}) => {
	options.type = 'POST';
	options.data = data;
	options.url = url;
	return request(options)
}

const del = (url, data, options = {}) => {
	options.type = 'DELETE';
	options.data = data;
	options.url = url;
	return request(options)
}


export default {
	request,
	get,
	post,
	del
}
