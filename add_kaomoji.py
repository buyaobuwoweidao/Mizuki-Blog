# -*- coding: utf-8 -*-
"""给每篇文章的第一个 ## 标题追加贴合主题的颜文字"""
import os, io, re

POSTS = r"C:\Users\刘成毅\Doubao\chats\2026-09-30\new-chat\Mizuki-Blog\src\content\posts"

# slug -> 颜文字（贴合主题）
KAOMOJI = {
    "animated-movie-nights": "(˘ω˘)……夜里看剧场版，根本停不下来",
    "anime-cafe-experience": "(*´▽`*) 推开门就是另一个世界",
    "anime-convention-memories": "٩(◕‿◕｡)۶ 漫展永动机启动！",
    "anime-food-cooking": "(๑´ڡ`๑) 深夜慎入，饿了别怪我",
    "anime-life-lessons": "(｡•̀ᴗ-)✧ 二次元教会我的事",
    "anime-music-playlist": "♪(´▽｀) 单曲循环警告",
    "anime-ost-soundtrack": "♪♪(´▽｀) 前奏一响就沦陷",
    "anime-pilgrimage-travel": "(๑•̀ㅂ•́)و✧ 看完就想出发",
    "anime-recommendation-2026": "(๑•̀ㅂ•́)و✧ 良心推荐，入坑不亏",
    "autumn-watchlist": "(*´∀`*) 秋天就是要窝着补番",
    "beloved-firefly": "(⁄ ⁄•⁄ω⁄•⁄ ⁄) 流萤天下第一",
    "blog-building-diary": "(｡•̀ᴗ-)✧ 小窝搭建日记",
    "blog-building-guide": "✧(≖ ◡ ≖✿) 手把手教程",
    "blue-archive-first-contact": "(◕‿◕✿) 放学后的社团活动室",
    "cat-and-anime-life": "(=^･ω･^=) 猫猫与二次元",
    "cozy-anime-room": "(っ˘ω˘ς) 回到小窝就回血",
    "desktop-aesthetics": "(๑˘ᴗ˘๑) 每天第一个进入的异世界",
    "desktop-customization-guide": "(๑¯◡¯๑) 折腾桌面的快乐",
    "gacha-collection-journey": "(´；ω；`) 钱包：你礼貌吗",
    "game-story-love": "(ง •̀_•́)ง 为剧情买单，值了",
    "honkai-star-rail-journey": "(☆▽☆) 星穹铁道入坑实录",
    "iconic-scenes-collection": "(°▽°)ノ 名场面收藏夹",
    "light-novel-reading-guide": "(´｡• ᵕ •｡`) 纸页间的另一个世界",
    "midnight-anime-companions": "(˘ω˘) 凌晨两点见",
    "midnight-rambling": "(´；ω；`) 深夜碎碎念",
    "my-anime-journey-memories": "(´▽｀) 一切都从那个夏天开始",
    "my-anime-journey": "(๑•̀ㅂ•́)و✧ 入坑这些年",
    "phone-customization-guide": "(ᵔᴥᵔ) 手机也要二次元",
    "rainy-day-anime-mood": "(´｡• ᵕ •｡`) 雨天限定",
    "seasonal-anime-watching": "(◕‿◕) 追番也要看季节",
    "secret-room": "(｀・ω・´) 嘘——这里是秘密房间",
    "summer-festival-fireworks": "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ 夏日祭赛高",
    "voice-actors-appreciation": "(´▽`ʃ♡ƪ) 声优控集合",
    "wallpaper-collection-journey": "(｡♥‿♥｡) 壁纸收藏之路",
    "welcome-to-my-corner": "(人´∀｀) 欢迎来到流萤的小窝",
    "why-i-love-slice-of-life": "(´∀｀) 日常番永不过时",
}

def process():
    changed = []
    for name in os.listdir(POSTS):
        if not name.endswith(".md"):
            continue
        slug = name[:-3]
        if slug == "national-day-rabbit":
            continue
        path = os.path.join(POSTS, slug + ".md")
        with io.open(path, "r", encoding="utf-8", newline="") as f:
            text = f.read()
        lines = text.splitlines(True)
        for i, line in enumerate(lines):
            if line.startswith("## "):
                title = line.strip()
                # 标题已带颜文字则跳过
                if "(" in title and ")" in title:
                    break
                kaomoji = KAOMOJI.get(slug)
                if not kaomoji:
                    break
                # 在标题后追加颜文字（同一行，空格隔开）
                new_title = title + " " + kaomoji
                lines[i] = new_title + ("\n" if line.endswith("\n") else "")
                text = "".join(lines)
                with io.open(path, "w", encoding="utf-8", newline="") as f:
                    f.write(text)
                changed.append(slug + " -> " + kaomoji)
                break
    print("已处理 %d 篇:" % len(changed))
    for c in changed:
        print("  " + c)

if __name__ == "__main__":
    process()
