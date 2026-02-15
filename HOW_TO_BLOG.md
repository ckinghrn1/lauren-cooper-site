# How to Publish a Blog Post

Hi Lauren! Here is how to add a new post to your website.

## 1. Create a New Note
1. Open Obsidian.
2. Navigate to the `blog/posts/` folder.
3. Create a new note (Ctrl+N).

## 2. Add the "Frontmatter"
At the very top of your new note, add this block of text (you can copy-paste it):

```yaml
---
title: My New Post Title
date: 2025-03-20
description: A short summary of the post that appears on the blog list.
tags:
  - self-growth
  - literature
---
```

**Note:** The `date` must be in `YYYY-MM-DD` format.

## 3. Write Your Post
Write your content below the `---` lines. You can use:
- **Bold text** with double asterisks
- *Italic text* with single asterisks
- > Blockquotes with a greater-than sign
- [Links](https://google.com) like this

## 4. Publish
When you're ready to go live:
1. Open the **Command Palette** (Ctrl+P).
2. Type **"Obsidian Git: Commit and push"**.
3. Press Enter.
4. Wait about 30 seconds, and your post will be live on the site!

---
*If you need to edit an existing post, just make your changes and run "Commit and push" again.*
