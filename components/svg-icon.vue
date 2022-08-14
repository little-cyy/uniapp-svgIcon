<template>
		<text v-html="svg"></text>
</template>

<script>
	/*
	@property {String} name  引用的svg文件名  路径：@/static/svgs/ 
	@property {String} color  颜色 
	@property {Number|String}, width  宽度 默认 30  单位：rpx
	@property {Number|String}, height  高度 默认 30  单位：rpx
	*/
	export default {
		props:{
			name:{
				type:String,
			},
			color:{
				type:String
			},
			
			width:{   
				type:Number|String,
				default:()=>30
			},
			height:{
				type:Number|String,
				default:()=>30
			}
			
		},
		data() {
			return {
				svg:'',
			}
		},

		mounted() {
			const svg=require('@/static/svgs/'+this.name+'.svg')
			this.svg=svg.replace(/<svg(.+)viewBox/,`<svg fill=${this.color||null} width=${uni.upx2px(this.width)} height=${uni.upx2px(this.height)}  viewBox`)
		},
		
	}
</script>

<style scoped>
</style>

