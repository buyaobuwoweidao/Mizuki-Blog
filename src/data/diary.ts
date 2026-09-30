// 日记数据配置
// 用于管理日记页面的数据

export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

// 示例日记数据
const diaryData: DiaryItem[] = [
	{
		id: 1,
		content:
			"博客终于上线啦！把流萤桌面换成了粉色的狐耳少女风，和整个小窝的气质好配。以后就在这里记录二次元日常了，请多关照！",
		date: "2026-09-30",
		location: "流萤小窝",
		mood: "兴奋",
		tags: ["博客", "开站"],
	},
	{
		id: 2,
		content:
			"补完了《莉可丽丝》，千束的笑容真的是治愈系天花板。顺手把番剧库的第一批条目填好了，慢慢补完计划启动！",
		date: "2026-09-28",
		location: "家里",
		mood: "开心",
		tags: ["番剧", "莉可丽丝"],
	},
	{
		id: 3,
		content:
			"今天给博客接上了音乐播放器，内置的四首日系翻唱循环了一下午。边听歌边改样式，时间一下子就没了。",
		date: "2026-09-26",
		location: "电脑前",
		mood: "专注",
		tags: ["音乐播放器", "博客"],
	},
	{
		id: 4,
		content:
			"晚上出门散步，路过商场看到星穹铁道的广告屏，是流萤！站在原地看了好久，路人可能以为我犯花痴了（本来就是）。",
		date: "2026-09-20",
		location: "商场",
		mood: "心动",
		tags: ["流萤", "星穹铁道"],
	},
];

// 获取日记列表（按时间倒序）
export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);

	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}

	return sortedData;
};

// 获取所有标签
export const getAllTags = () => {
	const tags = new Set<string>();
	for (const item of diaryData) {
		if (item.tags) {
			for (const tag of item.tags) {
				tags.add(tag);
			}
		}
	}
	return Array.from(tags).sort();
};
