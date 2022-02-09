<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
		<text>{{num}}</text>

		<button type="default" @click="handle">测试点击事件</button>
		<van-tabbar v-model="active" @change="onChange">
			<van-tabbar-item icon="home">Overview</van-tabbar-item>
			<van-tabbar-item icon="traffic">Traffic</van-tabbar-item>
			<van-tabbar-item icon="store">Store</van-tabbar-item>
			<van-tabbar-item icon="account">Account</van-tabbar-item>
		</van-tabbar>
	</view>
</template>

<script setup lang="ts">
	import {
		ref,
		onMounted
	} from "vue";
	let num: number = ref(0);
	let title: String = ref("");
	let active: string = ref("");
	const onChange = (e) => {
		if (e == 0) {
			uni.navigateTo({
				url: '/pages/index/index'
			})
		} else if (e == 1) {
			uni.navigateTo({
				url: '/pages/traffic/index'
			})
		}
	}
	onMounted(() => {
		title.value = "标题";

		console.log('生命周期')
	})
	const handle = () => {
		console.log("执行点击事件");
		num.value++;

		console.log("num", num.value);
	};
</script>

<!-- <template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{title}}</text>
		</view>
	</view>
</template>

<script setup>
	// export default {
	// 	data() {
	// 		return {
	// 			title:'Hello'
	// 		}
	// 	},
	// 	onLoad() {
	// 		console.log(this.$http)
	// 	},	
	// 	methods: {	

	// 	}
	// }
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
 -->
