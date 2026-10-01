// 游戏分享专区数据配置
// 用于管理"游戏分享"页面的数据

export interface GameItem {
	id: number;
	title: string;
	description: string;
	category: "mc" | "action" | "horror" | "mobile" | "other";
	status: "playing" | "cleared" | "dropped" | "want";
	rating?: number; // 个人评分 0-10
	tags: string[];
	featured?: boolean;
	note?: string;
}

// 游戏分享数据
export const gamesData: GameItem[] = [
	{
		id: 1,
		title: "我的世界 Minecraft",
		description:
			"从挖第一块木头到建起自己的小窝，MC 大概是我玩得最久的沙盒了。造房子、养村民、半夜被苦力怕炸家……都是回忆 (´▽｀)",
		category: "mc",
		status: "playing",
		rating: 10,
		tags: ["沙盒", "建造", "生存"],
		featured: true,
		note: "最喜欢开创造模式搭建筑，红石至今没学会（笑）",
	},
	{
		id: 2,
		title: "永劫无间",
		description:
			"经常玩胡桃，奶妈党永不认输！钩锁赶路+振刀博弈，和朋友开黑真的上头 (ง •̀_•́)ง",
		category: "action",
		status: "playing",
		rating: 8,
		tags: ["武侠", "大逃杀", "开黑"],
		featured: true,
		note: "胡桃天下第一！虽然经常被集火（泪）",
	},
	{
		id: 3,
		title: "王者荣耀",
		description:
			"从高中玩到现在的老游戏了，偶尔上线打两把。主打一个陪伴，输赢看淡 (´-ω-`)",
		category: "mobile",
		status: "playing",
		rating: 7,
		tags: ["MOBA", "手游", "开黑"],
	},
	{
		id: 4,
		title: "生化危机9：安魂曲",
		description:
			"今年通关的恐怖大作，里昂和格蕾丝的故事。恐怖氛围到位，就是流程有点拖 (´；ω；`)",
		category: "horror",
		status: "cleared",
		rating: 8,
		tags: ["恐怖", "卡普空", "单人"],
		featured: true,
		note: "详细评测在博客里，搜「安魂曲」就能看到",
	},
	{
		id: 5,
		title: "纸嫁衣系列",
		description:
			"国产民俗恐怖之光！从第一部玩到第九部《罗浮梦》，剧情越来越宏大，也真的很吓人 (；´Д`)",
		category: "horror",
		status: "playing",
		rating: 9,
		tags: ["国产", "民俗恐怖", "解谜"],
		featured: true,
		note: "喜欢昙露凝！相册里还收藏了她的图（害羞）",
	},
	{
		id: 6,
		title: "糖豆人 / 派对游戏们",
		description:
			"累了就玩点轻松的。和小伙伴一起挤来挤去、互相使坏，快乐就是这么简单 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
		category: "other",
		status: "playing",
		rating: 7,
		tags: ["派对", "休闲", "开黑"],
	},
	{
		id: 7,
		title: "一些恐怖独立游戏",
		description:
			"胆子不大但超爱看恐怖实况，自己也玩了不少独立恐怖游戏：层层恐惧、逃生、港诡实录……被吓到缩被窝也要玩 (´；ω；`)",
		category: "horror",
		status: "cleared",
		rating: 7,
		tags: ["独立", "恐怖", "心理"],
		note: "恐怖游戏爱好者，痛并快乐着",
	},
];

// 获取所有游戏数据
export function getGamesList(): GameItem[] {
	return gamesData;
}

// 获取精选游戏
export function getFeaturedGames(): GameItem[] {
	return gamesData.filter((g) => g.featured);
}

// 获取分类统计
export function getGameStats() {
	const total = gamesData.length;
	const playing = gamesData.filter((g) => g.status === "playing").length;
	const cleared = gamesData.filter((g) => g.status === "cleared").length;
	return { total, playing, cleared };
}
