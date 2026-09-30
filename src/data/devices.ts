// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = Record<string, Device[]> & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	电脑: [
		{
			name: "主力电脑",
			image: "/assets/home/default-logo.webp",
			specs: "Windows 桌面 · 日常主力",
			description:
				"平时写博客、剪视频、打游戏都靠它，桌面上常年开着流萤主题的雨滴皮肤。",
			link: "#",
		},
	],
	手机: [
		{
			name: "日常手机",
			image: "/assets/anime/lkls.webp",
			specs: "安卓 · 追番刷 B 站",
			description:
				"上下班路上刷番剧、逛贴吧、看同人图的主力设备，壁纸是流萤。",
			link: "#",
		},
	],
	其他: [
		{
			name: "耳机",
			image: "/assets/music/cover/dazbee.webp",
			specs: "无线 · 听歌专用",
			description:
				"听日系翻唱和番剧 OST 用的，写博客的时候没有它坐不住。",
			link: "#",
		},
	],
};
