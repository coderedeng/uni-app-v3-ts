<script lang="ts" setup name="Iconify">
import { computed, ref, unref } from 'vue';
import { assign } from 'lodash-es';

const props = defineProps({
	icon: {
		type: String,
	},
	size: {
		type: [Number, String],
	},
	color: {
		type: String,
	},
});

const iconSize = ref<string | boolean>(props.size ? `${props.size}rpx` : false);
const style = computed(() => {
	return assign(unref(iconSize) ? { width: unref(iconSize), height: unref(iconSize) } : {}, props.color ? { color: props.color } : {});
});

const emit = defineEmits(['click']);
const onClick = () => {
	emit('click');
};
</script>
<template>
	<view ref="elRef" @click="onClick" :class="['iconify', icon]" :style="style"></view>
</template>
<style lang="scss" scoped>
.iconify {
	display: inline-block;
	vertical-align: middle;
	height: 44rpx;
	width: 44rpx;
	color: inherit;
	&:hover {
		cursor: pointer;
		opacity: 0.8;
	}
}
</style>
