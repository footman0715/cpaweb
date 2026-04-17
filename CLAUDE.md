# 奇承聯合會計師事務所 — 官網專案

## 專案概觀

台中北屯的 CPA 事務所官網重做,前台 only(後台沿用既有系統)。
核心目標:**SEO + AEO 雙軸獲客**,讓 Google 與 AI 搜尋引擎(ChatGPT / Perplexity / Gemini)都能找到事務所。

## 品牌資訊 (NAP)

- 事務所：奇承聯合會計師事務所 / Cicpafirm
- 地址：台中市北屯區東山路一段156-6號6樓之1
- 電話：04-2435-1850 / 傳真：04-2435-1830
- Email：cicpafirm@gmail.com
- 營業時間：週一至週五 09:00 – 18:00
- 成立年份：2005
- 網域：https://www.cicpafirm.com

> NAP 必須在全站一致（Header / Footer / Schema.org / Google 商家檔案）。
> 單一資料源在 `web/src/data/site.ts`，**不要在元件裡硬寫 NAP**。

## 技術棧

| 項目 | 選擇 |
|---|---|
| 框架 | Astro 6 (Static / SSG) |
| 樣式 | Tailwind CSS 4 (CSS-based @theme, 非 tailwind.config.js) |
| 內容 | MDX (@astrojs/mdx)，未來可接 Sanity / Strapi |
| Sitemap | @astrojs/sitemap 自動產生 |
| 部署 | Vercel（透過 GitHub 自動部署，Root Directory = `web/`） |
| Node | >=22.12 |

## 目錄結構

```
cpaweb/
├── CLAUDE.md              ← 你在這裡
├── DESIGN.md              ← 設計規劃文件 (SEO/AEO 策略、頁面規格、Schema.org)
├── .stitch/               ← Stitch prompt 與產出物
├── logo_奇承_2/           ← 2019 舊版視覺稿
├── stitch_/               ← Stitch V2 首頁產出 (code.html + screen.png)
├── stitch_ (1)/           ← Stitch 多頁產出 (首頁v3、服務、FAQ、About)
└── web/                   ← Astro 專案 (前端原始碼)
    ├── astro.config.mjs
    ├── public/
    │   ├── robots.txt
    │   └── llms.txt       ← AEO 站點地圖
    └── src/
        ├── data/site.ts   ← NAP、服務、FAQ、新聞 — 全站單一資料源
        ├── styles/global.css ← Tailwind @theme 設計 tokens
        ├── layouts/BaseLayout.astro ← SEO meta + OG + Schema.org
        ├── components/
        │   ├── Header.astro
        │   ├── Footer.astro
        │   ├── SchemaOrg.astro ← AccountingService / FAQPage / BreadcrumbList
        │   └── home/       ← 首頁六段元件
        └── pages/
            ├── index.astro
            ├── about.astro
            ├── contact.astro
            ├── faq.astro
            ├── services/   ← index + [slug] 動態路由
            └── tax-news/   ← index + [slug] 動態路由
```

## 設計系統

視覺風格：**寧靜現代 (Quiet Modern)** — Stripe × 天下雜誌 × MUJI，東方化的編輯美學。

| Token | 值 | 用途 |
|---|---|---|
| `--color-ink` | `#1F3A2E` | 主色、深段落、卡片反白底 |
| `--color-ink-deep` | `#082419` | 文字最深色 |
| `--color-canvas` | `#FBF8F3` | 主背景（暖米白） |
| `--color-gold` | `#C9A961` | eyebrow、hairline、數字裝飾 |
| `--color-signal` | `#F5A623` | 主 CTA 按鈕 **only** |
| `--color-text-muted` | `#4A4A4A` | 次要文字 |
| `--color-hairline` | `#E5E1D8` | 1px 分隔線 |

- 字型：`Noto Sans TC`（標題 900 / 內文 400）+ `Inter`（英文 / 數字）
- 圓角：卡片 4px、按鈕 6px，**不做 pill 形**
- 陰影：whisper-soft only
- 橘色 CTA 只出現在：Header 按鈕、Hero 主 CTA、ContactCTA 主 CTA

所有 token 定義在 `web/src/styles/global.css` 的 `@theme` 區塊。

## 開發指令

```bash
cd web
npm run dev      # http://localhost:4321
npm run build    # 產出 dist/
npm run preview  # 預覽 build 結果
```

## GitHub → Vercel 部署

### Git 結構

- Git repository 應該建在 `cpaweb/` 根目錄，不是 `web/`
- Vercel 匯入 GitHub repo 後，**Project Root Directory 設為 `web/`**
- 根目錄 `.gitignore` 已排除 `web/node_modules`、`web/dist`、`.astro`、zip 產物與本機工具資料夾

