// 游戏分享专区数据配置
// 用于管理"游戏分享"页面的数据

export interface GameItem {
	id: number;
	title: string;
	description: string;
	category:
		| "mc"
		| "single"
		| "horror"
		| "action"
		| "mihoyo"
		| "netease"
		| "tencent"
		| "mobile"
		| "other";
	status: "playing" | "cleared" | "dropped" | "want";
	rating?: number; // 个人评分 0-10
	tags: string[];
	featured?: boolean;
	note?: string;
	link?: string; // 可选：跳转到专区的链接（相对路径或完整URL）
}

// 游戏分享数据
export const gamesData: GameItem[] = [
	// ============ 我的世界 ============
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
		link: "/mc/",
	},

	// ============ 单机大作 ============
	{
		id: 2,
		title: "生化危机9：安魂曲",
		description:
			"今年通关的恐怖大作，里昂和格蕾丝的故事。恐怖氛围到位，就是流程有点拖 (´；ω；`)",
		category: "single",
		status: "cleared",
		rating: 8,
		tags: ["恐怖", "卡普空", "单人"],
		featured: true,
		note: "详细评测在博客里，搜「安魂曲」就能看到",
	},
	{
		id: 3,
		title: "生化危机全系列",
		description:
			"从 4 到 8 代一路玩过来的卡普空老粉，重制版也没落下。从学生时代玩到毕业，每一代都通关了 (•̀ᴗ•́)و",
		category: "single",
		status: "cleared",
		rating: 9,
		tags: ["卡普空", "恐怖", "系列"],
		featured: true,
		note: "除了特别老的几代画质劝退，其余全通关",
	},
	{
		id: 4,
		title: "实质存在 Pragmata",
		description:
			"卡普空那个跳票跳了好久的科幻新作！太空、机器人少女、月球基地 2069……画面很有味道，期待值拉满 (´▽`)ﾉ",
		category: "single",
		status: "want",
		rating: 8,
		tags: ["卡普空", "科幻", "期待"],
		note: "等了这么多年，快发售吧（双手合十）",
	},
	{
		id: 5,
		title: "黑神话：悟空",
		description:
			"国产首个 3A 大作，2024 年火遍全网的那只猴子！画面、音乐、剧情全是顶级水准，谁说中国做不出世界级单机 (๑•̀ㅂ•́)و✧",
		category: "single",
		status: "want",
		rating: 9,
		tags: ["国产", "3A", "西游记", "魂系"],
		note: "天命人集合！国产之光必须支持",
	},
	{
		id: 6,
		title: "赛博朋克2077",
		description:
			"夜之城的霓虹与雨水，银手的大衣和枪。经历过发售翻车到口碑逆袭的传奇作品，DLC《往日之影》更是封神 (´▽`)",
		category: "single",
		status: "want",
		rating: 8,
		tags: ["开放世界", "赛博朋克", "RPG"],
	},
	{
		id: 7,
		title: "艾尔登法环",
		description:
			"交界地的每一寸土地都藏着故事。魂系开放世界天花板，打完一周目又开了二周目——受苦，但根本停不下来 (ง •̀_•́)ง",
		category: "single",
		status: "want",
		rating: 9,
		tags: ["魂系", "开放世界", "宫崎英高"],
	},
	{
		id: 8,
		title: "怪物猎人：世界",
		description:
			"和朋友一起狩猎的快乐你想象不到！从被大贼龙追着跑，到单挑灭尽龙，每一场狩猎都是成长的勋章 (≧▽≦)",
		category: "single",
		status: "want",
		rating: 8,
		tags: ["共斗", "狩猎", "联机"],
	},
	{
		id: 9,
		title: "双人成行",
		description:
			"和好朋友一起玩的感情催化剂（也可能友尽）。关卡设计脑洞大开，从玩具屋到树屋再到雪山，一路吵一路笑 (´▽`)ﾉ",
		category: "single",
		status: "want",
		rating: 8,
		tags: ["双人", "合作", "解谜"],
	},
	{
		id: 10,
		title: "泰拉瑞亚",
		description:
			"2D 版我的世界，但比 MC 更肝（笑）。挖矿、打 boss、建房子，从地下挖到天上，一千个小时只是入门 (・ω・)ノ",
		category: "single",
		status: "want",
		rating: 8,
		tags: ["沙盒", "2D", "探索"],
	},
	{
		id: 11,
		title: "星露谷物语",
		description:
			"种田、钓鱼、挖矿、谈恋爱……像素风养老神作。工作累了就回星露谷当个快乐农场主，治愈力满格 (´▽｀)",
		category: "single",
		status: "want",
		rating: 8,
		tags: ["种田", "像素", "治愈"],
	},
	{
		id: 12,
		title: "GTA 5",
		description:
			"开放世界标杆中的标杆。洛圣都的日落、抢劫任务的肾上腺素、还有线上模式的离谱玩法——玩了十年还能玩 (｡•̀ᴗ-)✧",
		category: "single",
		status: "want",
		rating: 7,
		tags: ["开放世界", "R星", "经典"],
	},

	// ============ 恐怖 ============
	{
		id: 13,
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
		id: 14,
		title: "一些恐怖独立游戏",
		description:
			"胆子不大但超爱看恐怖实况，自己也玩了不少独立恐怖游戏：层层恐惧、逃生、港诡实录……被吓到缩被窝也要玩 (´；ω；`)",
		category: "horror",
		status: "cleared",
		rating: 7,
		tags: ["独立", "恐怖", "心理"],
		note: "恐怖游戏爱好者，痛并快乐着",
	},
	{
		id: 15,
		title: "寂静岭系列",
		description:
			"2025 新年在笔记本上通的系列。雾都、三角头、里世界的压迫感至今难忘——玩的时候是真的手心冒汗 (´；ω；`)",
		category: "horror",
		status: "cleared",
		rating: 9,
		tags: ["恐怖", "心理", "经典"],
		featured: true,
		note: "最喜欢归乡的三角头，压迫感拉满",
	},
	{
		id: 16,
		title: "黎明杀机",
		description:
			"四人躲猫猫 vs 一个屠夫的极限拉扯。和朋友开黑当人类被追得满图跑，偶尔也当一把屠夫扬眉吐气 (´▽`)",
		category: "horror",
		status: "want",
		rating: 7,
		tags: ["多人", "非对称", "恐怖"],
	},
	{
		id: 17,
		title: "恐鬼症 Phasmophobia",
		description:
			"和队友一起拿着设备进鬼屋抓鬼，结果自己被吓得疯狂尖叫。恐怖程度取决于队友的叫声分贝 (；´Д`)",
		category: "horror",
		status: "want",
		rating: 7,
		tags: ["合作", "恐怖", "抓鬼"],
	},
	{
		id: 18,
		title: "生化危机2 重制版",
		description:
			"重制巅峰之作！暴君的脚步声响在走廊里的那一刻，心跳直接拉满。警局大厅的音乐一响，鸡皮疙瘩就起来了 (´；ω；`)",
		category: "horror",
		status: "cleared",
		rating: 9,
		tags: ["卡普空", "重制", "恐怖"],
		note: "里昂和克莱尔双线都通了，值得二刷",
	},

	// ============ 动作竞技 ============
	{
		id: 19,
		title: "糖豆人 / 派对游戏们",
		description:
			"累了就玩点轻松的。和小伙伴一起挤来挤去、互相使坏，快乐就是这么简单 (ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
		category: "action",
		status: "playing",
		rating: 7,
		tags: ["派对", "休闲", "开黑"],
	},
	{
		id: 20,
		title: "剑星 Stellar Blade",
		description:
			"近几年最爱的动作游戏！伊芙太飒了，战斗爽到极致、美术美到极致。最期待续作《血雨》，已经蹲预告蹲到熬夜 (≧▽≦)",
		category: "action",
		status: "cleared",
		rating: 10,
		tags: ["动作", "Shift Up", "伊芙"],
		featured: true,
		note: "愿伊芙的剑永远锋利！血雨快发售吧（嚎）",
	},
	{
		id: 21,
		title: "CS2 / CS:GO",
		description:
			"从 CS:GO 一路玩到 CS2 的老玩家了。rush B 的青春、沙漠二的老地方、被狙爆头的一瞬间——FPS 的启蒙与归宿 (ง •̀_•́)ง",
		category: "action",
		status: "playing",
		rating: 8,
		tags: ["FPS", "电竞", "经典"],
		featured: true,
		note: "白给是常态，快乐也是常态",
	},
	{
		id: 22,
		title: "只狼：影逝二度",
		description:
			"宫崎英高的刀。打铁声一响，手就出汗——但当你终于砍下最终 boss 的人头时，那种成就感无可替代 (≧▽≦)",
		category: "action",
		status: "want",
		rating: 8,
		tags: ["魂系", "动作", "宫崎英高"],
	},

	// ============ 米哈游 ============
	{
		id: 23,
		title: "崩坏：星穹铁道",
		description:
			"开拓者集合！回合制也能做出花来，剧情、音乐、角色全都在线。最喜欢的角色当然是流萤——机甲少女谁顶得住啊 (´▽`)ﾉ",
		category: "mihoyo",
		status: "playing",
		rating: 9,
		tags: ["米哈游", "回合制", "二次元"],
		featured: true,
		note: "流萤天下第一！博客的整个主题都是她（笑）",
	},
	{
		id: 24,
		title: "原神",
		description:
			"开放世界二次元天花板。从蒙德到须弥再到枫丹，每张地图都是视觉盛宴。偶尔回提瓦特大陆看看风景，心情都会变好 (´▽｀)",
		category: "mihoyo",
		status: "want",
		rating: 8,
		tags: ["米哈游", "开放世界", "二次元"],
	},
	{
		id: 25,
		title: "绝区零",
		description:
			"米哈游的都市动作新作！新艾利都的霓虹街头、邦布、走格子战斗，风格化拉满。绳匠们，出发啦 (๑•̀ㅂ•́)و✧",
		category: "mihoyo",
		status: "want",
		rating: 7,
		tags: ["米哈游", "动作", "都市"],
	},
	{
		id: 26,
		title: "崩坏3",
		description:
			"米哈游的起点，无数舰长的青春。琪亚娜、芽衣、布洛妮娅……那时候的感动，现在想起来还是满满的 (´；ω；`)",
		category: "mihoyo",
		status: "want",
		rating: 6,
		tags: ["米哈游", "动作", "情怀"],
	},

	// ============ 网易 ============
	{
		id: 27,
		title: "永劫无间",
		description:
			"经常玩胡桃，奶妈党永不认输！钩锁赶路+振刀博弈，和朋友开黑真的上头 (ง •̀_•́)ง",
		category: "netease",
		status: "playing",
		rating: 8,
		tags: ["武侠", "大逃杀", "开黑"],
		featured: true,
		note: "胡桃天下第一！虽然经常被集火（泪）",
	},
	{
		id: 28,
		title: "蛋仔派对",
		description:
			"圆滚滚的蛋仔们挤在一起，跑酷、闯关、互相使坏。年轻人的第一款派对游戏？不，是所有人的快乐源泉 (ﾉ◕ヮ◕)ﾉ",
		category: "netease",
		status: "want",
		rating: 6,
		tags: ["派对", "休闲", "手游"],
	},
	{
		id: 29,
		title: "第五人格",
		description:
			"非对称对抗的经典之作。监管者与求生者的猫鼠游戏，和朋友开黑当求生者，被追的时候真的会尖叫 (；´Д`)",
		category: "netease",
		status: "want",
		rating: 7,
		tags: ["非对称", "恐怖", "开黑"],
	},
	{
		id: 30,
		title: "逆水寒",
		description:
			"武侠 MMO 的代表作。会呼吸的江湖、精美的国风场景，喜欢古风武侠的玩家基本都绕不开它 (´▽`)",
		category: "netease",
		status: "want",
		rating: 6,
		tags: ["MMO", "武侠", "国风"],
	},
	{
		id: 31,
		title: "阴阳师",
		description:
			"网易二次元的招牌。抽卡、养成、御魂，痒痒鼠的快乐与痛苦都在这里。当年的 SSR 梦还记得吗 (´▽｀)",
		category: "netease",
		status: "want",
		rating: 6,
		tags: ["二次元", "回合制", "抽卡"],
	},

	// ============ 腾讯 ============
	{
		id: 32,
		title: "王者荣耀",
		description:
			"从高中玩到现在的老游戏了，偶尔上线打两把。主打一个陪伴，输赢看淡 (´-ω-`)",
		category: "tencent",
		status: "playing",
		rating: 7,
		tags: ["MOBA", "手游", "开黑"],
	},
	{
		id: 33,
		title: "和平精英",
		description:
			"吃鸡手游的老大哥。和朋友四排跳伞、搜装备、决赛圈伏地魔——大吉大利，今晚吃鸡 (≧▽≦)",
		category: "tencent",
		status: "want",
		rating: 6,
		tags: ["吃鸡", "射击", "手游"],
	},
	{
		id: 34,
		title: "金铲铲之战",
		description:
			"云顶之弈的手游版。不用操作手速，全靠脑子和运气。一把二十分钟，摸鱼神器（不是） (´▽`)",
		category: "tencent",
		status: "want",
		rating: 6,
		tags: ["自走棋", "策略", "手游"],
	},
	{
		id: 35,
		title: "无畏契约 VALORANT",
		description:
			"拳头的 FPS 新秀，国服开服后热度一路飙升。技能+枪法的新颖组合，CS 玩家上手毫无压力 (ง •̀_•́)ง",
		category: "tencent",
		status: "want",
		rating: 7,
		tags: ["FPS", "电竞", "技能"],
	},
	{
		id: 36,
		title: "英雄联盟",
		description:
			"MOBA 常青树，十多年了还是那么多人玩。和朋友开黑上分、无限火力快乐一把，青春的代名词 (´▽`)",
		category: "tencent",
		status: "want",
		rating: 7,
		tags: ["MOBA", "PC", "电竞"],
	},

	// ============ 手游 ============
	{
		id: 37,
		title: "明日方舟",
		description:
			"塔防之光！罗德岛的博士们集合。玩法硬核、剧情优秀，美术风格独树一帜，是手游里少有的「做减法」佳作 (´▽｀)",
		category: "mobile",
		status: "want",
		rating: 6,
		tags: ["塔防", "策略", "二次元"],
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
