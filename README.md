# Cyril Notes

A personal Ghost theme, also great for customisation and hacking.

![](assets/screenshot-desktop.jpg)

## Features

- Dark / Light / System theme toggle
- Reading progress bar
- Code syntax highlighting with line numbers (highlight.js)
- Sticky table of contents sidebar on post pages
- Author social links (Twitter, Facebook, LinkedIn, YouTube, Instagram)
- Share buttons (Default / Native / Disabled)
- Featured post highlighting
- Two-column post grid on homepage
- Infinite scroll pagination
- Parallax cover images
- Ghost native search and comments
- Members & subscriptions support
- Responsive design

## Requirements

- Ghost **≥ 6.0** (tested on Ghost 6.x only)

## Install

```bash
git clone https://github.com/chulingera2025/ghost-cyrilnotes-theme.git
cd ghost-cyrilnotes-theme
pnpm install
pnpm zip
```

Upload the generated `ghost-cyrilnotes-theme.zip` in Ghost Admin under **Settings → Design → Upload theme**, then click **Activate**.

## Development

```bash
pnpm install
pnpm dev      # watch mode with livereload
pnpm build    # production build
pnpm zip      # build + package for Ghost upload
pnpm test:ci  # run gscan compatibility check
```

## License

MIT
