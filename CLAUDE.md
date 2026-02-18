# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

A Hugo static site for [thavanathan.com](https://www.thavanathan.com/), deployed via GitHub Pages using GitHub Actions. It uses the `whiteplain` theme. Content is written in Markdown with Hugo front matter.

## Common Commands

```bash
# Start local dev server with drafts visible
hugo server -D

# Build for production
hugo --gc --minify

# Create a new post
hugo new posts/my-post-title.md

# Create a new tutorial chapter
hugo new tutorials/python-beginner/ch-09-my-topic.md
```

## Content Structure

- `content/posts/` — standalone blog posts (published)
- `content/drafts/` — work-in-progress posts (not published on the site, shown with `hugo server -D`)
- `content/tutorials/python-beginner/` — chapters of the Python Beginner Tutorial series (`ch-01-...` to `ch-08-...` published so far)
- `content/tutorials/django_beginner/` — Django Beginner Tutorial series
- `content/about/` — About page
- `content/_index.md` — Homepage content; manually lists tutorial chapters with Hugo `ref` shortcodes

## Front Matter Conventions

Tutorial chapters use this front matter pattern:

```yaml
---
categories:
- Python-Beginner-Tutorial
date: "2019-11-14T05:00:00Z"
tags:
- python
title: Chapter Title
toc:
- true
updated: "2020-8-8 09:00:00"
---
```

Posts use a similar structure but may vary. The `toc: true` field enables a table of contents.

## Important Notes

- When a new tutorial chapter is published (moved from `drafts/` to `tutorials/`), **manually add it to `content/_index.md`** — the homepage list is not auto-generated.
- The `layouts/partials/head_custom.html` overrides a theme partial for custom `<head>` content.
- Hugo version pinned to `0.128.0` in `.github/workflows/hugo.yml`; use a compatible local version to avoid rendering differences.
- Syntax highlighting uses the `monokai` style with `tabWidth = 4` and line numbers enabled (`config.toml`).
- Internal links use Hugo's `ref` shortcode: `{{< ref "/path/to/file.md" >}}`.