<template>
  <view class="content">
    <u-tabs
      :list="tabList"
      :is-scroll="false"
      :current="tabCurrent"
      @change="change"
      :show-bar="false"
      :active-item-style="activeItemStyle"
    ></u-tabs>
    <!--    <image class="logo" src="/static/logo.png"></image>
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <text>{{ num }}</text> -->

    <!-- <button type="default" @click="handle">测试点击事件</button>
    <u-button type="primary" @click="handle">主要按钮</u-button> -->
    <u-tabbar v-model="current" :list="list" :mid-button="false"></u-tabbar>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, reactive } from "vue";

const activeItemStyle = reactive({
  backgroundColor: "#48D1CC",
  color: "#fff",
  borderRadius: "2rem",
});
let num: number = ref(0);
let title: string = ref("");
let active: string = ref("");
const tabList = reactive([
  {
    name: "Daily",
  },
  {
    name: "Weekly",
  },
  {
    name: "Monthly",
  },
  {
    name: "Customize",
  },
]);
const tabCurrent = ref(0);
const list = reactive([
  {
    iconPath: "home",
    selectedIconPath: "home-fill",
    text: "Overview",
    // count: 2,
    isDot: true,
    customIcon: false,
  },
  {
    iconPath: "photo",
    selectedIconPath: "photo-fill",
    text: "Traffic",
    customIcon: false,
  },
  {
    iconPath: "play-right",
    selectedIconPath: "play-right-fill",
    text: "Store",
    customIcon: false,
  },
  {
    iconPath: "account",
    selectedIconPath: "account-fill",
    text: "Account",
    // count: 23,
    isDot: false,
    customIcon: false,
  },
]);
let current: number = ref(0);

onMounted(() => {
  title.value = "标题";
  // list =
  console.log("生命周期");
});
const change = (index) => {
  tabCurrent.value = index;
};
const handle = () => {
  console.log("执行点击事件");
  num.value++;

  console.log("num", num.value);
};
</script>
<style scoped lang="scss">
.u-tab-item {
  border-radius: 1rem !important;
}
</style>

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
