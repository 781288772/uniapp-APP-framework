<template>
	<view>
		traffic
		<van-tabbar v-model="active"  @change="onChange">
			<van-tabbar-item icon="home" >Overview</van-tabbar-item>
			<van-tabbar-item icon="traffic" >Traffic</van-tabbar-item>
		  <van-tabbar-item icon="store">Store</van-tabbar-item>
		  <van-tabbar-item icon="account">Account</van-tabbar-item>
		</van-tabbar>
	</view>
</template>

<script setup lang="ts">
	import {ref} from "vue";
	import { onShow, onHide } from '@dcloudio/uni-app'

	
	

	type options = { index: number }
	let options: options;
	let query = ref({} as options);
		let active = ref("");
	const onChange = (e)=>{
		if(e==0){
			uni.navigateTo({
				url:`/pages/index/index?index=${e}`
			})
		}else if(e==1){
			uni.navigateTo({
				url:`/pages/traffic/index?index=${e}`
			})
		}
	}
	
	onShow(()=>{
		query.value = options;
		console.log(query)
	
	}))
</script>

<style>
</style>
