import App from './App'
import Http from './utils/request.js'
import Vant from 'vant';
import 'vant/lib/index.css';
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
	app.use(Vant)
	app.config.globalProperties.$http = Http;
	// app.config.globalProperties.$navBarChange = (e)=>{
	// if(e==0){
	// 	uni.navigateTo({
	// 		url:'/pages/index/index'
	// 	})
	// }else if(e==1){
	// 	uni.navigateTo({
	// 		url:'/pages/traffic/index'
	// 	})
	// }
//}
  return {
    app
  }
}
// #endif