// 打赏配置
// 管理打赏页面的展示内容，包括打赏方式和打赏者列表

export interface SponsorMethod {
	name: string;
	icon?: string;
	qrCode?: string;
	link?: string;
	description?: string;
	enabled: boolean;
}

export interface SponsorItem {
	name: string;
	avatar?: string;
	amount?: string;
	date?: string;
}

export interface SponsorConfig {
	title: string;
	description: string;
	usage: string;
	showSponsorsList: boolean;
	showButtonInPost: boolean;
	methods: SponsorMethod[];
	sponsors: SponsorItem[];
}

export const sponsorConfig: SponsorConfig = {
	// 页面标题，留空则使用 i18n 翻译
	title: "",

	// 页面描述文本，留空则使用 i18n 翻译
	description: "",

	// 打赏用途说明
	usage:
		"你的每一份心意都会化作我更新博客、收藏壁纸、分享二次元日常的动力 (｡･ω･｡) 感谢每一个支持我的小伙伴！",

	// 是否显示打赏者列表
	showSponsorsList: true,

	// 是否在文章详情页底部显示打赏按钮
	showButtonInPost: true,

	// 打赏方式列表
	methods: [
		{
			name: "支付宝",
			icon: "fa7-brands:alipay",
			qrCode: "",
			link: "",
			description: "使用支付宝扫码打赏 (´∀｀)",
			enabled: true,
		},
		{
			name: "微信",
			icon: "fa7-brands:weixin",
			qrCode: "",
			link: "",
			description: "使用微信扫码打赏 (｡•ᴗ•｡)",
			enabled: true,
		},
		{
			name: "爱发电",
			icon: "simple-icons:afdian",
			qrCode: "",
			link: "https://afdian.com/u/7c6750a2c6cf11f0921452540025c377",
			description: "通过爱发电平台打赏，支持月度赞助 (๑•̀ㅂ•́)و✧",
			enabled: true,
		},
	],

	// 打赏者列表（可选，有打赏后在这里记录）
	sponsors: [],
};
