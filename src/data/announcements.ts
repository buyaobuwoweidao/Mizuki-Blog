// 公告数据配置
// 用于"公告"页与侧边栏公告栏

export interface AnnouncementItem {
	id: number;
	date: string; // 发布时间 YYYY-MM-DD
	content: string;
	pinned?: boolean; // 置顶
	important?: boolean; // 重要标记
}

export const announcementsData: AnnouncementItem[] = [
	{
		id: 1,
		date: "2026-10-01",
		content:
			"欢迎来到我的小窝～本站正在建设中，敬请期待！ (｡•̀ᴗ-)✧ 感谢你的光临，随手逛逛吧～",
		pinned: true,
		important: true,
	},
	{
		id: 2,
		date: "2026-10-01",
		content:
			"🎬 新增视频注入功能：文章里可以直接嵌入 B 站视频啦！第一篇示范《剑星：血雨预告》已上线，快去围观 (≧▽≦)",
	},
	{
		id: 3,
		date: "2026-10-01",
		content:
			"📢 公告栏升级：新增专门的公告页面，以后有什么大事小事都会在这里同步～",
	},
	{
		id: 4,
		date: "2026-09-30",
		content:
			"🦋 换上新 Logo 啦！方形黑蝴蝶图标，和流萤主题更搭了（笑）",
	},
	{
		id: 5,
		date: "2026-09-25",
		content:
			"✨ 博客新功能预告：留言板、动态页、书签导航都在路上，正在一点点缝进来～",
	},
	{
		id: 6,
		date: "2026-10-02",
		content:
			"🧱 本站已接入「MC 专区」！收录了站长多年收集的 120+ 个 MC 网站（整合包/地图/皮肤/工具/社区），并新增「作弊客户端」独立板块（仅供学习交流，站主不推荐使用 (｡•̀ᴗ-)✧）。特别致敬：整理内容参考自 mcisee.top 等社区导航站与各位 MC 作者，感谢他们的分享！若您认为本站收录的内容侵犯了您的权益，请联系站长删除，侵删致歉 (人´∀｀) 多谢各位的包容与支持～",
		important: true,
	},
];

// 获取所有公告（按时间倒序）
export function getAnnouncements(): AnnouncementItem[] {
	return [...announcementsData].sort((a, b) => b.id - a.id);
}

// 获取置顶公告
export function getPinnedAnnouncements(): AnnouncementItem[] {
	return announcementsData.filter((a) => a.pinned);
}
