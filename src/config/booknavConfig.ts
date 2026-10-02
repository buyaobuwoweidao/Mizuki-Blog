import type { BooknavGroup, BooknavPageConfig } from "../types/booknavConfig";

// 书签导航页面配置
export const booknavPageConfig: BooknavPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "",

	// favicon 自动获取配置
	favicon: {
		// 书签未填写 icon 时，是否自动获取目标站点的 favicon 图标
		enabled: true,

		// favicon 接口地址，{domain} 为占位符，会被替换成目标站点域名
		// 更换接口只需保证地址里含有 {domain}，例如：
		//   https://a.favicon.im/{domain}
		//   https://favicon.im/{domain}
		api: "https://a.favicon.im/{domain}",
	},
};

// 书签导航配置
// 每个数组项是一个分类组，分类组内的 items 是该分类下的书签
export const booknavConfig: BooknavGroup[] = [
	{
		id: "dev",
		name: "开发",
		icon: "material-symbols:code-rounded",
		desc: "写代码时离不开的站点",
		weight: 100,
		items: [
			{
				title: "GitHub",
				url: "https://github.com",
				desc: "全球最大的代码托管平台",
				icon: "fa7-brands:github",
				weight: 10,
			},
			{
				title: "MDN Web Docs",
				url: "https://developer.mozilla.org",
				desc: "最权威的 Web 技术文档",
				weight: 9,
			},
			{
				title: "Stack Overflow",
				url: "https://stackoverflow.com",
				desc: "程序员问答社区，报错搜一搜",
				weight: 8,
			},
			{
				title: "Astro",
				url: "https://astro.build",
				desc: "内容驱动型网站的 Web 框架",
				weight: 7,
			},
			{
				title: "Svelte",
				url: "https://svelte.dev",
				desc: "把组件编译成高效原生 JS 的框架",
				weight: 6,
			},
			{
				title: "Tailwind CSS",
				url: "https://tailwindcss.com",
				desc: "一个功能强大且灵活的 CSS 框架",
				weight: 5,
			},
			{
				title: "regex101",
				url: "https://regex101.com",
				desc: "在线正则表达式测试与解释",
				weight: 4,
			},
			{
				title: "JSON Crack",
				url: "https://jsoncrack.com",
				desc: "把 JSON 数据可视化成树状图",
				weight: 3,
			},
			{
				title: "LeetCode",
				url: "https://leetcode.cn",
				desc: "刷题练算法的程序员必修课",
				weight: 2,
			},
		],
	},
	{
		id: "opensource",
		name: "项目",
		icon: "material-symbols:code-rounded",
		desc: "好用的开源项目",
		weight: 90,
		items: [
			{
				title: "Firefly",
				url: "https://github.com/CuteLeaf/Firefly",
				desc: "清晰美观的 Astro 个人博客主题模板",
				icon: "/favicon/firefly-32.png",
				weight: 10,
			},
			{
				title: "free-for.dev",
				url: "https://free-for.dev",
				desc: "开发者可免费使用的 SaaS 与服务大全",
				weight: 9,
			},
			{
				title: "Awesome 系列",
				url: "https://github.com/sindresorhus/awesome",
				desc: "各领域精选资源清单的始祖仓库",
				weight: 8,
			},
		],
	},
	{
		id: "design",
		name: "设计",
		icon: "material-symbols:palette-outline-rounded",
		desc: "配色、图标与灵感来源",
		weight: 90,
		items: [
			{
				title: "Iconify",
				url: "https://icon-sets.iconify.design",
				desc: "海量开源图标集合搜索",
				weight: 10,
			},
			{
				title: "iconfont",
				url: "https://www.iconfont.cn",
				desc: "阿里巴巴矢量图标库",
				weight: 9,
			},
			{
				title: "Figma",
				url: "https://www.figma.com",
				desc: "在线协作设计工具，界面设计标配",
				weight: 8,
			},
			{
				title: "Photopea",
				url: "https://www.photopea.com",
				desc: "浏览器里的在线 Photoshop",
				weight: 7,
			},
			{
				title: "Unsplash",
				url: "https://unsplash.com",
				desc: "免费商用高清摄影图库",
				weight: 6,
			},
			{
				title: "Pixabay",
				url: "https://pixabay.com",
				desc: "免费图片、视频、音效素材库",
				weight: 5,
			},
			{
				title: "Seesaw",
				url: "https://seesaw.website",
				desc: "设计师都在看的设计灵感导航",
				weight: 4,
			},
			{
				title: "字客网",
				url: "https://www.fontke.com",
				desc: "字体大全与字体识别",
				weight: 3,
			},
		],
	},
	{
		id: "anime",
		name: "二次元",
		icon: "material-symbols:animation-rounded",
		desc: "壁纸、图库与 ACG 资源",
		weight: 85,
		items: [
			{
				title: "WallHaven",
				url: "https://wallhaven.cc",
				desc: "海外高清壁纸搜索引擎，宝藏站点",
				weight: 10,
			},
			{
				title: "Wallpaper Abyss",
				url: "https://wall.alphacoders.com",
				desc: "超高清壁纸站，动漫/游戏/风景应有尽有",
				weight: 9,
			},
			{
				title: "Vilipix 插画世界",
				url: "https://www.vilipix.com",
				desc: "最像 P 站的镜像站，榜单标签更新快",
				weight: 8,
			},
			{
				title: "Anime-pictures",
				url: "https://anime-pictures.net",
				desc: "专注二次元的高质量图库",
				weight: 7,
			},
			{
				title: "2DWallpapers",
				url: "https://www.2dwallpapers.com",
				desc: "二次元高清壁纸，热门 IP 分类齐全",
				weight: 6,
			},
			{
				title: "搜图神器·次元导航",
				url: "http://www.soutushenqi.com/site",
				desc: "ACG 站点导航姬，一站式图库入口",
				weight: 5,
			},
			{
				title: "彼岸桌面",
				url: "https://www.netbian.com",
				desc: "免费高清壁纸下载平台",
				weight: 4,
			},
			{
				title: "极简壁纸",
				url: "https://bz.zzzmh.cn",
				desc: "号称国内最好的壁纸站，2K/4K/8K",
				weight: 3,
			},
		],
	},
	{
		id: "ai",
		name: "AI 工具",
		icon: "material-symbols:smart-toy-rounded",
		desc: "AI 助手与工具导航",
		weight: 80,
		items: [
			{
				title: "豆包",
				url: "https://www.doubao.com",
				desc: "字节跳动的国民级 AI 助手",
				weight: 10,
			},
			{
				title: "AIH 超级导航",
				url: "https://aih.zone",
				desc: "3000+ AI 工具导航平台",
				weight: 9,
			},
			{
				title: "AIVSLY",
				url: "https://aivsly.com",
				desc: "250+ AI 工具，覆盖写作/绘画/视频/编程",
				weight: 8,
			},
			{
				title: "FutureTools",
				url: "https://futuretools.io",
				desc: "国外热门 AI 工具榜单",
				weight: 7,
			},
			{
				title: "There's An AI For That",
				url: "https://theresanaiforthat.com",
				desc: "12000+ 工具，按任务搜索",
				weight: 6,
			},
		],
	},
	{
		id: "tools",
		name: "工具",
		icon: "material-symbols:build-outline-rounded",
		desc: "顺手的在线小工具",
		weight: 80,
		items: [
			{
				title: "TinyPNG",
				url: "https://tinypng.com",
				desc: "在线压缩 PNG / JPEG 图片",
				weight: 10,
			},
			{
				title: "Squoosh",
				url: "https://squoosh.app",
				desc: "Google 出品的图片压缩与格式转换",
				weight: 9,
			},
			{
				title: "Carbon",
				url: "https://carbon.now.sh",
				desc: "把代码片段生成漂亮的图片",
				weight: 8,
			},
			{
				title: "remove.bg",
				url: "https://www.remove.bg",
				desc: "一键在线抠图去背景",
				weight: 7,
			},
			{
				title: "程序员的工具箱",
				url: "https://tool.lu",
				desc: "各类代码与格式转换小工具",
				weight: 6,
			},
			{
				title: "JSON 在线解析",
				url: "https://www.sojson.com",
				desc: "JSON 格式化、校验与转义",
				weight: 5,
			},
		],
	},
	{
		id: "software",
		name: "软件下载",
		icon: "material-symbols:download-rounded",
		desc: "安全可靠的软件获取渠道",
		weight: 70,
		items: [
			{
				title: "SourceForge",
				url: "https://sourceforge.net",
				desc: "老牌开源软件下载平台",
				weight: 10,
			},
			{
				title: "FossHub",
				url: "https://www.fosshub.com",
				desc: "无广告、纯净的开源软件分发站",
				weight: 9,
			},
			{
				title: "F-Droid",
				url: "https://f-droid.org",
				desc: "只收录免费开源软件的安卓商店",
				weight: 8,
			},
			{
				title: "华军软件园",
				url: "https://www.onlinedown.net",
				desc: "老牌绿色免费软件下载站",
				weight: 7,
			},
			{
				title: "AlternativeTo",
				url: "https://alternativeto.net",
				desc: "找某款软件的替代品神器",
				weight: 6,
			},
		],
	},
	{
		id: "nav",
		name: "导航大全",
		icon: "material-symbols:explore-rounded",
		desc: "帮你发现更多好网站的导航站",
		weight: 60,
		items: [
			{
				title: "bimiseek",
				url: "https://bimiseek.com",
				desc: "清爽实用的综合导航站，无广告弹窗",
				weight: 10,
			},
			{
				title: "泽雷导航",
				url: "https://nav.zerow.cn",
				desc: "开发者网址导航，工具素材齐全",
				weight: 9,
			},
			{
				title: "程序猿导航",
				url: "http://navi.lwons.com",
				desc: "编程相关优秀网址分享",
				weight: 8,
			},
			{
				title: "Tbox 导航",
				url: "https://www.tboxn.com",
				desc: "只收录优质在线工具的导航站",
				weight: 7,
			},
			{
				title: "优设导航",
				url: "https://hao.uisdc.com",
				desc: "设计师资源大全，图库/灵感/素材",
				weight: 6,
			},
			{
				title: "小森林导航",
				url: "https://xiao-senlin.com",
				desc: "收录几百个实用网站的资源导航",
				weight: 5,
			},
		],
	},
	{
		id: "resources",
		name: "资源",
		icon: "material-symbols:auto-stories-outline-rounded",
		desc: "文档、教程与阅读",
		weight: 50,
		items: [
			{
				title: "Firefly Docs",
				url: "https://docs-firefly.cuteleaf.cn",
				desc: "Firefly 主题模板文档",
				icon: "https://docs-firefly.cuteleaf.cn/logo.png",
				weight: 10,
			},
			{
				title: "夏夜流萤",
				url: "https://blog.cuteleaf.cn",
				desc: "飞萤之火自无梦的长夜亮起",
				weight: 9,
			},
			{
				title: "W3Schools",
				url: "https://www.w3schools.com",
				desc: "Web 开发入门教程，通俗易懂",
				weight: 8,
			},
			{
				title: "DevDocs",
				url: "https://devdocs.io",
				desc: "聚合所有主流语言的 API 文档",
				weight: 7,
			},
			{
				title: "虫部落",
				url: "https://www.chongbuluo.com",
				desc: "综合搜索引擎聚合平台",
				weight: 6,
			},
		],
	},
];
