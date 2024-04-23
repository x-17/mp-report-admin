<template>
	<view>
		<view class="uni-header">
			<view class="uni-group hide-on-phone">
				<view class="uni-title">上报信息</view>
			</view>
			<view class="uni-group">
				<!-- 输入框 -->
				<input class="uni-search" type="text" v-model="searchVal" @confirm="search" placeholder="请输入姓名" />
				<!-- 搜索按钮 -->
				<button class="uni-button" type="default" size="mini"
					@click="search">{{$t('common.button.search')}}</button>
				<!-- 批量删除按钮 -->
				<button class="uni-button" type="warn" size="mini"
					@click="delTable">{{$t('common.button.batchDelete')}}</button>
			</view>
		</view>
		<view class="mid">
			<department v-if="uniIDHasRole('admin')"></department>
		</view>
		<view class="uni-container">
			<!-- 表格组件 -->
			<uni-table :loading="loading" border stripe type="selection" :emptyText="$t('common.empty')"
				@selection-change="selectionChange">
				<uni-tr>
					<!-- 表头列 -->
					<uni-th width="150" align="center">姓名</uni-th>
					<uni-th width="150" align="center">部门</uni-th>
					<uni-th width="150" align="center">手机号</uni-th>
					<uni-th width="150" align="center">日期</uni-th>
					<uni-th width="204" align="center">设置</uni-th>
				</uni-tr>
				<uni-tr v-for="(item ,index) in tableData" :key="item._id">
					<!-- 表格数据列 -->
					<uni-td align="center">
						<view class="name">{{item.staff_id[0].name}}</view>
					</uni-td>
					<uni-td align="center">{{item.staff_id[0].department}}</uni-td>
					<uni-td align="center">{{item.staff_id[0].phone}}</uni-td>
					<uni-td align="center">{{timeFormat(item.time)}}</uni-td>
					<uni-td>
						<view class="uni-group">
							<!-- 详情按钮 -->
							<button class="uni-button" size="mini" type="primary"
								@click="toDetail(item._id)">{{$t('common.button.detail')}}</button>
							<!-- 删除按钮 -->
							<button class="uni-button" size="mini" type="warn" v-if="uniIDHasRole('admin')"
								@click="del(item._id)">{{$t('common.button.delete')}}</button>
						</view>
					</uni-td>
				</uni-tr>
			</uni-table>
			<view class="uni-pagination-box">
				<!-- 分页组件 -->
				<uni-pagination show-icon :page-size="pageSize" :current="pageCurrent" :total="total"
					@change="change" />
			</view>
		</view>
		<up-modal :show="show" confirmColor="rgb(228, 86, 86)" content="确认删除该条数据吗?" confirmText="删除" cancelText="取消"
			showCancelButton :style="{textAlign:'center'}" @cancel="show=false" @confirm="delConfirm"></up-modal>
		<!-- #ifndef H5 -->
		<fix-window />
		<!-- #endif -->
	</view>
</template>


<script setup>
	import dayjs from "dayjs";
	import {
		onLoad
	} from "@dcloudio/uni-app"
	import {
		nextTick,
		ref
	} from "vue"
	import {
		promise
	} from "../../uni_modules/uview-plus/libs/function/test";
	import error from "../../store/modules/error";
	const db = uniCloud.database()
	const delOption = uniCloud.importObject("delFile")
	let searchVal = ref('');
	// 表格数据
	let tableData = ref([]);
	// 每页数据量
	let pageSize = ref(10);
	// 当前页
	let pageCurrent = ref(1);
	// 数据总量
	let total = ref(0);
	// 加载状态
	let loading = ref(false);
	//选中的数据
	let selectedIndexs = ref([])
	//删除弹框
	let show = ref(false)
	// 页面加载时的处理函数
	onLoad(() => {
		// // 重置选中项数组
		// this.selectedIndexs = []
		// // 获取第一页数据
		getData(1)
	})
	//删除时的id
	let delID = ref("")

	function del(id) {
		delID.value = id
		show.value = true;
	}

	function delFunc(id) {
		return new Promise(async (resolve, reject) => {
			try {
				let res = await db.collection("report-info").where(`_id=='${id}'`).field("image[url]").get({
					getOne: true
				})
				// console.log(res);
				if (res.result.data.image) {
					let fileArr = []
					res.result.data.image.forEach((val) => {
						fileArr.push(val.url)
					})
					let del_res = await delOption.delFile(fileArr)
					console.log("del_res", del_res);
				}
				let remove_res = await db.collection("report-info").doc(id).remove()
				console.log("remove_res", remove_res);
				resolve("del success")
			} catch (e) {
				//TODO handle the exception
				console.log(e);
				reject(id)
			}
		})

	}
	async function delConfirm() {
		delFunc(delID.value).then((res) => {
			show.value = false;
			uni.showToast({
				title: "删除成功",
				icon: "none"
			})
			getData(pageCurrent.value)
		}).catch((e) => {
			show.value = false;
			uni.showToast({
				title: "删除失败请稍后重试",
				icon: "error"
			})
		})
	}
	// 多选处理
	function selectedItems() {
		return selectedIndexs.value.map(i => tableData.value[i]._id)
	};

	// 多选事件处理函数
	function selectionChange(e) {
		selectedIndexs.value = e.detail.index
	};
	// 批量删除函数
	function delTable() {
		let success_num = 0
		let reoprt_id_arr = selectedItems();
		let asyncPromiseArr = reoprt_id_arr.map((id) => {
			return delFunc(id)
		})
		Promise.all(asyncPromiseArr).then((res) => {
			uni.showToast({
				title: "删除成功",
				icon: "none"
			})
			getData(pageCurrent.value)
		}).catch(async (e) => {
			let err_index = reoprt_id_arr.indexOf(e)
			if (err_index != 0) {
				setTimeout(() => {
					getData(pageCurrent.value)
				}, 500)
			}
			uni.showToast({
				title: `第${err_index+1}条删除失败请稍后重试`,
				icon: "error"
			})
		})
	};

	function timeFormat(time) {
		return dayjs(time).format("YYYY-MM-DD HH:mm:ss")
	}

	// 分页触发事件处理函数
	function change(e) {
		getData(e.current)
	};

	// 搜索函数
	function search() {
		getData(1, searchVal.value.trim())
	};

	function toDetail(report_id) {
		uni.navigateTo({
			url: `/pages/report-detail/report-detail?id=${report_id}`
		})
	}
	//获取数据函数
	async function getData(currentPage, value = "") {
		loading.value = true
		pageCurrent.value = currentPage
		let where = `${new RegExp(value, 'i')}.test(staff_id.name)`
		try {
			db.collection("report-info").get().then(res => {
				total.value = res.result.data.length
			})
			let staffInfo = await db.collection("staff-info").field(
				"_id,name,department,phone").getTemp()
			let reportInfo = await db.collection("report-info").field("_id,staff_id,time").getTemp()
			// console.log(reportInfo);
			let res = await db.collection(reportInfo, staffInfo).where(where)
				.orderBy("time desc").skip((currentPage - 1) *
					pageSize.value)
				.limit(pageSize.value).get()
			console.log(res)
			tableData.value = res.result.data
		} catch (e) {
			//TODO handle the exception
			console.log(e);
		} finally {
			loading.value = false
		}

	};
</script>


<style lang="scss" scoped>
	.mid {
		padding: 0 15px
	}

	/* #ifndef H5 */
	page {
		padding-top: 85px;
	}

	/* #endif */
</style>