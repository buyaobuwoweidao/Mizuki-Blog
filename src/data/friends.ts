// 友情链接数据配置
// 用于管理友情链接页面的数据

export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 推荐链接数据配置
// 用于管理友链页下方"推荐链接"栏目的数据
export interface RecommendLink {
	id: number;
	title: string;
	siteurl: string;
	desc: string;
	icon?: string;
}

// 推荐链接数据
// 说明：由站主主动推荐的实用链接/网站，与友链（互认）区分开
export const recommendLinksData: RecommendLink[] = [
	{
		id: 1,
		title: "谜页集 miyeji.cn",
		siteurl: "https://miyeji.cn/",
		desc: "网页互动解谜与互动游戏入口，浏览器直接玩、无需下载。从《呼兰爱情故事》到《小满》，一个个藏在网页里的小世界 (´▽`)ﾉ",
		icon: "/images/recommend/miyeji.svg",
	},
	{
		id: 2,
		title: "毛子游戏站 byrutgame",
		siteurl: "https://byrutgame.org/new/pcgames/",
		desc: "某只遥远的毛熊家的游戏资源站，懂的都懂嘻嘻~ 阿宅考古、补老游戏很顶用，但要记得支持正版哦 (｡•ᴗ-)✧",
		icon: "/images/recommend/byrut.svg",
	},
	{
		id: 3,
		title: "GitHub",
		siteurl: "https://github.com/buyaobuwoweidao",
		desc: "全世界最大的代码托管社区，也是站主的学习乐园——这个博客的不少本事都是从 GitHub 上的大佬们那里偷师来的 (ง •̀_•́)ง",
		icon: "/images/recommend/github.png",
	},
];

// 获取所有推荐链接数据
export function getRecommendLinksList(): RecommendLink[] {
	return recommendLinksData;
}

// 友情链接数据
// 说明：等待与各站点站长互相确认后，再逐一添加友链
export const friendsData: FriendItem[] = [];

// 获取所有友情链接数据
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
