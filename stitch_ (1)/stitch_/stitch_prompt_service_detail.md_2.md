# Stitch Prompt — 服務落地頁模板(以「會計、稅務服務」為範例)
> 用同樣 prompt 跑 4 次,每次替換服務名稱與內容,即可產出四個服務頁。
> 貼 `---` 之後到 https://stitch.withgoogle.com,**同一個專案繼續**(繼承設計系統)。

---

Design a **service detail landing page** for the Taiwanese CPA firm **奇承聯合會計師事務所 / Cicpafirm**. This page is one of four service pages; use the same design system as the homepage (Ink Forest `#1F3A2E`, Warm Paper `#FBF8F3`, Pale Gold `#C9A961`, Signal Orange `#F5A623` for primary CTAs only, Noto Sans TC + Inter typography, editorial restraint like 天下雜誌 meets Stripe, asymmetric grids, whisper-soft shadows, 1px hairline dividers).

This specific page is for: **會計、稅務服務** (accounting & tax services) — the flagship service.

**LANGUAGE:** All primary content in Traditional Chinese. English only in eyebrow labels.

**PAGE STRUCTURE:**

1. **Sticky Header** — identical to homepage: `奇承聯合會計師事務所` wordmark + `Cicpafirm` subline + nav `服務項目 / 稅務新聞 / 關於我們 / 常見問題 / 聯絡我們` + ghost `會員登入` + orange button `立即諮詢`

2. **Breadcrumb** (just below header):
   - Thin breadcrumb in Text Secondary 13px: `首頁 / 服務項目 / 會計、稅務服務`
   - 1px Hairline below

3. **Service Hero** (editorial, text-dominant):
   - Eyebrow: `SERVICE 03 · 會計稅務`
   - H1 in Noto Sans TC weight 900, 72px: `會計、稅務服務`
   - Under-H1 subtitle in weight 400, 22px, Text Secondary: `台中記帳報稅專家 — 讓帳務成為您決策的依據,而不是年底的夢魘。`
   - Paragraph in body 18px: `從每月傳票輸入到年度所得稅申報,奇承提供一站式會計稅務外包。我們的目標不只是合法申報,而是讓您隨時看得懂自己的財報、守得住合理稅負、接得住銀行融資與稽查查核。`
   - Two CTAs: primary orange `免費諮詢 →` + ghost `下載服務說明 PDF`

4. **Service Scope — `服務內容`:**
   - Eyebrow: `SCOPE OF SERVICE`
   - H2: `我們能為您處理的事`
   - 2-column list of sub-services, each with small Pale Gold bullet + Chinese service name + 1-line explanation:
     - `記帳及傳票輸入` — `每月整理憑證、登錄傳票,確保帳務即時正確。`
     - `營業稅申報` — `二個月一期 401 申報、零稅率案件、退抵稅額申請。`
     - `營利事業所得稅申報` — `年度所得稅結算申報、暫繳申報、未分配盈餘申報。`
     - `綜合所得稅申報` — `負責人與股東個人綜所稅申報、扣抵優化規劃。`
     - `扣繳申報` — `薪資、執行業務所得、利息股利等各式扣繳憑單申報。`
     - `補充保費申報` — `二代健保補充保費計算與代扣代繳。`
     - `勞健保業務` — `員工加退保、級距調整、勞退提撥。`
     - `股東可扣抵稅額申報` — `法定股東資訊與股利申報。`

5. **Who this is for — `誰適合這項服務`:**
   - H2: `誰適合這項服務`
   - 3 cards in a row (NOT overly rounded, radius 4px max, 1px Hairline border):
     - `新設立公司/行號` — `沒有會計人員的新創與微型企業,需要從第一天就把帳建好。`
     - `中小企業老闆` — `規模 3–50 人,找不到也留不住會計人員,但財報不能亂。`
     - `需要銀行融資的公司` — `銀行看帳要看得順,帳務要經得起查核。`

6. **Service Process — `服務流程`(HowTo schema-ready):**
   - H2: `合作流程`
   - Horizontal stepper with 5 steps, each step = large Pale Gold numeral + step title + 1-line description:
     - `01 初步諮詢` — `免費通話 30 分鐘,了解您的事業與帳務現況。`
     - `02 需求評估與報價` — `依公司規模、憑證量、稅務複雜度書面報價。`
     - `03 簽約與資料交接` — `簽定委任契約,交接前期帳冊與會計科目。`
     - `04 每月帳務執行` — `傳票輸入、稅務申報、月度財報產出。`
     - `05 年度結算與對帳` — `所得稅申報、對帳會議、次年度規劃建議。`
   - 1px dashed connector line in Pale Gold between steps

7. **Pricing Principle — `收費說明`:**
   - H2: `收費怎麼算?`
   - 2-column layout: left holds a paragraph explaining the pricing philosophy (依憑證量、申報複雜度、報表需求三個因子計價,避免套餐綁死); right shows 3 reference tiers in a minimal table:
     - `輕量` — `每月憑證 < 50 張` — `NT$ 3,500 / 月起`
     - `標準` — `每月憑證 50–200 張` — `NT$ 6,000 / 月起`
     - `進階` — `每月憑證 > 200 張 或 需管理報表` — `依需求客製`
   - Footer note: `以上為參考區間,實際報價依初步諮詢後書面評估。`

8. **Related FAQ — `這項服務的常見問題`:**
   - 4 accordion items (collapsed), questions in Chinese:
     - `我已經用某家記帳業者,中途轉換給奇承會不會有銜接問題?`
     - `我的憑證可以用 LINE 或 Email 傳嗎,還是一定要實體?`
     - `我只是小型 SOHO,有必要找會計師做記帳嗎?`
     - `報稅季會不會收加急費?`

9. **Bottom CTA section** — Ink Forest full-bleed:
   - H2 in warm paper: `準備交出帳務這件事了嗎?`
   - Subtitle: `第一次諮詢免費,我們會先聽您說,再評估是否適合合作。`
   - Orange button `預約免費諮詢 →` + inline link `或直撥 04-2435-1850`

10. **Footer** — identical 4-column structure as homepage with NAP and links

**CRITICAL:** Preserve the design system from homepage. Do NOT invent English service names. Do NOT add stock photos. Keep hairline dividers, asymmetric grids, editorial whitespace.
