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

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "WanForY",
		imgurl: "/assets/desktop-banner/wanfory-bg.jpg",
		desc: "Love is my oath. 粉色狐耳少女的温柔小站",
		siteurl: "https://blog.wanfory.top/",
		tags: ["二次元", "博客"],
	},
	{
		id: 2,
		title: "星辉的宝藏之地",
		imgurl: "https://www.xinghuisama.top/favicon.ico",
		desc: "XingHuiSama の 宝藏之地，收藏一切有趣的东西",
		siteurl: "https://www.xinghuisama.top/",
		tags: ["宝藏", "收藏"],
	},
	{
		id: 3,
		title: "Mizuki 主题官网",
		imgurl: "https://mizuki.mysqil.com/favicon.ico",
		desc: "本站所用主题的官方文档与演示站",
		siteurl: "https://mizuki.mysqil.com",
		tags: ["主题", "Astro"],
	},
];

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
