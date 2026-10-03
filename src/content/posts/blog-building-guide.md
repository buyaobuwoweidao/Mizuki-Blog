---
title: 从零到一：我的个人博客搭建全记录
published: 2026-09-12
description: 用了几天时间，把博客从零搭到上线。记录一下完整过程，给想自己建站的朋友参考。
tags: [技术, 博客, Astro, GitHub]
category: 技术
image: /assets/projects/folkpatch.webp
draft: false
---

<style>
h2{color:#0ea5e9;text-shadow:0 0 8px rgba(14,165,233,.5),0 0 22px rgba(14,165,233,.3);animation:glowPulse 3.2s ease-in-out infinite alternate}
h3{color:#06b6d4;text-shadow:0 0 7px rgba(6,182,212,.5),0 0 18px rgba(6,182,212,.3);animation:glowPulse 3.2s ease-in-out infinite alternate}
@keyframes glowPulse{from{text-shadow:0 0 5px rgba(14,165,233,.35),0 0 14px rgba(14,165,233,.2)}to{text-shadow:0 0 11px rgba(14,165,233,.65),0 0 26px rgba(14,165,233,.4)}}
.hl-blue{color:#2288ff;font-weight:600}
.hl-red{color:#ff6677;font-weight:600}
.hl-green{color:#22aa55;font-weight:600}
.hl-purple{color:#9955ff;font-weight:600}
.hl-theme{color:#0ea5e9;font-weight:600}
.gentle-open{color:#0ea5e9;font-size:.95em;letter-spacing:.03em;margin-bottom:1rem}
.quote-box{background:rgba(14,165,233,.08);border-left:4px solid #0ea5e9;border-radius:.5rem;padding:.9rem 1.1rem;margin:1.2rem 0}
.chatter-box{background:rgba(6,182,212,.08);border-left:4px solid #06b6d4;border-radius:.5rem;padding:.8rem 1rem;margin:1.2rem 0;font-size:.95em}
.link-box{background:rgba(14,165,233,.06);border:1px solid rgba(14,165,233,.35);border-radius:.5rem;padding:.9rem 1.1rem;margin:1.2rem 0;font-size:.92em}
.link-box a{color:#0ea5e9}
.credit-box{background:rgba(6,182,212,.07);border-left:4px solid #06b6d4;border-radius:.5rem;padding:.7rem 1rem;margin:1rem 0;font-size:.85em;color:#999}
.disclaimer{color:#8a8f98;font-size:.8rem;text-align:center;margin-top:1.8rem}
hr{border:none;border-top:1px dashed rgba(14,165,233,.35);margin:1.8rem 0}
</style>

<div class="gentle-open">🔧 把这几天折腾建站的过程整理成一份小教程，希望能帮到想动手的你。</div>

## 为什么想建博客 ✧(≖ ◡ ≖✿) 手把手教程

作为一名资深二次元，一直想有个自己的小天地：可以写写番剧感想，放放收藏的歌单，还能挂个留言板让朋友们来串门。 ✧(≖ ◡ ≖✿)

正好看到 Mizuki 这个主题——二次元风格、功能齐全、部署简单，<span class="hl-theme">一眼就相中了</span>。

## 搭建过程

### 1. 准备阶段

需要的东西不多：

- **GitHub 账号**：用来托管代码和部署网站
- **Node.js 环境**：本地跑构建
- **文本编辑器**：改配置用

### 2. 克隆主题并本地化

把 Mizuki 主题仓库克隆下来，安装依赖，然后就是漫长的"个性化"阶段：

- 改站点名称、简介、头像
- 调整配色和横幅文字
- 填番剧库、友链、日记等数据

### 3. 配置评论与音乐

给博客接上了两样最喜欢的功能：

- **留言板**：用 Giscus 实现，评论直接挂在 GitHub Discussions 上，不用自己搭服务器
- **音乐播放器**：内置本地歌曲，打开网页就能听 🎵

### 4. 部署到 GitHub Pages

部署出奇地顺利：新建仓库、推送代码、打开 GitHub Pages，几分钟后博客就上线了。

之后还折腾了自动构建：每次推送代码，GitHub Actions 自动跑构建发布，<span class="hl-green">改完东西推一下就完事</span>。

## 给想建站的朋友

几点小建议：

1. **先跑起来再美化**：先把博客跑起来，后面慢慢改
2. **数据先填重要的**：头像、简介、留言板是门面，先弄好
3. **多看看别人的博客**：借鉴喜欢的站点的功能和风格，我的背景图灵感就来自 WanForY 小站

## 结尾

自己搭的博客，怎么看都喜欢。以后就在这里安家了，欢迎常来玩！ 🏠✨

<div class="link-box">
<p><strong>相关链接 🔗</strong></p>
<ul>
<li><a href="https://astro.build/" target="_blank" rel="noopener noreferrer">Astro 官方站点</a></li>
<li><a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">Giscus 评论系统官网</a></li>
<li><a href="https://github.com/matsuzaka-yuki/Mizuki" target="_blank" rel="noopener noreferrer">Mizuki 主题源码（GitHub，同站另一篇已引用核实）</a></li>
</ul>
</div>

<div class="disclaimer">本篇仅为个人主观感受</div>
