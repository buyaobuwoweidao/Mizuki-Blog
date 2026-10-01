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
}

// 推荐链接数据
// 说明：由站主主动推荐的实用链接/网站，与友链（互认）区分开
export const recommendLinksData: RecommendLink[] = [];

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
