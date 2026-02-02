# CraftMenu Wiki

Professional multi-language documentation for CraftMenu plugin, built with **MkDocs Material**.

## 🌐 Supported Languages (20)

- 🇺🇸 English (en)
- 🇧🇷 Português (Brasil) (pt-br)
- 🇵🇹 Português (Portugal) (pt-pt)
- 🇪🇸 Español (es)
- 🇫🇷 Français (fr)
- 🇩🇪 Deutsch (de)
- 🇮🇹 Italiano (it)
- 🇳🇱 Nederlands (nl)
- 🇷🇺 Русский (ru)
- 🇵🇱 Polski (pl)
- 🇹🇷 Türkçe (tr)
- 🇺🇦 Українська (uk)
- 🇸🇦 العربية (ar)
- 🇯🇵 日本語 (ja)
- 🇰🇷 한국어 (ko)
- 🇨🇳 简体中文 (zh)
- 🇮🇳 हिन्दी (hi)
- 🇮🇩 Bahasa Indonesia (id)
- 🇹🇭 ไทย (th)
- 🇻🇳 Tiếng Việt (vi)

## 🚀 Quick Start

### Prerequisites

- Python 3.7+
- pip

### Installation

```bash
# Install MkDocs and plugins
pip install mkdocs
pip install mkdocs-material
pip install mkdocs-static-i18n
```

### Local Development

```bash
# Serve documentation locally with live reload
mkdocs serve

# Open browser at http://127.0.0.1:8000
```

### Build Static Site

```bash
# Build static HTML site
mkdocs build

# Output will be in ./site/
```

## 📁 Project Structure

```
wiki/
├── .github/
│   └── workflows/
│       └── deploy-docs.yml    # GitHub Actions workflow
├── docs/
│   ├── en/                    # English documentation
│   ├── pt-br/                 # Portuguese (Brazil)
│   ├── ... (18 other languages)
│   ├── assets/
│   │   ├── logo.png           # Site logo (REQUIRED)
│   │   └── favicon.ico        # Favicon (REQUIRED)
│   ├── stylesheets/
│   │   └── extra.css          # Custom CSS
│   └── javascripts/
│       └── extra.js           # Custom JavaScript
├── mkdocs.yml                 # MkDocs configuration
├── .gitignore
└── README.md (this file)
```

## 🎨 Adding Logo and Favicon

**IMPORTANT:** You need to add your logo and favicon to make the site fully functional:

1. Add a logo image: `docs/assets/logo.png` (recommended: 128x128px PNG)
2. Add a favicon: `docs/assets/favicon.ico` (16x16px ICO file)

Alternatively, you can remove these lines from `mkdocs.yml` if you don't want a logo:
```yaml
theme:
  logo: assets/logo.png    # Remove this line
  favicon: assets/favicon.ico  # Remove this line
```

## 🌍 Multi-Language Configuration

The site uses **mkdocs-static-i18n** plugin to generate separate sites for each language.

### Navigation Translations

Navigation menus are automatically translated for each language. Translations are configured in `mkdocs.yml` under each language's `nav_translations` section.

### Adding New Language

1. Create new language directory in `docs/` (e.g., `docs/new-lang/`)
2. Copy markdown files from `docs/en/`
3. Translate the content
4. Add language configuration to `mkdocs.yml`:

```yaml
- locale: new-lang
  name: Language Name
  build: true
  nav_translations:
    Home: Translated Home
    Features: Translated Features
    # ... etc
```

## 🚀 GitHub Pages Deployment

### Automatic Deployment

The repository is configured to automatically deploy to GitHub Pages when you push to the `main` branch.

### Enable GitHub Pages (First Time Setup)

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select:
   - **Source:** `GitHub Actions`
4. Save

The site will be available at: `https://craftmenu.github.io/wiki/`

### Manual Deployment

```bash
# Build and deploy manually
mkdocs gh-deploy

# This will:
# 1. Build the site
# 2. Push to gh-pages branch
# 3. Deploy to GitHub Pages
```

## 🔧 Development Workflow

### Adding New Page

1. Create markdown file in `docs/en/` (e.g., `docs/en/new-page.md`)
2. Translate to other languages (e.g., `docs/pt-br/new-page.md`)
3. Add to navigation in `mkdocs.yml`:

```yaml
nav:
  - Home: index.md
  - New Page: new-page.md  # Add here
```

4. Add navigation translation for each language:

```yaml
- locale: pt-br
  nav_translations:
    New Page: Nova Página  # Add translation
```

### Testing Changes

```bash
# 1. Start local server
mkdocs serve

# 2. Open http://127.0.0.1:8000

# 3. Edit markdown files (changes reload automatically)

# 4. Test language switcher (top right corner)
```

### Committing Changes

```bash
git add .
git commit -m "docs: Add new feature documentation"
git push origin main

# GitHub Actions will automatically deploy
```

## 📚 Documentation Best Practices

### File Organization

- Keep each language in its own directory (`docs/LANG/`)
- Mirror the same file structure across all languages
- Use descriptive filenames (kebab-case: `menu-creation.md`)

### Markdown Guidelines

- Use heading levels properly (# → ## → ###)
- Add code blocks with syntax highlighting:
  ````markdown
  ```yaml
  menu:
    name: example
  ```
  ````
- Use admonitions for important notes:
  ```markdown
  !!! note "Important"
      This is an important note
  ```

### Images

- Place images in `docs/assets/images/`
- Use relative paths: `![Alt text](../assets/images/screenshot.png)`
- Optimize images (compress PNGs, JPGs)

## 🛠️ Troubleshooting

### Build Fails

**Error:** `Config value 'plugins': Plugin 'i18n' not found`

**Solution:**
```bash
pip install mkdocs-static-i18n
```

### Navigation Not Translating

**Check:**
1. Language locale matches directory name (e.g., `locale: pt-br` → `docs/pt-br/`)
2. `nav_translations` are defined for all nav items
3. File paths in `nav` are relative to language directory

### Logo/Favicon Not Showing

**Options:**
1. Add `docs/assets/logo.png` and `docs/assets/favicon.ico`
2. OR remove logo/favicon lines from `mkdocs.yml`

### GitHub Pages 404

**Check:**
1. GitHub Pages is enabled (Settings → Pages → Source: GitHub Actions)
2. Workflow ran successfully (Actions tab)
3. `site_url` in `mkdocs.yml` matches your GitHub Pages URL

## 📖 Resources

- [MkDocs Documentation](https://www.mkdocs.org/)
- [Material for MkDocs](https://squidfunk.github.io/mkdocs-material/)
- [mkdocs-static-i18n Plugin](https://github.com/ultrabug/mkdocs-static-i18n)
- [MkDocs Material Reference](https://squidfunk.github.io/mkdocs-material/reference/)

## 📄 License

All Rights Reserved - Copyright © 2026 Zodunix (Jesus Ruescas Junior)

This documentation is part of the CraftMenu project.

---

**Built with ❤️ using MkDocs Material**
