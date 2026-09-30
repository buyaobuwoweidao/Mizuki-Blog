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
];
