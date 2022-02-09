import Http from './request.js'
import MAIN_HOST from '../config/index.js';
import { getStorage } from './localstorage.js';

export default function() {
	let promise = new Promise((resolve, reject) => {
		
		uni.getLocation({
			success(res) {
				// console.log('res',res)
				uni.request({
					url: `${MAIN_HOST}/app/special/latitudeAndLongitude?location=${res.longitude},${res.latitude}`,
					method: 'GET',
					header: {
						'Authorization': 'Basic c2FiZXI6c2FiZXJfc2VjcmV0',
						'Tenant-Id': '000000',
						'Blade-Auth': `bearer ${getStorage('BLADEAUTH')}`,
						'User-Type': 'app'
					},
					success(e) {
						if(e.statusCode == 200) {
							// console.log('123123123123123')
							resolve(e.data)
						}
					}
				})
				// resolvse(Http.get(`${MAIN_HOST}/app/special/latitudeAndLongitude/?location=${res.latitude},${res.longitude}`));
			},
			fail(err) {
				console.log('uniapp获取位置e', err);
				reject(err)
			}
		})
	})
	return promise;
}