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
