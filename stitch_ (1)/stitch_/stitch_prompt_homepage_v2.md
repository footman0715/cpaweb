# Stitch Prompt V2 — 奇承聯合會計師事務所首頁
> V1 problem: Stitch mistook "Japanese architecture firm" metaphor as the actual business.
> V2 fix: all architecture references removed, brand name + service names + contact info hard-pinned as VERBATIM.
> Paste content below (after the ---) into https://stitch.withgoogle.com, Web / Desktop-first.

---

Design the homepage for a **Certified Public Accountant (CPA) firm in Taiwan**. This is an accounting and tax firm, NOT an architecture firm, NOT a wealth management boutique, NOT a design studio. The firm serves small-to-medium Taiwanese businesses with bookkeeping, tax filing, financial attestation, and business registration services.

**FIRM IDENTITY — USE VERBATIM, DO NOT SUBSTITUTE, DO NOT TRANSLATE TO ENGLISH:**
- Firm name (Chinese, primary): **奇承聯合會計師事務所**
- Firm name (English, secondary only): **Cicpafirm**
- Tagline (verbatim): **台中中小企業信賴的會計師事務所**
- Subheadline (verbatim): **記帳、稅務申報、財簽、工商登記 — 一站整合,專業為您守護**
- Address (verbatim): **台中市太平區長億六街 315 號**
- Phone (verbatim): **04-2351-1112**
- Fax (verbatim): **04-2273-2142**
- Email (verbatim): **cicpafirm@gmail.com**
- Business hours (verbatim): **週一至週五 09:00 – 18:00**

**LANGUAGE RULES — STRICTLY ENFORCED:**
- Primary language: **Traditional Chinese (繁體中文)**. All headings, body text, buttons, navigation, service names, and article titles MUST be in Traditional Chinese.
- English is allowed ONLY for: small all-caps eyebrow labels above sections (e.g., "SERVICES", "INSIGHTS", "FAQ") and the "Cicpafirm" wordmark in the logo lockup.
- Do NOT write article titles, CTAs, or service names in English. Do NOT use Japanese kanji variants.

**THE FOUR SERVICES — NAME THEM EXACTLY AS WRITTEN BELOW:**
1. **工商登記** — 公司/行號設立、變更登記、進出口廠商登記
2. **會計師簽證及審計** — 財務簽證、稅務簽證、資本額簽證、融資簽證
3. **會計、稅務服務** — 記帳、營業稅申報、所得稅申報、扣繳申報、勞健保
4. **諮詢服務** — 稅務規劃、創業諮詢、公司管理制度、教育訓練

Do NOT replace these with terms like "Strategic Audit", "Tax Structuring", "Legacy Planning", "Risk Advisory" — those are wrong.

**DESIGN SYSTEM:**
- Platform: Web, desktop-first, responsive to 390px mobile
- Palette:
  - Primary (Ink Forest): `#1F3A2E`
  - Canvas (Warm Paper): `#FBF8F3`
  - Accent (Pale Gold): `#C9A961` — hairlines, eyebrow labels, numeric markers ONLY
  - CTA (Signal Orange): `#F5A623` — primary buttons ONLY, nowhere else
  - Text Secondary: `#4A4A4A`
  - Hairline: `#E5E1D8`
- Typography:
  - Chinese: Noto Sans TC — headings 900, body 400/500
  - English (eyebrows, numbers only): Inter — tabular numerals for all statistics
  - Hero H1: 80–96px desktop; Section H2: 48–56px; Body: 16–18px line-height 1.75
- Styles:
  - Squared-off edges (max 4px radius on cards, 6px on buttons) — NO pill shapes, NO large rounding
  - Whisper-soft shadows only: `0 1px 2px rgba(31,58,46,0.04)`; lifted cards use `0 8px 24px rgba(31,58,46,0.06)`
  - 1px hairline dividers everywhere instead of heavy borders
  - 96px section padding desktop
  - No gradients, no glassmorphism (except header on scroll), no photography of people or buildings

**ATMOSPHERE — USE THESE REFERENCES, NOT ARCHITECTURE:**
- A clean Taiwanese business publication like **天下雜誌** (CommonWealth Magazine)
- Financial editorial restraint like **The Economist** or **Nikkei Asia**
- Product-informational calm like **MUJI** or **無印良品** catalogs
- Software landing page discipline like **Stripe** or **Linear**

