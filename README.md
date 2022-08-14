###  下载svg-inline-loader

`npm install svg-inline-loader -D`

### vue.config.js文件中配置svg的loader

```js
const path = require('path')
module.exports = {
	chainWebpack: config => {
		const svgRule = config.module.rule('svg')
		svgRule.uses.clear()
		svgRule
			.use('svg-inline-loader')
			.loader(path.resolve(__dirname, './node_modules/svg-inline-loader'))
			.options({
				removeTags: true,
				removingTags: ['p-id', 'id', 'class', 'title', 'desc', 'defs', 'style'],
				removingTagAttrs: ['fill', 't', 'version', 'p-id', 'id', 'class', 'title', 'desc', 'defs',
					'style', 'width', 'height', 'xmlns', 'xmlns:xlink'
				]
			})
	}
}
```

### 在static文件夹下创建svgs文件夹 ,将需要引用的svg文件放入该文件夹

![image-20220814162620876](C:\Users\cyy\AppData\Roaming\Typora\typora-user-images\image-20220814162620876.png)

### 全局组件svg-icon.vue

```vue
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




```

#### main.js中全局注册组件

```js
import Vue from 'vue'
import svgIcon from './components/svg-icon.vue'
Vue.component("svgIcon", svgIcon);
```



### 在vue中使用组件

```vue
<svgIcon name="edit" width="60"  height="60"   color="blue"></svgIcon>
<svgIcon name="delete" width="60"  height="60"   color="red"></svgIcon>
```

