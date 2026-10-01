# -*- coding: utf-8 -*-
"""裁剪手机截图：去顶部状态栏和底部播放按钮，保留画面主体"""
from PIL import Image
import os, sys

BASE = r"C:\Users\刘成毅\Doubao\chats\2026-09-30\new-chat\Mizuki-Blog\public\images\albums"

# 需要裁剪的文件（相册相对路径）
CROP_LIST = [
    # 流萤收藏 - 手机截图
    "firefly-collection/f-02.webp",   # 阳台（竖屏截图）
    "firefly-collection/f-03.webp",   # 倚枕
    "firefly-collection/f-04.webp",   # 水手服
    "firefly-collection/f-05.webp",   # 托腮
    "firefly-collection/f-06.webp",   # Q版托腮
    "firefly-collection/f-07.webp",   # 小狗表情
    "firefly-collection/f-08.webp",   # 惊讶插画
    "firefly-collection/f-09.webp",   # 水手服立绘(带抖音水印,仅去底部水印)
    # 猫猫日记 - 手机截图
    "cat-diary/c-01.webp",            # 蓝眼猫
    "cat-diary/c-02.webp",            # 布偶猫
    # 二次元插画收藏 - 手机截图
    "art-collection/a-02.webp",
    "art-collection/a-03.webp",
    "art-collection/a-04.webp",
    "art-collection/a-05.webp",
    "art-collection/a-06.webp",
    "art-collection/a-08.webp",
    "art-collection/a-10.webp",
    "art-collection/a-11.webp",
    "art-collection/a-12.webp",
    "art-collection/a-13.webp",
    "art-collection/a-14.webp",
    "art-collection/a-15.webp",
    "art-collection/a-16.webp",
    "art-collection/a-17.webp",
    "art-collection/a-18.webp",
    "art-collection/a-19.webp",
    "art-collection/a-21.webp",
    "art-collection/a-22.webp",
]

def crop_photo(path):
    img = Image.open(path)
    w, h = img.size
    if h >= 2700:
        # 竖屏截图：顶部裁状态栏(4.5%)，底部裁播放按钮(到92.5%)
        top = int(h * 0.045)
        bottom = int(h * 0.925)
        out = img.crop((0, top, w, bottom))
    elif h >= 1900:
        # 立绘带底部水印：只裁底部水印
        bottom = int(h * 0.935)
        out = img.crop((0, 0, w, bottom))
    else:
        out = img
    # 转 RGB（webp 兼容）并保存
    if out.mode != "RGB":
        out = out.convert("RGB")
    out.save(path, "WEBP", quality=92)
    return (w, h, out.size)

for rel in CROP_LIST:
    p = os.path.join(BASE, rel)
    if not os.path.exists(p):
        print(f"MISS {rel}")
        continue
    orig = Image.open(p).size
    new = crop_photo(p)
    print(f"OK {rel}: {orig} -> {new}")