Do NOT reference: architecture firms, interior design studios, boutique wealth managers, luxury lifestyle brands, Kinfolk magazine, stone/wood/material photography, Japanese tea ceremony imagery. The firm is a Taiwanese accounting office serving SMEs — sophisticated but grounded, not precious.

**PAGE STRUCTURE:**

1. **Sticky Header:**
   - Transparent over warm paper, frosted blur on scroll
   - Left: `奇承聯合會計師事務所` wordmark in Ink Forest 18px weight 900 + small "Cicpafirm" English lockup below in 10px Text Secondary
   - Center: navigation — `服務項目` · `稅務新聞` · `常見問題` · `關於我們` · `聯絡我們`
   - Right: ghost link `會員登入` + primary button `免費諮詢` in Signal Orange

2. **Hero Section (asymmetric, editorial):**
   - 12-column grid, content in columns 2–9
   - Eyebrow label in Pale Gold 12px all-caps tracked: `CICPAFIRM · 台中 · EST. 2005`
   - H1 in Noto Sans TC weight 900, 88px: **台中中小企業信賴的會計師事務所**
   - Subheading weight 400, 22px: **記帳、稅務申報、財簽、工商登記 — 一站整合,專業為您守護**
   - Two buttons: primary `免費諮詢 →` in Signal Orange; secondary `查看服務項目` as ghost with Ink Forest 1px border
   - Thin hairline divider then trust statistics row (Inter tabular numerals for numbers, Chinese labels):
     - **20+** 年服務經驗
     - **500+** 企業客戶
     - **4** 位執業會計師
   - Columns 10–12: intentionally empty with only a thin vertical hairline and rotated small English text "CERTIFIED PUBLIC ACCOUNTANTS · TAICHUNG"
   - NO hero photograph, NO building image, NO stone/wood texture, NO person photo

3. **Services Section — `四大核心服務`:**
   - Eyebrow: `SERVICES · 服務項目`
   - H2: `四大核心服務`
   - Asymmetric layout (NOT 4 equal columns):
     - Row 1: card A spans columns 1–5 (taller, "flagship"), card B spans columns 6–12 (shorter)
     - Row 2: card C spans columns 1–7, card D spans columns 8–12
   - Card content (use exactly these service names):
     - Card A (flagship): `01` · `會計、稅務服務` — description: `記帳及傳票輸入、營業稅與所得稅申報、扣繳與補充保費、勞健保業務一站處理。` — chips: `記帳` / `營業稅` / `所得稅`
     - Card B: `02` · `工商登記` — description: `公司與行號設立、變更登記、進出口廠商登記,從命名到核准一路代辦。` — chips: `公司設立` / `變更登記`
     - Card C: `03` · `會計師簽證及審計` — description: `財務簽證、稅務簽證、資本額簽證、融資簽證,支援銀行融資與法定查核需求。` — chips: `財簽` / `稅簽` / `融資簽證`
     - Card D: `04` · `諮詢服務` — description: `稅務規劃、創業諮詢、公司管理制度建置、會計稅務教育訓練。` — chips: `稅務規劃` / `創業諮詢`
   - Each card: warm paper background, 1px Hairline border, 48px inner padding, small Pale Gold numeric `0X` top-left in Inter, service title 32px weight 900, arrow icon `→` bottom-right that nudges right 4px on hover
   - On hover: whisper-soft shadow lift

4. **Why Cicpafirm Section — `為什麼選擇奇承`:**
   - Eyebrow: `WHY CICPAFIRM`
   - 4 columns, each with:
     - Large tabular numeral or minimal line-icon (Pale Gold, 64px)
     - Bold Chinese statement 20px weight 700 Ink Forest
     - 2-line Chinese explanation in Text Secondary
   - Four points (verbatim):
     - **20+ 年在地深耕** — 深耕台中太平,熟悉中部產業結構與在地稅務實務。
     - **一站式服務整合** — 從公司設立到財報簽證,四大服務線一條龍完成。
     - **專業會計師團隊** — 4 位執業會計師親自把關,非單人作業。
     - **透明收費原則** — 依服務範圍與工作量評估,事前報價無隱藏費用。
   - Separated by 1px vertical hairlines in Pale Gold at low opacity

