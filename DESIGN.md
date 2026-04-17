# 奇承聯合會計師事務所 — 官網設計規劃文件

> 本文件為網站重新設計前的規劃藍本,聚焦於 **SEO(傳統搜尋引擎最佳化)** 與 **AEO(Answer Engine Optimization,AI 搜尋引擎最佳化)** 的整合策略。所有頁面結構、內容框架、技術規格皆依此文件展開。

---

## 一、專案定位與目標

### 1.1 事務所基本資訊(NAP)
- **事務所名稱**:奇承聯合會計師事務所(Cicpafirm)
- **本次重做範圍**:僅前台網站(香港投資移民業務已移除);後台管理沿用既有系統,本次不重做
- **地址**:台中市北屯區東山路一段156-6號6樓之1
- **電話**:04-2435-1850
- **傳真**:04-2435-1830
- **Email**:cicpafirm@gmail.com
- **服務區域**:以台中為核心,服務全台中小企業、新創、個人戶,另含香港投資移民業務

> **重要**:網站、Google 商家檔案、社群、所有外部目錄的 NAP(Name / Address / Phone)必須完全一致,這是本地 SEO 最基本也最常被忽略的地方。

### 1.2 目標受眾(Target Persona)
1. **中小企業主**:想找在地會計師處理記帳、稅務申報、財簽
2. **新創/創業家**:需要公司設立、行號登記、創業諮詢
3. **需要財簽/稅簽的公司**:銀行融資、股東要求、法定查核
4. **個人戶**:綜所稅、遺贈稅、房地合一稅諮詢

### 1.3 網站核心目標
1. **獲客**:讓在 Google / ChatGPT / Perplexity 上搜尋「台中會計師」「台中記帳」「工商登記」「財簽」等字詞的人找到我們
2. **信任**:透過專業內容、案例、團隊介紹建立 E-E-A-T(經驗/專業/權威/信任)
3. **轉換**:清楚的 CTA(聯絡我們、Line 諮詢、電話),降低詢價門檻
4. **服務既有客戶**:登入下載專區、文件、試算表

---

## 二、SEO vs AEO:策略差異與整合

| 面向 | SEO(傳統搜尋) | AEO(AI 答題引擎) |
|---|---|---|
| 目標平台 | Google、Bing | ChatGPT、Perplexity、Google SGE、Claude、Gemini |
| 使用者行為 | 輸入關鍵字,點擊連結 | 問完整問題,直接讀答案 |
| 內容重點 | 關鍵字密度、外部連結 | 問答式內容、可被 AI 引用的事實句 |
| 排版風格 | 長文、SEO 標題 | 清楚 Q&A、條列事實、有結構 |
| 技術要點 | sitemap.xml、meta tag、canonical | Schema.org、llms.txt、清楚標題層級 |

### 兩者共同要求
- 頁面載入快(Core Web Vitals 綠燈)
- Mobile-first RWD
- 結構化資料(Schema.org)
- 清楚的 H1 → H6 標題階層
- 語意化 HTML(section、article、nav、aside)
- HTTPS、可被爬取

---

## 三、網站資訊架構(IA)

```
/                           首頁
├── /services/              服務項目(總覽)
│   ├── /services/business-registration/     工商登記
│   ├── /services/audit-attestation/         會計師簽證及審計
│   ├── /services/accounting-tax/            會計、稅務服務
│   └── /services/consulting/                諮詢服務
├── /tax-news/              稅務新聞(列表)
│   └── /tax-news/{slug}/   稅務新聞內文
├── /faq/                   常見問題(AEO 核心頁)
├── /about/                 關於我們(團隊、資歷、E-E-A-T)
├── /cases/                 服務案例(可選,強信任)
├── /contact/               聯絡我們
├── /downloads/             公用下載專區(登入後)
│   ├── /downloads/docs/    文件下載
│   └── /downloads/sheets/  試算表
├── /login/                 登入
├── /privacy/               隱私權政策
├── /terms/                 使用條款
├── /sitemap.xml            XML Sitemap
├── /robots.txt             爬蟲規則
└── /llms.txt               AI 模型引用規則(AEO)
```

### 3.1 對既有截圖的調整建議
- **原首頁**:服務項目直接列在首頁 → 保留,但每個服務項目要**獨立落地頁**(SEO 需要)
- **原稅務新聞**:保留三欄卡片列表 → 加上**分類**與**標籤**,強化內部連結
- **原下載專區**:保留登入機制 → 但**下載清單頁本身可公開**(只鎖檔案),讓 Google 知道我們有這些資源
- **新增**:FAQ 頁、About 頁、結構化 schema

---

## 四、頁面設計規格

### 4.1 首頁 /

