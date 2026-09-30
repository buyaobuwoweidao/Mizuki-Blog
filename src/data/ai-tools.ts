// 暂无数据，可在此处添加你自己的 AI 工具
// AI 工具数据配置

export type AIToolCategory =
	| "chat"
	| "coding"
	| "image"
	| "audio"
	| "video"
	| "writing"
	| "search"
	| "other";

export type AIToolFrequency =
	| "daily"
	| "weekly"
	| "occasional"
	| "experimental";

export type LocaleString = Partial<
	Record<"en" | "zh_CN" | "zh_TW" | "ja", string>
>;

export function getLocaleString(value: LocaleString, lang: string): string {
	return value[lang as keyof LocaleString] ?? value["en"] ?? "";
}

export interface AITool {
	id: string;
	name: string;
	description: LocaleString;
	icon: string;
	category: AIToolCategory;
	frequency: AIToolFrequency;
	url?: string;
	usage?: LocaleString;
	tags?: string[];
	color?: string;
}

// AI 工具数据
export const aiToolsData: AITool[] = [
	{
		id: "doubao",
		name: "豆包",
		description: {
			en: "All-round AI assistant for chat, writing and daily tasks",
			zh_CN: "全能 AI 助手，聊天、写作、日常问答都在用，也是帮我搭这个博客的得力帮手",
		},
		icon: "material-symbols:chat-bubble-outline",
		category: "chat",
		frequency: "daily",
		url: "https://www.doubao.com/",
		usage: {
			en: "Chat, writing, coding help",
			zh_CN: "聊天、写作、代码帮助",
		},
		tags: ["聊天", "写作", "助手"],
		color: "#4d8cff",
	},
	{
		id: "jimeng",
		name: "即梦 AI",
		description: {
			en: "AI image generation tool",
			zh_CN: "AI 绘画与图片生成工具，用来生成一些二次元风格的封面和素材",
		},
		icon: "material-symbols:image-outline",
		category: "image",
		frequency: "weekly",
		url: "https://jimeng.jianying.com/",
		usage: {
			en: "Generate covers and artworks",
			zh_CN: "生成封面和插画素材",
		},
		tags: ["AI绘画", "图片"],
		color: "#ff6b9d",
	},
	{
		id: "jianying",
		name: "剪映",
		description: {
			en: "Video editing app with AI features",
			zh_CN: "视频剪辑软件，自带 AI 字幕、AI 配音，剪番剧混剪和日常 Vlog 的主力工具",
		},
		icon: "material-symbols:movie",
		category: "video",
		frequency: "weekly",
		url: "https://www.capcut.cn/",
		usage: {
			en: "Edit videos with AI subtitles",
			zh_CN: "剪辑视频、自动字幕、AI 配音",
		},
		tags: ["剪辑", "视频"],
		color: "#ff4d6d",
	},
	{
		id: "copilot",
		name: "GitHub Copilot",
		description: {
			en: "AI pair programmer",
			zh_CN: "写代码时的 AI 结对编程助手，改博客样式和脚本时给的建议挺靠谱",
		},
		icon: "mdi:github",
		category: "coding",
		frequency: "occasional",
		url: "https://github.com/features/copilot",
		usage: {
			en: "Code assistance",
			zh_CN: "代码补全与建议",
		},
		tags: ["代码", "AI编程"],
		color: "#8957e5",
	},
];
