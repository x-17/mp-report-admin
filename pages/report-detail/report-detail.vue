<template>
	<view class="box">
		<view class="top">
			<text class="label">上报内容</text><u-text :text="text" wordWrap="anywhere" mode="text"></u-text>
		</view>
		<view class="img">
			<text class="label">图片</text><u-album v-if="image.length" :urls="image||''" keyName="url" :maxCount="6"
				multipleSize="200" singleSize="200"></u-album><text v-else class="label">暂无图片</text>
		</view>
	</view>
</template>

<script setup>
	const db = uniCloud.database()
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import {
		ref
	} from "vue"
	let report_id = ref("")
	let text = ref("")
	let image = ref([])
	onLoad((options) => {
		report_id.value = options.id
		getDetail()
	})
	async function getDetail() {
		try {
			let res = await db.collection("report-info").where(`_id=="${report_id.value}"`).field(
				"image[url],text").get({
				getOne: true
			})
			text.value = res.result.data.text
			if (res.result.data.image) {
				image.value = res.result.data.image
			}
			console.log(res);
		} catch (e) {
			//TODO handle the exception
			uni.showToast({
				title: "获取数据失败",
				icon: 'error'
			})
			console.log(e);
		}
	}
</script>

<style lang="scss" scoped>
	.box {
		padding: 10px;

		.img {
			margin-top: 10px;
		}

		.top,
		.img {
			display: flex;
		}

		.label {
			margin-right: 10px;
			width: 64px;
		}
	}
</style>