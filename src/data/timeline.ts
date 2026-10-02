import type { TimelineItem } from "../components/features/timeline/types";

export const timelineData: TimelineItem[] = [
	{
		id: "anime-entry",
		title: "入坑二次元",
		description:
			"因为一部番剧彻底掉进二次元的坑，从此 B 站常驻、收藏夹爆满。",
		type: "achievement",
		startDate: "2022-03",
		icon: "mdi:television-classic",
		color: "#ff6b9d",
		featured: true,
	},
	{
		id: "bilibili-regular",
		title: "成为 B 站常驻居民",
		description:
			"从追番到混剪，从弹幕到专栏，刷 B 站成了每天的固定项目。",
		type: "achievement",
		startDate: "2022-09",
		icon: "mdi:television-play",
		color: "#fb7299",
	},
	{
		id: "desktop-setup",
		title: "开始折腾桌面美化",
		description:
			"第一次接触 Rainmeter 与 Wallpaper Engine，从此桌面美化一发不可收拾。",
		type: "project",
		startDate: "2023-06",
		icon: "mdi:monitor-screenshot",
		color: "#7c4dff",
		skills: ["Rainmeter", "Photoshop"],
	},
	{
		id: "first-comiket",
		title: "第一次去漫展",
		description:
			"人生第一次逛漫展，见到了各种精致 cos，也买到了第一批周边。",
		type: "achievement",
		startDate: "2024-05",
		icon: "mdi:star-four-points",
		color: "#ff9f45",
		featured: true,
	},
	{
		id: "firefly-desktop",
		title: "完成流萤主题桌面",
		description:
			"历时两个月，把整个桌面打造成了星穹铁道·流萤主题的粉色小窝。",
		type: "project",
		startDate: "2026-06",
		endDate: "2026-08",
		icon: "mdi:desktop-classic",
		color: "#ff5d8f",
		skills: ["Rainmeter", "Photoshop", "Wallpaper Engine"],
		achievements: ["壁纸、皮肤、图标全套自制"],
	},
	{
		id: "blog-launch",
		title: "流萤小窝博客上线",
		description:
			"基于 Astro + Mizuki 主题搭建个人博客，部署到 GitHub Pages，正式开始记录二次元日常。",
		type: "project",
		startDate: "2026-09",
		icon: "mdi:web",
		color: "#4dd0e1",
		links: [
			{
				name: "访问博客",
				url: "https://buyaobuwoweidao.github.io/Mizuki-Blog/",
				type: "website",
			},
			{
				name: "源码仓库",
				url: "https://github.com/buyaobuwoweidao/Mizuki-Blog",
				type: "project",
			},
		],
		skills: ["Astro", "TypeScript", "Git"],
		achievements: ["留言板上线", "番剧库开张", "站内编辑器接入"],
		featured: true,
	},
	{
		id: "theme-migration",
		title: "流萤主题全面移植",
		description:
			"把流萤风格的壁纸模式、樱花特效、Spine 看板娘、主题曲播放器和方形黑蝴蝶 Logo 一点点缝进小窝，二次元氛围直接拉满。",
		type: "project",
		startDate: "2026-09",
		endDate: "2026-10",
		icon: "mdi:butterfly",
		color: "#ff5d8f",
		skills: ["Firefly 主题移植", "Spine 看板娘"],
		achievements: ["壁纸模式上线", "樱花特效", "看板娘入驻", "主题曲循环播放"],
	},
	{
		id: "dynamic-guestbook",
		title: "动态页与留言板开张",
		description:
			"移植了动态流和留言板：日常碎碎念随时更新，访客也能在小窝里留下自己的脚印。",
		type: "project",
		startDate: "2026-09",
		icon: "mdi:message-text",
		color: "#ff9f45",
		links: [
			{
				name: "看看动态",
				url: "https://buyaobuwoweidao.github.io/Mizuki-Blog/dynamic/",
				type: "website",
			},
			{
				name: "留言板",
				url: "https://buyaobuwoweidao.github.io/Mizuki-Blog/guestbook/",
				type: "website",
			},
		],
	},
	{
		id: "media-posts",
		title: "文章也能直接看视频了",
		description:
			"给博客接入了视频注入能力，文章里能直接嵌 B 站视频——追番感想、游戏预告都能边看边聊。",
		type: "project",
		startDate: "2026-09",
		icon: "mdi:play-circle",
		color: "#fb7299",
		skills: ["Astro", "B 站嵌入"],
	},
	{
		id: "games-hub",
		title: "游戏分享专区开张",
		description:
			"整理了常玩的 37 款游戏，按单机、恐怖、动作、米哈游、网易、腾讯等 9 个分类归档，每款都写上了入坑理由。",
		type: "achievement",
		startDate: "2026-10",
		icon: "mdi:gamepad-variant",
		color: "#7c4dff",
		links: [
			{
				name: "去逛游戏分享",
				url: "https://buyaobuwoweidao.github.io/Mizuki-Blog/games/",
				type: "website",
			},
		],
		achievements: ["37 款游戏", "9 大分类"],
	},
	{
		id: "mc-zone",
		title: "我的世界专区上线",
		description:
			"收藏了 120+ 个 MC 相关网站：整合包、地图、皮肤、工具、社区导航一网打尽，还配了整合包推荐文章。",
		type: "project",
		startDate: "2026-10",
		icon: "mdi:cube",
		color: "#4dd0e1",
		skills: ["MC 整合包", "资源导航"],
		links: [
			{
				name: "进入 MC 专区",
				url: "https://buyaobuwoweidao.github.io/Mizuki-Blog/mc/",
				type: "website",
			},
		],
		achievements: ["120+ 网站收录", "分类导航"],
	},
	{
		id: "content-creating",
		title: "内容创作季",
		description:
			"一口气写了国庆祝福、那年那兔那些事、生化危机 9 评测、剑星预告解读、艾希续作众筹、深夜碎碎念……博客终于像个真正的小窝了。",
		type: "achievement",
		startDate: "2026-10",
		icon: "mdi:notebook-edit",
		color: "#ff6b9d",
		featured: true,
	},
];
