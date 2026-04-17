# Stitch Prompt — FAQ 完整頁(AEO 核心頁)
> 貼 `---` 之後到 Stitch,**同一個專案繼續**(繼承設計系統)。
> 此頁是 AEO 命脈,結構化清楚比視覺華麗更重要。

---

Design a **full FAQ page** for the Taiwanese CPA firm **奇承聯合會計師事務所 / Cicpafirm**. This page is the firm's Answer Engine Optimization (AEO) cornerstone — AI search engines (ChatGPT, Perplexity, Google SGE) should be able to extract clean Q&A pairs from it. Visual clarity and semantic structure outweigh decoration.

Use the existing homepage design system: Ink Forest `#1F3A2E`, Warm Paper `#FBF8F3`, Pale Gold `#C9A961`, Signal Orange `#F5A623` (CTAs only), Noto Sans TC + Inter, editorial restraint, 1px hairlines.

**LANGUAGE:** Traditional Chinese primary; English only in eyebrow/category tags.

**PAGE STRUCTURE:**

1. **Sticky Header** — same as homepage.

2. **Breadcrumb:** `首頁 / 常見問題`

3. **Page Hero** (simpler than homepage, text-only):
   - Eyebrow: `FAQ · 常見問題`
   - H1 in Noto Sans TC weight 900, 80px: `關於會計、稅務、設立公司的問題,我們都整理在這裡`
   - Paragraph 18px Text Secondary: `這頁集合了客戶最常問我們的問題。如果您想問的不在這裡,歡迎直接來信、來電,或預約免費初談。`
   - Below paragraph: a live search bar (input field with search icon) with placeholder `搜尋問題關鍵字,例如「發票」「營業稅」「設立」`
   - Thin Pale Gold hairline below

4. **Category Filter Chips Row** (sticky just below header on scroll):
   - Horizontal row of category pills (radius 4px, NOT fully pill, with 1px Hairline border):
     - `全部` (active — filled Ink Forest with warm paper text)
     - `關於事務所`
     - `公司/行號設立`
     - `記帳與稅務申報`
     - `財稅簽證`
     - `個人綜所稅`
   - Clicking a chip filters the Q&A stack below with a smooth cross-fade

5. **Q&A Accordion Groups** — organized by category, each category with its own header:

   **Category 1: 關於事務所**
   - Q: `奇承聯合會計師事務所服務哪些區域的客戶?` — A: `我們位於台中市北屯區,主要服務中部地區(台中、彰化、南投)的中小企業,也服務全台以遠距方式合作的客戶。海外客戶以香港投資移民設立為主。`
   - Q: `初次諮詢需要費用嗎?`
   - Q: `你們有幾位會計師?`
   - Q: `收費大約多少?`

   **Category 2: 公司/行號設立**
   - Q: `在台中成立有限公司需要準備什麼文件?` — A: `需準備:公司名稱預查、股東身分證與印鑑、公司章程、資本額證明、公司地址使用同意書。依公司型態(有限/股份/行號)略有不同,我們可協助從命名到核准一路代辦,一般約 2–3 週完成。`
   - Q: `公司行號要選哪一種?差別在哪?`
   - Q: `沒有實體辦公室可以申請公司設立嗎?`
   - Q: `資本額該設多少?`
   - Q: `公司要變更負責人/地址/營業項目,怎麼辦?`

   **Category 3: 記帳與稅務申報**
   - Q: `營業稅申報每兩個月一次,我的公司也適用嗎?`
   - Q: `記帳服務的收費怎麼計算?`
   - Q: `我的憑證可以用 LINE 或 Email 傳嗎?`
   - Q: `我只是 SOHO,需要找會計師記帳嗎?`
   - Q: `營業稅零申報可以自己弄嗎?`
   - Q: `報稅季會不會收加急費?`

   **Category 4: 財稅簽證**
   - Q: `什麼情況下我需要會計師做財務簽證?`
   - Q: `稅務簽證與財務簽證差在哪?`
   - Q: `銀行要求融資簽證,這是什麼?`
   - Q: `資本額簽證要多久?`

   **Category 5: 個人綜所稅**
   - Q: `我領薪水又有兼職收入,綜所稅要怎麼報?`
   - Q: `房屋出租的租賃所得怎麼申報?`
   - Q: `收到財政部補稅單,要不要找會計師?`

   - Each accordion item structure:
     - Collapsed state: question in weight 700 18px Ink Forest on the left, `+` icon on the right, 1px Hairline below the row
     - Expanded state: answer appears below the question in Text Secondary 15–16px, line-height 1.8, paragraph form (NOT bullets unless necessary); 500ms smooth ease; `+` rotates to `−`
     - The FIRST question of each category starts expanded as a hint

6. **"沒找到答案?" Band** (before footer CTA):
   - Full-bleed Warm Paper band with 1px Pale Gold hairline top and bottom
   - Centered: H3 `沒找到您的問題?`
   - Subtitle: `每個案件都有自己的細節,歡迎直接告訴我們您遇到的狀況。`
   - Primary orange button `預約免費初談 →` + inline link `或直撥 04-2435-1850`

7. **Footer** — identical 4-column structure.

**AEO TECHNICAL NOTES (Stitch should reflect these in markup structure even if invisible):**
- Each Q should be semantically a `<h3>` or `<button aria-expanded>` with the question text
- Each A should be a sibling `<div>` or `<p>` directly following
- No Q&A pair should be split across distant DOM nodes (AI parsers prefer adjacency)
- The page should render all Q&A pairs in the DOM even when collapsed (use CSS max-height, not conditional render) — so AI crawlers see all content

**CRITICAL:** Keep it quiet, scannable, and trustworthy. No icons decorating every question. No gradient backgrounds. Hairlines and whitespace do the work.