5. **Latest Tax News — `最新稅務新聞` (editorial list, NOT card grid):**
   - Eyebrow: `INSIGHTS · 稅務新聞`
   - H2 with inline right-aligned ghost link `查看全部 →`
   - Three article rows separated by 1px hairlines, each row:
     - Left 120px: date `2026.04.12` in Inter + category tag `營業稅` in Pale Gold all-caps-style small label
     - Middle flexible: article title in Noto Sans TC weight 700 24px Ink Forest + one-line Chinese excerpt below in Text Secondary
     - Right: arrow `→`
   - Sample article titles (use these — real Taiwanese tax topics, NOT invented English titles):
     - `公司行號已遷走,房屋稅要按何種稅率課徵?` — category: `房屋稅` — date: `2026.04.12`
     - `113 年度營業稅申報常見 5 大錯誤與修正方式` — category: `營業稅` — date: `2026.04.05`
     - `新創公司第一年該知道的扣繳與股東申報重點` — category: `創業稅務` — date: `2026.03.28`
   - Feels like the front page of 天下雜誌 or 商業周刊

6. **Featured FAQ — `客戶最常問`:**
   - Eyebrow: `FAQ · 常見問題`
   - Two-column: left column holds H2 `客戶最常問` + short paragraph + ghost link `查看完整 FAQ →`; right column holds 5 accordion items
   - Use these real Chinese questions (verbatim):
     - `在台中成立有限公司需要準備什麼文件?`
     - `營業稅申報每兩個月一次,我的公司也適用嗎?`
     - `什麼情況下我需要會計師做財務簽證?`
     - `記帳服務的收費怎麼計算?`
     - `沒有實體辦公室可以申請公司設立嗎?`
   - Each accordion: question 18px weight 700 Ink Forest, +/− icon right, expand reveals answer in Text Secondary with 500ms ease

7. **Contact CTA — `與我們談談您的需求` (the only dark section):**
   - Full-bleed Ink Forest background
   - 12-column grid:
     - Columns 2–6: H2 in warm paper `與我們談談您的需求`, subtext in warm paper 60% opacity `免費初談,依您的事業階段提供最適合的服務建議。`, primary button `預約免費諮詢 →` in Signal Orange, inline secondary link `或直撥 04-2351-1112`
     - Columns 7–11: muted/desaturated Google Map placeholder pinning Taichung Taiping District; beneath map in Inter small type display:
       - `台中市太平區長億六街 315 號`
       - `週一至週五 09:00 – 18:00`
       - `cicpafirm@gmail.com`
   - Pale Gold 1px hairline separates this section from footer

8. **Footer:**
   - Warm paper background
   - 4 columns:
     - Column 1: wordmark `奇承聯合會計師事務所` + 1-line description `台中太平的會計師事務所,專業服務中小企業超過 20 年。`
     - Column 2: `服務項目` heading + links: `工商登記` / `會計師簽證及審計` / `會計、稅務服務` / `諮詢服務`
     - Column 3: `關於` heading + links: `關於我們` / `稅務新聞` / `常見問題` / `下載專區`
     - Column 4: `聯絡` heading + `TEL 04-2351-1112` / `FAX 04-2273-2142` / `cicpafirm@gmail.com` / `台中市太平區長億六街 315 號`
   - Bottom bar after hairline: left `© 2026 奇承聯合會計師事務所 · All rights reserved`, right `隱私權政策 · 使用條款`, all in 13px Text Secondary

**FINAL CRITICAL CONSTRAINTS:**
- This is a CPA (accounting) firm — NOT an architecture firm, NOT a design studio, NOT a wealth management boutique
- Do NOT rename the firm. It is `奇承聯合會計師事務所` / `Cicpafirm`. Never `MAARCHITECTS`, `Kenzai & Co.`, `Atelier`, or any invented name
- Do NOT use English service names. Services are in Traditional Chinese, named exactly as specified
- Do NOT fabricate English article titles. News items are Taiwanese tax topics in Chinese
- Do NOT include photos of buildings, stone, wood, or people
- Signal Orange CTA appears only in header button, hero primary button, contact section primary button
- Overall feel: a trustworthy Taiwanese professional services firm with editorial restraint — think 天下雜誌 meets Stripe, in Traditional Chinese