**SEO Title**:`台中會計師事務所|記帳、稅務、財簽、工商登記 - 奇承聯合會計師事務所`
**Meta Description**(~140 字):`奇承聯合會計師事務所位於台中太平,提供中小企業記帳、營業稅/所得稅申報、財務簽證、工商登記、香港投資移民設立等一站式會計稅務服務。`

**區塊結構**:
1. **Hero**
   - H1:`台中中小企業信賴的會計師事務所`(包含核心關鍵字)
   - 副標:`記帳、稅務申報、財簽、工商登記 — 一站整合,專業為您守護`
   - 主 CTA:`免費諮詢` / 次 CTA:`查看服務項目`
   - 信任元素:`服務 XX 年 / XXX 家客戶 / XX 位會計師`
2. **服務項目**(六大卡片,點擊進入各自落地頁)
3. **為什麼選擇奇承**(3-4 個差異化賣點)
4. **最新稅務新聞**(3 篇最新,連到新聞中心)
5. **常見問題(精選 4-5 題,連到 FAQ 頁)** ← AEO 重點
6. **CTA 區塊**:聯絡資訊 + 地圖 + 預約諮詢表單

### 4.2 服務項目落地頁(共 4 頁)

每個服務項目需要**獨立 URL、獨立 H1、獨立 meta**,不能只在首頁列清單。

