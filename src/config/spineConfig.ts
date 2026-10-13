// Spine 看板娘配置（流萤）
// 组件与素材移植自 Firefly 主题（https://github.com/CuteLeaf/Firefly，MIT 协议）
// 流萤相关图片素材版权归《崩坏：星穹铁道》开发商米哈游所有，仅作个人博客装饰自用

export interface SpineModelConfig {
	enable: boolean;
	model: {
		path: string; // Spine 模型文件路径（.json）
		scale?: number;
		x?: number;
		y?: number;
	};
	position: {
		corner: "bottom-left" | "bottom-right" | "top-left" | "top-right";
		offsetX?: number;
		offsetY?: number;
	};
	size: {
		width: number;
		height: number;
	};
	interactive: {
		enabled: boolean;
		clickAnimations?: string[];
		clickMessages?: string[];
		messageDisplayTime?: number;
		idleAnimations?: string[];
		idleInterval?: number;
		// 空闲自动说话：每隔 idleMessageInterval 毫秒随机冒一句 idleMessages
		idleMessages?: string[];
		idleMessageInterval?: number;
	};
	responsive: {
		hideOnMobile: boolean;
		mobileBreakpoint: number;
	};
	zIndex: number;
	opacity: number;
}

export const spineModelConfig: SpineModelConfig = {
	enable: true,
	model: {
		path: "/pio/models/spine/firefly/1310.json",
		scale: 1.0,
		x: 0,
		y: 0,
	},
	position: {
		corner: "bottom-left",
		offsetX: 290, // NOIR 看板娘宽 280px，流萤紧挨其右侧并排
		offsetY: 0,
	},
	size: {
		width: 150,
		height: 180,
	},
	interactive: {
		enabled: true,
		clickAnimations: [
			"emoji_0",
			"emoji_1",
			"emoji_2",
			"emoji_3",
			"emoji_4",
			"emoji_5",
		],
		clickMessages: [
			"你好呀！我是流萤~",
			"今天也要加油哦！✨",
			"想要一起去看星空吗？🌟",
			"记得要好好休息呢~",
			"有什么想对我说的吗？💫",
			"让我们一起探索未知的世界吧！🚀",
			"每一颗星星都有自己的故事~⭐",
			"希望能带给你温暖和快乐！💖",
			"嗯？在找我吗～我在这里哦 (๑˃̵ᴗ˂̵)",
			"摸摸头的话，我会开心的哦～",
			"今天有好好吃饭吗？没有的话要乖乖去吃哦～",
			"诶嘿，被你发现啦～",
			"想陪你看番！好呀好呀～",
			"别太拼啦，劳逸结合才长久哦～",
			"想听我唱歌吗？下次唱给你听～♪",
			"流萤小姐说，要温柔地对待每一天～",
			"你看，窗外的天空今天也很好看呢～",
		],
		messageDisplayTime: 3000,
		idleAnimations: ["idle", "emoji_0", "emoji_1", "emoji_3", "emoji_4"],
		idleInterval: 8000,
		// 空闲自动说话：约 25 秒随机冒一句，让看板娘更「活」
		idleMessages: [
			"主人，欢迎回来～今天过得怎么样？",
			"我在看着你哦，认真的时候最帅啦～",
			"星星说，今天也是美好的一天呢～",
			"要不要休息一下，喝口水再继续呀？",
			"嘿嘿，偷偷告诉你，我最喜欢你了～",
			"记得按时吃饭，不然我会担心的～",
			"困了的话就去睡吧，我在这里守着你～",
			"今天的你，也辛苦啦～明天继续加油！",
			"想听故事吗？我来讲给你听～",
		],
		idleMessageInterval: 25000,
	},
	responsive: {
		hideOnMobile: true,
		mobileBreakpoint: 768,
	},
	zIndex: 998,
	opacity: 1.0,
};
