# -*- coding: utf-8 -*-
"""给每篇文章正文第一个段落末尾追加贴合主题的颜文字（第二轮，正文用不同颜文字）"""
import io, os, re

POSTS = r"C:\Users\刘成毅\Doubao\chats\2026-09-30\new-chat\Mizuki-Blog\src\content\posts"

# slug -> 正文颜文字（与标题轮不同的）
BODY_KAOMOJI = {
    "animated-movie-nights": "( ｡•̀ᴗ-)✧",
    "anime-cafe-experience": "(´▽`ʃ♡ƪ)",
    "anime-convention-memories": "(๑˃̵ᴗ˂̵)و",
    "anime-food-cooking": "(๑´ڡ`๑)",
    "anime-life-lessons": "(◕‿◕✿)",
    "anime-music-playlist": "♪(´▽｀)",
    "anime-ost-soundtrack": "♪♪(´▽｀)",
    "anime-pilgrimage-travel": "(ง •̀_•́)ง",
    "anime-recommendation-2026": "(๑•̀ㅂ•́)و✧",
    "autumn-watchlist": "(*´∀`*)",
    "beloved-firefly": "(⁄ ⁄•⁄ω⁄•⁄ ⁄)",
    "blog-building-diary": "(｡•̀ᴗ-)✧",
    "blog-building-guide": "✧(≖ ◡ ≖✿)",
    "blue-archive-first-contact": "(◕‿◕✿)",
    "cat-and-anime-life": "(=^･ω･^=)",
    "cozy-anime-room": "(っ˘ω˘ς)",
    "desktop-aesthetics": "(๑˘ᴗ˘๑)",
    "desktop-customization-guide": "(๑¯◡¯๑)",
    "gacha-collection-journey": "(´；ω；`)",
    "game-story-love": "(ง •̀_•́)ง",
    "honkai-star-rail-journey": "(☆▽☆)",
    "iconic-scenes-collection": "(°▽°)ノ",
    "light-novel-reading-guide": "(´｡• ᵕ •｡`)",
    "midnight-anime-companions": "(˘ω˘)",
    "midnight-rambling": "(´；ω；`)",
    "my-anime-journey-memories": "(´▽｀)",
    "my-anime-journey": "(๑•̀ㅂ•́)و✧",
    "phone-customization-guide": "(ᵔᴥᵔ)",
    "rainy-day-anime-mood": "(´｡• ᵕ •｡`)",
    "seasonal-anime-watching": "(◕‿◕)",
    "secret-room": "(｀・ω・´)",
    "summer-festival-fireworks": "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧",
    "voice-actors-appreciation": "(´▽`ʃ♡ƪ)",
    "wallpaper-collection-journey": "(｡♥‿♥｡)",
    "welcome-to-my-corner": "(人´∀｀)",
    "why-i-love-slice-of-life": "(´∀｀)",
}

def process():
    changed = []
    for name in os.listdir(POSTS):
        if not name.endswith(".md"):
            continue
        slug = name[:-3]
        if slug in ("national-day-rabbit", "national-day-blessing", "resident-evil-9-review"):
            continue
        path = os.path.join(POSTS, name)
        with io.open(path, "r", encoding="utf-8", newline="") as f:
            text = f.read()
        km = BODY_KAOMOJI.get(slug)
        if not km:
            continue
        lines = text.splitlines(True)
        # 找到第一个 ## 标题之后的第一个非空段落（不含 frontmatter）
        in_frontmatter = True
        found_title = False
        for i, line in enumerate(lines):
            stripped = line.strip()
            if in_frontmatter:
                if stripped == "---":
                    in_frontmatter = False
                continue
            if not found_title:
                if stripped.startswith("## "):
                    found_title = True
                continue
            # 已找到标题，找第一个非空、非标题、非图片的正文段
            if stripped and not stripped.startswith(("#", "!", ">", "-", "*", "::", "```", "![", "<")):
                # 若段落末尾已带颜文字（含括号emoji）则跳过
                if re.search(r"[\(（][^\(\)（）]{1,20}[\)）]\s*$", stripped):
                    break
                # 在段落末尾追加颜文字
                end = stripped + " " + km
                lines[i] = lines[i].replace(stripped, end, 1)
                text = "".join(lines)
                with io.open(path, "w", encoding="utf-8", newline="") as f:
                    f.write(text)
                changed.append(slug + " -> " + km)
                break
    print("已处理 %d 篇正文:" % len(changed))
    for c in changed:
        print("  " + c)

if __name__ == "__main__":
    process()