**範例:/services/accounting-tax/**
- H1:`會計、稅務服務 — 台中記帳報稅專家`
- 內容結構:
  1. 服務簡介(200-300 字,自然帶入關鍵字)
  2. **服務內容**(H2):記帳及傳票輸入、營業稅申報、所得稅申報、補充保費申報、扣繳申報、股東資訊申報、勞健保業務
  3. **誰適合這項服務**(H2)
  4. **服務流程**(H2,步驟化,搭配 HowTo schema)
  5. **常見問題**(H2,FAQPage schema)← AEO
  6. **收費說明**(或「案件評估原則」)
  7. CTA:免費諮詢

**關鍵字地圖**:
| 頁面 | 主關鍵字 | 次要關鍵字 |
|---|---|---|
| 會計稅務 | 台中記帳、台中報稅、營業稅申報 | 所得稅申報、扣繳申報、補充保費 |
| 工商登記 | 台中公司設立、行號登記 | 公司變更登記、進出口廠商登記 |
| 簽證審計 | 台中會計師簽證、稅務簽證 | 財務簽證、融資簽證、資本額簽證 |
| 諮詢服務 | 稅務規劃、創業諮詢 | 公司管理制度、教育訓練 |

### 4.3 稅務新聞 /tax-news/

- **分類**:營業稅、所得稅、房地合一、遺贈稅、勞健保、其他
- **每篇文章**:
  - H1:具體問題或事件(例:`公司行號已遷走,房屋稅要按何種稅率課徵?`)
  - **摘要段**(50-80 字,放在最前面)← AEO 最重要
  - 發布日期、作者(會計師名字,掛 Person schema)
  - 內文(H2/H3 結構化)
  - **本文重點**(條列 3-5 點,AI 最愛引用)
  - **相關問答**(FAQPage schema)
  - 相關文章、來源(財政部公告連結等,外部權威連結)

### 4.4 FAQ /faq/(AEO 核心頁)

這頁是 **AEO 的命脈**。AI 抓問答內容最快最乾淨。

**建議分類**:
1. 關於事務所(資歷、收費、流程)
2. 公司/行號設立
3. 記帳與稅務申報
4. 財稅簽證
5. 個人綜所稅

**每題格式**(極重要):
```
Q: (完整問句,像真人會問的,例如「在台中成立有限公司需要準備什麼?」)
A: (第一段用 50-80 字直接回答 — 這是 AI 會直接引用的段落)
   (後續段落補充細節、流程、注意事項)
```

**必須加上 FAQPage schema**,見第六章。

### 4.5 關於我們 /about/

E-E-A-T 在這頁堆好堆滿:
- 事務所成立年份、核心理念
- **會計師團隊**(每位會計師獨立介紹:姓名、執照字號、學經歷、專長)
  - 每人用 `Person` + `hasCredential` schema
- 服務客戶產業別、服務規模
- 得獎/認證/公會會員資格
- 實體辦公室照片(本地 SEO 訊號)

### 4.6 聯絡我們 /contact/

- 聯絡表單(姓名、公司、Email、電話、需求類型、留言)
- 電話、Email、傳真、地址
- **嵌入 Google Maps**
- **營業時間**(掛 OpeningHoursSpecification schema)
- Line 官方帳號 QR Code
- `LocalBusiness` / `AccountingService` schema 全部資訊放這頁

### 4.7 下載專區 /downloads/

保留登入機制,但:
- **分類列表頁公開**(讓 Google 知道我們有哪些文件)
- **檔案本身登入後才能下載**
- 文件命名要 SEO 友善:`113年度-營業稅申報試算表.xlsx`

---

## 五、視覺設計規範

### 5.1 延續既有設計的優點
- 米白色主背景(#FBF8F3 附近)、橘色主 CTA(#F5A623 附近)、深灰 footer
- Logo 為立體方塊線條,現代簡約
- 大標字體粗、留白充足

### 5.2 建議微調
- **字型**:中文建議 `Noto Sans TC` 或 `思源黑體`;英文 `Inter`
- **色票**(建議定義):
  - 主色 Primary:`#2C3E50`(深藍灰,專業感)
  - 強調 Accent:`#F5A623`(橘,既有 CTA 色)
  - 背景 BG:`#FBF8F3`(米白)
  - 文字 Text:`#1A1A1A` / `#4A4A4A`(次要)
  - 邊框 Border:`#E5E5E5`
- **間距系統**:8px 基準(8/16/24/32/48/64/96)
- **圓角**:卡片 12-16px,按鈕 8px 或膠囊形
- **陰影**:極淡(`0 2px 8px rgba(0,0,0,0.04)`),避免過度

### 5.3 RWD 斷點
- Mobile:< 640px
- Tablet:640 - 1024px
- Desktop:1024 - 1440px
- Wide:> 1440px

**首頁六大服務卡片**:Desktop 2-3 欄、Tablet 2 欄、Mobile 1 欄

---

## 六、結構化資料(Schema.org)— AEO + SEO 雙贏

全部用 **JSON-LD** 放在 `<head>`。

### 6.1 全站(每頁都要)
```json
{
  "@context": "https://schema.org",
  "@type": "AccountingService",
  "name": "奇承聯合會計師事務所",
  "alternateName": "Cicpafirm",
  "url": "https://www.cicpafirm.com/",
  "logo": "https://www.cicpafirm.com/logo.svg",
  "image": "https://www.cicpafirm.com/og-image.jpg",
  "telephone": "+886-4-2435-1850",
  "faxNumber": "+886-4-2435-1830",
  "email": "cicpafirm@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "東山路一段156-6號6樓之1",
    "addressLocality": "北屯區",
    "addressRegion": "台中市",
    "postalCode": "406",
    "addressCountry": "TW"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": "24.xxxx", "longitude": "120.xxxx" },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"],
    "opens": "09:00", "closes": "18:00"
  }],
  "areaServed": [{"@type":"City","name":"台中市"},{"@type":"Country","name":"台灣"}],
  "priceRange": "$$"
}
```

### 6.2 FAQ 頁 + 每篇文章末尾 Q&A
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "在台中成立有限公司需要準備什麼?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "在台中設立有限公司需準備:1. 公司名稱預查 2. 股東身分證、印鑑..."
    }
  }]
}
```

### 6.3 稅務新聞每篇
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "datePublished": "2026-02-22",
  "author": {"@type":"Person","name":"王大明 會計師"},
  "publisher": {"@type":"Organization","name":"奇承聯合會計師事務所"}
}
```

### 6.4 服務落地頁
用 `Service` schema,關聯到 `AccountingService` 主體。

### 6.5 麵包屑
每頁都掛 `BreadcrumbList` schema。

---

## 七、AEO 專屬優化細節

### 7.1 llms.txt(放在網站根目錄)
給 AI 看的「站點地圖」,告訴 Claude、ChatGPT 等這站有什麼、該優先引用哪些頁面。

```
# 奇承聯合會計師事務所

> 台中北屯區的會計師事務所,提供中小企業記帳、稅務申報、財簽、工商登記、香港投資移民設立等服務。

## 核心服務
- [會計稅務服務](https://www.cicpafirm.com/services/accounting-tax/): 記帳、各式稅務申報
- [工商登記](https://www.cicpafirm.com/services/business-registration/): 公司行號設立、變更
- [會計師簽證](https://www.cicpafirm.com/services/audit-attestation/): 財簽、稅簽、資本額簽證

## 常見問題
- [FAQ 總覽](https://www.cicpafirm.com/faq/)

## 最新稅務資訊
- [稅務新聞](https://www.cicpafirm.com/tax-news/)
```

### 7.2 內容寫作規則(AEO Copywriting)
1. **每段開頭用結論句**:AI 會優先抓第一句
2. **用完整句子回答**:不要只寫標題,要有「主詞+動詞+受詞」
3. **明確事實**:日期、金額、法條、稅率要精確(例「營業稅稅率 5%」而非「大約 5%」)
4. **引用權威來源**:財政部、經濟部、稅務局官網連結
5. **避免模糊用詞**:少用「可能」「大概」「通常」
6. **在文章最後放 Q&A 小結**:讓 AI 容易摘取

### 7.3 E-E-A-T 信號強化
- 每篇文章**顯示作者**(會計師本人,含執照字號)
- 每篇文章有**更新日期**(稅法常變,新鮮度重要)
- 作者頁連到 LinkedIn、公會會員資訊
- 事務所執業執照、公會證書掃描圖放 About 頁

---

## 八、技術規格

### 8.1 推薦技術棧(可討論)
- **框架**:Next.js 14+(App Router)或 Astro(純靜態更快、SEO 極友善)
- **內容管理**:
  - 小型:稅務新聞用 Markdown + Git(工程師維護)
  - 中型:接 Sanity / Strapi / Payload CMS(業主自己發文)
- **後台**:沿用既有系統,本次不重做(僅需確認能否對新前台提供 API / 資料來源)
- **部署**:Vercel / Cloudflare Pages
- **圖片**:WebP / AVIF、`next/image` 或 Cloudflare Images

### 8.2 效能目標(Core Web Vitals)
- **LCP** < 2.5s
- **INP** < 200ms
- **CLS** < 0.1
- 首頁 Lighthouse SEO / Best Practice / Accessibility / Performance 皆 ≥ 90

### 8.3 SEO 基本配備
- [ ] `<title>` 每頁唯一、≤ 60 字元
- [ ] `<meta name="description">` 每頁唯一、120-160 字元
- [ ] `<link rel="canonical">`
- [ ] Open Graph(og:title / og:image / og:url)+ Twitter Card
- [ ] `hreflang="zh-Hant-TW"`(如未來出英文版需加 `en` 對照)
- [ ] `robots.txt`(允許全站,只擋 `/admin/`)
- [ ] `sitemap.xml`(動態產生,含所有文章與服務頁)
- [ ] 404 頁自訂 + 301 redirect 規則(舊站網址對應)
- [ ] 麵包屑導航(視覺 + schema)

### 8.4 無障礙 (A11y)
- 對比度達 WCAG AA
- 所有 `<img>` 有 `alt`
- 表單欄位有 `<label>`
- 鍵盤可全站操作

---

## 九、本地 SEO Checklist

- [ ] **Google 商家檔案(Google Business Profile)**建立 & 驗證
  - 分類:Certified Public Accountant、Accounting firm、Tax preparation service
  - 上傳辦公室內外照片、團隊照
  - 設定營業時間、服務項目、預約連結
- [ ] 官網嵌入 Google Map iframe
- [ ] NAP 全站 footer 一致
- [ ] 收集 Google 評論(流程化邀請客戶留評)
- [ ] 向台灣在地商家目錄登錄(104、1111 人力搜尋不算,找真的本地目錄)

---

## 十、內容生產計畫(上線後)

### 10.1 初期(上線前必備內容)
- [ ] 5 個服務落地頁(各 800-1500 字)
- [ ] FAQ 頁 30 題起跳
- [ ] About 頁(含每位會計師介紹)
- [ ] 稅務新聞 10-15 篇(可整理事務所既有資料)

### 10.2 長期(每月 2-4 篇)
主題建議:
- 每月稅務申報提醒(如每年 5 月綜所稅)
- 新法規解讀(財政部公告出來就寫)
- 客戶常見問題深度解析
- 產業特化內容(餐飲業報稅、電商營業稅、SOHO 族記帳)

### 10.3 題目選擇原則
用 Google 搜尋框下拉建議 + `people also ask` + Answer the Public + 實際問過的客戶問題為題庫。

---

## 十一、上線前 Checklist

**SEO**
- [ ] 所有頁面有唯一 title / description
- [ ] sitemap.xml 生成並提交到 Google Search Console
- [ ] robots.txt 正確
- [ ] Schema.org 用 Rich Results Test 驗證通過
- [ ] Core Web Vitals 綠燈
- [ ] 手機 / 平板 / 桌機 RWD 測試
- [ ] 死連結檢查

**AEO**
- [ ] llms.txt 放置
- [ ] FAQPage schema 上線
- [ ] 每頁 H1 只有一個、語意清楚
- [ ] 文章首段有「結論句」
- [ ] 至少在 ChatGPT、Perplexity 上搜尋品牌名,確認可被找到

**分析**
- [ ] Google Search Console 驗證
- [ ] Google Analytics 4 安裝
- [ ] Google Tag Manager(可選)
- [ ] 追蹤 CTA 點擊、表單送出事件

---

## 十二、下一步建議

1. **先確認這份 MD 的方向**是否符合您的期待(頁面架構、服務分類、內容走向)
2. **確認技術棧**:Next.js / Astro / WordPress,以及後台要不要重做
3. **內容盤點**:整理既有稅務新聞、服務描述、團隊資料,我們列清單補齊
4. **進入視覺 / Wireframe 階段**:依此 MD 做 Figma 草圖或直接進 coding
5. **域名、主機、GA / GSC 開通**

---

> 文件版本:v1.0 · 2026-04-16
> 如需調整任何區塊,直接在此文件標註,再進入實作階段。
