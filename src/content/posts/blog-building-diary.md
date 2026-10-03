---
title: 我的博客搭建日记：用 Mizuki 主题搭起二次元小窝
published: 2026-09-15
description: 从零开始，用 Astro + Mizuki 主题在 GitHub Pages 上搭起了这个二次元博客。
tags: [博客, Astro, GitHub Pages]
category: 技术
image: /assets/projects/mizuki.webp
draft: false
---

<style>
h2{color:#0ea5e9;text-shadow:0 0 8px rgba(14,165,233,.5),0 0 22px rgba(14,165,233,.3);animation:glowPulse 3.2s ease-in-out infinite alternate}
h3{color:#3b82f6;text-shadow:0 0 7px rgba(59,130,246,.5),0 0 18px rgba(59,130,246,.3);animation:glowPulse 3.2s ease-in-out infinite alternate}
@keyframes glowPulse{from{text-shadow:0 0 5px rgba(14,165,233,.35),0 0 14px rgba(14,165,233,.2)}to{text-shadow:0 0 11px rgba(14,165,233,.65),0 0 26px rgba(14,165,233,.4)}}
.hl-blue{color:#2288ff;font-weight:600}
.hl-red{color:#ff6677;font-weight:600}
.hl-green{color:#22aa55;font-weight:600}
.hl-purple{color:#9955ff;font-weight:600}
.hl-theme{color:#0ea5e9;font-weight:600}
.gentle-open{color:#0ea5e9;font-size:.95em;letter-spacing:.03em;margin-bottom:1rem}
.quote-box{background:rgba(14,165,233,.08);border-left:4px solid #0ea5e9;border-radius:.5rem;padding:.9rem 1.1rem;margin:1.2rem 0}
.chatter-box{background:rgba(59,130,246,.08);border-left:4px solid #3b82f6;border-radius:.5rem;padding:.8rem 1rem;margin:1.2rem 0;font-size:.95em}
.link-box{background:rgba(14,165,233,.06);border:1px solid rgba(14,165,233,.35);border-radius:.5rem;padding:.9rem 1.1rem;margin:1.2rem 0;font-size:.92em}
.link-box a{color:#0ea5e9}
.credit-box{background:rgba(59,130,246,.07);border-left:4px solid #3b82f6;border-radius:.5rem;padding:.7rem 1rem;margin:1rem 0;font-size:.85em;color:#999}
.disclaimer{color:#8a8f98;font-size:.8rem;text-align:center;margin-top:1.8rem}
hr{border:none;border-top:1px dashed rgba(14,165,233,.35);margin:1.8rem 0}
</style>

<div class="gentle-open">💻 记录一次从零搭起小窝的全过程，顺便踩过的坑都标出来。</div>

## 为什么想搭博客 (｡•̀ᴗ-)✧ 小窝搭建日记

作为一个二次元爱好者，一直想要一个属于自己的小窝——可以写写追番感想、记录生活、放点壁纸收藏。 (｡•̀ᴗ-)✧

看了很多静态博客模板，最后相中了 **Mizuki** 主题：二次元画风、功能齐全、可定制性强，<span class="hl-theme">一眼就爱上了</span>。

## 搭建过程

### 1. 准备环境

在电脑上安装了 Git 和 GitHub CLI，登录了 GitHub 账号。

### 2. 下载主题源码

从 [GitHub](https://github.com/matsuzaka-yuki/Mizuki) 拉取 Mizuki 源码，安装依赖。

### 3. 个性化配置

- 修改站点语言为中文
- 替换站点头像、昵称、个人简介
- 调整首页横幅文字、公告、看板娘

### 4. 部署上线

创建 GitHub 仓库，配置 **GitHub Actions** 自动构建部署到 Pages。之后每次推送代码，网站都会自动更新。 🚀

## 遇到的那些坑

搭建过程中踩了几个坑，记录一下：

1. **子路径部署**：项目部署在 `username.github.io/仓库名/` 下，需要配置 `base` 路径，否则资源 404
2. **Node 版本**：新版 pnpm 需要 Node 22+，构建环境版本不够会报错
3. **缓存问题**：清空文章后构建报错，最后发现是<span class="hl-red">构建缓存里的旧数据在作怪</span>，清理缓存后一切正常

<div class="chatter-box">💬 如果你的博客也用了 Mizuki 主题，遇到类似问题欢迎留言交流。</div>

## 现在的成果

- 支持站内全文搜索（Pagefind）
- 自带看板娘、音乐播放器（待填歌单）
- 有相册、番剧、日记、时间线等花里胡哨的页面
- 通过站内管理后台，可以直接在网页上写文章（没错，就是你现在看到的这个功能）

## 结尾

博客会持续更新，欢迎常来串门。

愿每一个二次元小窝都能温暖它的主人（・ω・） ✨

<div class="link-box">
<p><strong>相关链接 🔗</strong></p>
<ul>
<li><a href="https://github.com/matsuzaka-yuki/Mizuki" target="_blank" rel="noopener noreferrer">Mizuki 主题源码（GitHub，原文已引用）</a></li>
<li><a href="https://astro.build/" target="_blank" rel="noopener noreferrer">Astro 官方站点</a></li>
<li><a href="https://giscus.app/zh-CN" target="_blank" rel="noopener noreferrer">Giscus 评论系统官网</a></li>
</ul>
</div>

<div class="disclaimer">本篇仅为个人主观感受</div>
