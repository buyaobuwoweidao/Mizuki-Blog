/**
 * 背景视频播放器配置
 * 在导航栏显示视频播放按钮，点击后页面背景切换为视频（覆盖图片壁纸）
 * 视频文件放在 public/assets/videos/ 目录下
 */
export interface BackgroundVideoConfig {
	/** 是否启用背景视频功能 */
	enable: boolean;
	/** 视频地址列表（本地路径以 / 开头，自动补站点前缀；也支持远程 URL） */
	playerUrl: string[];
	/** 多视频播放模式："order" 顺序循环，"random" 随机切换 */
	playerMode: "order" | "random";
}

export const backgroundVideoConfig: BackgroundVideoConfig = {
	enable: true,
	// 想加更多背景视频，把文件放进 public/assets/videos/ 后在这里追加即可
	playerUrl: ["/assets/videos/firefly.mp4"],
	playerMode: "random",
};
