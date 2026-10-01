// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	visitUrl?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	showImage?: boolean;
}

export const projectsData: Project[] = [
	{
		id: "mizuki-blog",
		title: "流萤小窝 · Mizuki 二次元博客",
		description:
			"基于 Astro 与 Mizuki 主题打造的二次元个人博客：动态页、留言板、公告中心、视频注入、密码文章、番剧库、书签导航、流萤相册与看板娘一应俱全，部署在 GitHub Pages。",
		image: "/assets/projects/mizuki.webp",
		category: "web",
		techStack: ["Astro", "TypeScript", "Tailwind", "Decap CMS", "Svelte"],
		status: "completed",
		liveDemo: "https://buyaobuwoweidao.github.io/Mizuki-Blog/",
		sourceCode: "https://github.com/buyaobuwoweidao/Mizuki-Blog",
		visitUrl: "https://buyaobuwoweidao.github.io/Mizuki-Blog/",
		startDate: "2026-09",
		endDate: "2026-10",
		featured: true,
		tags: ["博客", "二次元", "Astro"],
		showImage: true,
	},
	{
		id: "firefly-fusion",
		title: "火萤主题融合计划",
		description:
			"把 CuteLeaf/Firefly 主题演示站的功能一点不剩地缝进小窝：动态页、留言板、公告中心、书签导航、看板娘、视频注入、壁纸模式——正在一件件搬回家 (≧▽≦)",
		image: "",
		category: "web",
		techStack: ["Astro", "Svelte", "GitHub Pages"],
		status: "in-progress",
		startDate: "2026-10",
		tags: ["Firefly", "主题融合", "进行中"],
		showImage: false,
	},
	{
		id: "firefly-desktop",
		title: "流萤主题桌面美化",
		description:
			"围绕星穹铁道·流萤配色设计的 Windows 桌面美化方案：壁纸、雨滴皮肤、图标与开机动画全套整合，粉紫渐变主色调。",
		image: "",
		category: "desktop",
		techStack: ["Rainmeter", "Wallpaper Engine", "Photoshop"],
		status: "completed",
		startDate: "2026-06",
		endDate: "2026-08",
		featured: true,
		tags: ["桌面美化", "流萤", "Rainmeter"],
		showImage: false,
	},
	{
		id: "anime-music-dock",
		title: "二次元音乐悬浮播放器",
		description:
			"为博客接入的悬浮音乐播放器，内置四首日系翻唱曲目，支持播放列表、随机与循环切换。",
		image: "",
		category: "web",
		techStack: ["Svelte", "Astro", "本地音频"],
		status: "completed",
		startDate: "2026-09",
		tags: ["音乐播放器", "Svelte"],
		showImage: false,
	},
	{
		id: "friends-verse",
		title: "友链宇宙 · 友链聚合计划",
		description:
			"打算把二次元圈子的好朋友们聚到一起：互换友链、互相串门，做一个属于同好们的链接聚合页。",
		image: "",
		category: "web",
		techStack: ["Astro", "Markdown"],
		status: "planned",
		startDate: "2026-10",
		tags: ["友链", "计划中"],
		showImage: false,
	},
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter((p) => p.status === "completed").length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};