### 第一次推到 GitHub

```bash
cd C:\Users\88697\cpaweb
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <你的 GitHub repo URL>
git push -u origin main
```

### Vercel 專案設定

在 Vercel 匯入 GitHub repository 時，使用下面設定：

- Framework Preset：`Astro`
- Root Directory：`web`
- Install Command：`npm install`
- Build Command：`npm run build`
- Output Directory：`dist`
- Node.js Version：`22.x`

專案已提供 `web/.nvmrc`，內容是 `22.12.0`。本機開發、CI 與 Vercel 都應優先對齊這個版本。

如果 Vercel 已先建立專案但設錯目錄，到 Project Settings → Build and Deployment 把 `Root Directory` 改成 `web`，下次部署就會生效。

### 日常發布流程

```bash
cd C:\Users\88697\cpaweb
git add .
git commit -m "Describe the change"
git push
```

- push 到 `main` 後，Vercel 會自動重新部署
- Pull Request 會自動產生 Preview Deployment，可先驗證再合併
- 正式網域維持 `https://www.cicpafirm.com`

### 部署前檢查

```bash
cd web
npm run build
```

- 若本機 `node_modules` 狀態異常，先刪掉 `web/node_modules` 與 lockfile 以外的快取，再重新 `npm install`
- Vercel 會在乾淨環境重新安裝依賴，所以 Git 不要提交 `node_modules` 或 `dist`

## 頁面路由

| 路由 | 檔案 | 狀態 |
|---|---|---|
| `/` | `index.astro` | 完整 |
| `/services/` | `services/index.astro` | 完整 |
| `/services/[slug]/` | `services/[slug].astro` | 骨架（待填充服務內容） |
| `/tax-news/` | `tax-news/index.astro` | 完整（示範 3 篇） |
| `/tax-news/[slug]/` | `tax-news/[slug].astro` | 骨架（待接 MDX/CMS） |
| `/faq/` | `faq.astro` | 完整（5 題） |
| `/about/` | `about.astro` | 完整（團隊名字/執照待補） |
| `/contact/` | `contact.astro` | 完整（表單未接後端） |

## SEO / AEO Checklist

- [x] 每頁獨立 `<title>` + `<meta description>`
- [x] `<link rel="canonical">`
- [x] Open Graph + Twitter Card
- [x] `lang="zh-Hant-TW"` + `hreflang` ready
- [x] AccountingService Schema.org JSON-LD (全站)
- [x] FAQPage Schema (首頁 + FAQ 頁)
- [x] BreadcrumbList Schema (所有子頁)
- [x] `robots.txt`
- [x] `llms.txt` (AEO)
- [x] `@astrojs/sitemap` → `sitemap-index.xml`
- [ ] Article Schema (稅務新聞內頁)
- [ ] HowTo Schema (服務流程)
- [ ] Person Schema (會計師團隊)
- [ ] Google Search Console 驗證
- [ ] Google Analytics 4

## 待辦事項

### 高優先
- [ ] 填充 4 個服務落地頁內容（服務範疇、流程、收費、FAQ）
- [ ] 補真實會計師姓名、執照字號、照片到 about.astro
- [ ] 聯絡表單接後端（候選：Resend / Formspree / 自建 API）
- [ ] Logo SVG 製作（放 `public/logo.svg` + `public/favicon.svg`）
- [ ] GitHub repo 建立完成並接上 Vercel（Root Directory = `web`）
- [ ] 在 Vercel 綁定正式網域 `www.cicpafirm.com`
- [ ] Vercel Production Environment 確認 Node.js 22.x

### 中優先
- [ ] 稅務新聞改用 MDX 或接 CMS (Sanity / Strapi)
- [ ] FAQ 頁擴充至 30 題（AEO 強化）
- [ ] 搜尋功能（FAQ 搜尋框）
- [ ] 下載專區頁（登入機制）
- [ ] 手機版漢堡選單

### 低優先
- [ ] 深色模式
- [ ] 多語系 (English)
- [ ] 動畫 (intersection observer fade-in)
- [ ] Google 商家檔案建立與驗證
- [ ] Google 評論邀請流程

## 注意事項

- **不要在元件裡硬寫 NAP 資訊**。所有地址/電話/品牌名從 `site.ts` import。
- **橘色 `--color-signal` 嚴格配給**，只用在 3 個 CTA 按鈕。
- **Schema.org 用 `SchemaOrg.astro` 元件統一管理**，不要在各頁手寫 JSON-LD。
- 稅務新聞的日期、金額、法條、稅率要**精確**（AEO 寫作原則）。
- 每段文案**開頭用結論句**（AI 會優先抓第一句）。
