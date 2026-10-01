// 书签导航配置类型（移植自 Firefly 主题）

// 单个书签条目
export interface BooknavItem {
	// 书签标题（必填）
	title: string;
	// 书签地址（必填）
	url: string;
	// 书签描述（可选）
	desc?: string;
	// 图标（可选）：astro-icon 图标名 / 图片 URL / 本地图片路径 / 留空自动获取 favicon
	icon?: string;
	// 权重（可选），越大越靠前
	weight?: number;
	// 是否启用（可选，默认 true）
	enabled?: boolean;
}

// 书签分组
export interface BooknavGroup {
	// 分组 ID（必填，用于锚点跳转）
	id: string;
	// 分组名称（必填）
	name: string;
	// 分组图标（可选，astro-icon 图标名）
	icon?: string;
	// 分组描述（可选）
	desc?: string;
	// 分组权重（可选），越大越靠前
	weight?: number;
	// 是否启用（可选，默认 true）
	enabled?: boolean;
	// 分组内书签
	items: BooknavItem[];
}

// favicon 自动获取配置
export interface BooknavFaviconConfig {
	// 是否自动获取目标站点 favicon（默认 true）
	enabled: boolean;
	// favicon 接口地址，{domain} 为占位符
	// 例如：https://a.favicon.im/{domain}
	api: string;
}

// 书签导航页面配置
export interface BooknavPageConfig {
	// 页面标题，留空则使用 i18n 翻译
	title?: string;
	// 页面描述，留空则使用 i18n 翻译
	description?: string;
	// favicon 自动获取配置
	favicon: BooknavFaviconConfig;
}
