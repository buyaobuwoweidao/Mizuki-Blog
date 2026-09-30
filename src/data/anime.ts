// 本地番剧数据配置
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "莉可丽丝",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/lkls.webp",
		description: "咖啡厅的日常与特工的战斗，千束的笑容是最棒的治愈",
		episodes: "12 话",
		year: "2022",
		genre: ["动作", "轻百合"],
		studio: "A-1 Pictures",
		link: "https://www.bilibili.com/bangumi/media/md28338623",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2022-07",
		endDate: "2022-09",
	},
	{
		title: "飙速宅男",
		status: "watching",
		rating: 9.5,
		cover: "/assets/anime/rynh.webp",
		description: "废柴少年成长为车队王牌的热血骑行物语",
		episodes: "12 话",
		year: "2015",
		genre: ["运动", "热血"],
		studio: "Nexus",
		link: "https://www.bilibili.com/bangumi/media/md2590",
		progress: 8,
		totalEpisodes: 12,
		startDate: "2015-07",
		endDate: "2015-09",
	},
	{
		title: "恋爱小行星",
		status: "watching",
		rating: 9.2,
		cover: "/assets/anime/laxxx.webp",
		description: "天文部少女们仰望星空，追逐小行星的青春物语",
		episodes: "12 话",
		year: "2020",
		genre: ["日常", "治愈"],
		studio: "动画工房",
		link: "https://www.bilibili.com/bangumi/media/md28224128",
		progress: 5,
		totalEpisodes: 12,
		startDate: "2020-01",
		endDate: "2020-03",
	},
	{
		title: "请问您今天要来点兔子吗",
		status: "completed",
		rating: 9.0,
		cover: "/assets/anime/tz1.webp",
		description: "智乃与心爱们的咖啡店日常，治愈系萌豚饲料（无贬义）",
		episodes: "12 话",
		year: "2014",
		genre: ["日常", "治愈"],
		studio: "WHITE FOX",
		link: "https://www.bilibili.com/bangumi/media/md2762",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2014-04",
		endDate: "2014-06",
	},
	{
		title: "魔法少女的秘密",
		status: "planned",
		rating: 9.0,
		cover: "/assets/anime/cmmn.webp",
		description: "Muli Muli！魔法少女的欢乐日常",
		episodes: "12 话",
		year: "2024",
		genre: ["日常", "治愈", "魔法"],
		studio: "C2C",
		link: "https://www.bilibili.com/bangumi/media/md26625039",
		progress: 0,
		totalEpisodes: 12,
		startDate: "2025-07",
		endDate: "2025-10",
	},
];

export default localAnimeList;
