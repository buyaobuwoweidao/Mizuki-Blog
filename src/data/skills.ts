// Skill data configuration file
// Used to manage data for the skill display page

export interface Skill {
	id: string;
	name: string;
	description: string;
	icon: string; // Iconify icon name
	category: "frontend" | "backend" | "database" | "tools" | "other";
	level: "beginner" | "intermediate" | "advanced" | "expert";
	experience: {
		years: number;
		months: number;
	};
	projects?: string[]; // Related project IDs
	certifications?: string[];
	color?: string; // Skill card theme color
}

export const skillsData: Skill[] = [
	{
		id: "html-css",
		name: "HTML / CSS",
		description:
			"能写干净的语义化结构与响应式布局，日常折腾博客样式的主力技能。",
		icon: "vscode-icons:file-type-html",
		category: "frontend",
		level: "intermediate",
		experience: { years: 1, months: 6 },
		projects: ["mizuki-blog"],
		color: "#e34f26",
	},
	{
		id: "astro",
		name: "Astro 框架",
		description:
			"用 Astro 搭建并二次定制本站，熟悉组件、内容集合与部署流程。",
		icon: "devicon:astro",
		category: "frontend",
		level: "intermediate",
		experience: { years: 0, months: 10 },
		projects: ["mizuki-blog"],
		color: "#ff5d01",
	},
	{
		id: "git",
		name: "Git / GitHub",
		description:
			"日常用 Git 管理博客源码，熟练 GitHub Pages 部署与 GitHub Actions 自动化。",
		icon: "devicon:git",
		category: "tools",
		level: "intermediate",
		experience: { years: 1, months: 2 },
		projects: ["mizuki-blog", "friends-verse"],
		color: "#f05033",
	},
	{
		id: "photoshop",
		name: "Photoshop 图像处理",
		description:
			"会做封面图、头像与皮肤素材的后期处理，流萤桌面皮肤的壁纸与图标都出自这里。",
		icon: "devicon:photoshop",
		category: "tools",
		level: "beginner",
		experience: { years: 1, months: 0 },
		projects: ["firefly-desktop"],
		color: "#31a8ff",
	},
	{
		id: "python",
		name: "Python",
		description:
			"会写脚本处理小任务：批量处理图片、解析数据、写点自动化小工具。",
		icon: "devicon:python",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 8 },
		color: "#3776ab",
	},
	{
		id: "video-editing",
		name: "视频剪辑",
		description:
			"用剪映做番剧混剪和日常 Vlog，会上字幕、卡点与简单特效。",
		icon: "material-symbols:movie",
		category: "other",
		level: "beginner",
		experience: { years: 0, months: 6 },
		color: "#ff4d6d",
	},
];
