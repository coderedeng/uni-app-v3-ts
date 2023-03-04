<script lang="ts" setup>
import { ref } from 'vue';
import BasicButton from '@/components/BasicButton/index.vue';
import AppProvider from '@/components/AppProvider/inedx.vue';
import { useRouter } from '@/hooks/router';
import { CURRENT_PLATFORM, PLATFORMS } from '@/enums/platformEnum';
import { judgePlatform } from '@/utils/platform';
import Iconify from '@/components/Iconify/index.vue';
import { Button } from 'antd-mobile';

const title = ref('uni-app vue3 ts --Vite');

const platform = CURRENT_PLATFORM;

const isVue3 = judgePlatform(PLATFORMS.VUE3);

const router = useRouter();
const handleGetStarted = () => {
	router.pushTab('/pages/demo/index');
	// router.push('/pages/log/index?id=4345&title=log');
};
</script>
<template>
	<AppProvider>
		<view class="content">
			<uni-nav-bar shadow left-icon="left" status-bar :fixed="true" title="首页" />
			<image class="logo" src="/static/svg/LOGO.svg" />
			<view class="text-area">
				<text class="">{{ title }}</text>
			</view>
			<view class="text-area">
				<text class="">是否是Vue3: {{ isVue3 }}</text>
			</view>
			<view class="text-area">
				<text class="_u_text-red">当前平台: {{ platform }}</text>
			</view>
			<!-- <BasicButton @click="handleGetStarted">Get Started → </BasicButton> -->
			<van-button type="primary" />
			<LazyVanButton type="default">lazy button</LazyVanButton>
			<view class="_u_text-red">uno css</view>
			<Iconify icon="i-simple-icons-actigraph" size="65" color="yellow" />
			<Iconify icon="i-system-uicons-alarm-clock" />
			<Iconify icon="i-system-uicons-battery-full" size="65" />
			<Iconify icon="i-system-uicons-box-add" :size="65" />
			<Iconify icon="i-system-uicons-bell-snooze" color="red" :size="65" />
		</view>
	</AppProvider>
</template>
<style lang="scss">
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin: 280rpx auto 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
	margin-bottom: 60rpx;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
