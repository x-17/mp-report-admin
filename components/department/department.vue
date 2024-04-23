<template>
	<view class="box">
		<text class="label">当前部门</text>
		<view class="tag_box">
			<template v-if="department.length">
				<up-tag v-for="(item,index) in department" :key="item._id" :text="item.name" size="mini" closable
					:show="close[index]" @close="closeTag(index,item._id)"></up-tag>
			</template>
			<text v-else :style="{margin:'10px 10px 0 0'}">暂无部门数据</text>
			<view class="uni-icons-plusempty custom-style" @click="add"></view>
		</view>
		<up-modal :show="show" confirmColor="rgb(228, 86, 86)" showCancelButton @cancel="show=false"
			@confirm="addConfirm">
			<template #default>
				<up-input v-model="add_content" placeholder="请输入部门名称,最长为8位" type="textarea" :maxlength="8"
					:showWordLimit="true"></up-input>
			</template>
		</up-modal>
	</view>
</template>

<script setup>
	import {
		onBeforeMount,
		ref,
		watch
	} from "vue"
	import {
		onLoad
	} from "@dcloudio/uni-app"
	onBeforeMount(() => {
		getDepInfo()
	})
	const close = ref([])
	const db = uniCloud.database()
	let show = ref(false)
	let department = ref([])
	async function getDepInfo() {
		let res = await db.collection("company-department").field("name").get()
		department.value = res.result.data
		close.value = res.result.data.map(() => {
			return true
		})
	}
	let add_content = ref("")

	async function addConfirm() {
		try {
			uni.showLoading({
				title: "添加中"
			})
			let res = await db.collection("company-department").add({
				name: add_content.value
			})
			console.log(res);
			department.value.push({
				name: add_content.value,
				_id: res.result.id
			})
			show.value = false
			uni.showToast({
				icon: "none",
				title: "添加成功"
			})
		} catch (e) {
			//TODO handle the exception
			console.log(e);
			uni.showToast({
				icon: "error",
				title: "添加失败"
			})
		} finally {
			uni.hideLoading()
		}
	}

	function add() {
		add_content.value = ""
		show.value = true
	}

	async function closeTag(i, id) {
		try {
			uni.showLoading({
				title: "删除中"
			})
			let res = await db.collection("company-department").doc(id).remove()
			close.value[i] = false
			uni.showToast({
				icon: "none",
				title: "删除成功"
			})
		} catch (e) {
			//TODO handle the exception
			uni.showToast({
				icon: "error",
				title: "删除失败"
			})
		} finally {
			uni.hideLoading()
		}
	}
</script>


<style lang="scss" scoped>
	.box {
		display: flex;
		align-items: center;

		.label {
			margin-right: 10px;
		}

		.tag_box {
			display: flex;

			.custom-style {
				width: 24px;
				padding: 0 5px;
				font-size: 14px;
				height: 22px;
				line-height: 22px;
				text-align: center;
				margin: 10px 10px 0 0;
				border-radius: 5px;

				&:hover {
					background-color: #ccc;
					cursor: pointer;
				}
			}
		}


	}
</style>