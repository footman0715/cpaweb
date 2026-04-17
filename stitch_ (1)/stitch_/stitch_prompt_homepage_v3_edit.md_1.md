# Stitch Edit Prompt — 首頁 V3(在 V2 基礎上補兩段、修 3 處)
> 在 Stitch 裡對現有首頁使用 **Edit** 功能(不是重新生成),貼入 `---` 之後內容。

---

Edit the existing homepage with the following specific changes. Preserve everything else exactly — color palette, typography, layout rhythm, card asymmetry, and tone.

**A. Header fixes:**
1. Change the English wordmark in the logo area from "KIC CPA" to "Cicpafirm" (smaller, beneath the Chinese name in weight 400, 10px, Text Secondary color `#4A4A4A`). The Chinese name `奇承聯合會計師事務所` stays exactly as-is.
2. Rename navigation items to exactly these five, in this order: `服務項目` / `稅務新聞` / `關於我們` / `常見問題` / `聯絡我們`
3. Add a small ghost text link `會員登入` (size 14px, color Ink Forest `#1F3A2E`, no border) immediately to the LEFT of the existing orange `立即諮詢` button. Preserve the orange button.

**B. Insert a NEW section between "四大核心服務" and "最新稅務新聞" — titled `為什麼選擇奇承`:**
- Eyebrow label above H2: `WHY CICPAFIRM` in Pale Gold `#C9A961`, 12px all-caps, tracked
- H2: `為什麼選擇奇承` in Noto Sans TC weight 900, 48px, Ink Forest
- Below H2, a single-line explanation in Text Secondary 16px: `四個我們持續被客戶選擇的理由。`
- 4 equal columns (on desktop; stack to 1-column on mobile), separated by 1px vertical hairlines in Pale Gold at 30% opacity
- Each column contains:
  - Large number in Pale Gold at top, Inter tabular numerals, 56px weight 300: `01` / `02` / `03` / `04`
  - Bold Chinese heading, 20px weight 700, Ink Forest
  - 2-line Chinese description in Text Secondary, 15px, line-height 1.7
- Four points (verbatim content):
  - **01** · `20+ 年在地深耕` — `深耕台中超過二十年,熟悉中部產業結構、在地稅務實務與政府查核重點。`
  - **02** · `一站式服務整合` — `公司設立、記帳報稅、財簽、稅務規劃四條服務線一條龍,免去跨所溝通成本。`
  - **03** · `專業會計師團隊` — `4 位執業會計師親自把關關鍵案件,非單人作業,重要節點共同會審。`
  - **04** · `透明收費原則` — `依實際服務範圍與工作量評估,事前書面報價,無隱藏費用,無後續加收。`
- Section padding: 96px top and bottom desktop
- Background: Warm Paper `#FBF8F3`

**C. Insert a NEW section between "最新稅務新聞" and the dark green CTA section — titled `客戶最常問`:**
- Eyebrow: `FAQ · 常見問題` in Pale Gold
- Two-column layout:
  - Left column (40% width):
    - H2: `客戶最常問` in Noto Sans TC weight 900, 48px, Ink Forest
    - Paragraph in Text Secondary 16px line-height 1.75: `下列是我們每個月會被問到的問題。如您的情況更特殊,歡迎預約免費初談,我們會依照您的事業階段給予具體建議。`
    - Ghost link `查看完整 FAQ →` in Ink Forest 14px, with a subtle Pale Gold underline on hover
  - Right column (60% width): a vertical stack of 5 accordion items, each item separated by 1px Hairline
    - Each accordion: question in weight 700 18px Ink Forest on the left, a `+` icon on the right (turns into `−` when expanded), clicking smoothly expands to reveal answer in Text Secondary 15px line-height 1.75 with 500ms ease
    - Use these five questions verbatim (they start collapsed, except the first one which is expanded by default):
      1. `在台中成立有限公司需要準備什麼文件?` (expanded) — Answer: `需準備公司名稱預查申請、股東身分證與印鑑、公司章程、資本額證明、公司地址使用同意書等。實際文件依公司型態(有限/股份/行號)略有不同,建議先聯絡我們確認。`
      2. `營業稅申報每兩個月一次,我的公司也適用嗎?`
      3. `什麼情況下我需要會計師做財務簽證?`
      4. `記帳服務的收費怎麼計算?`
      5. `沒有實體辦公室可以申請公司設立嗎?`
- Section padding: 96px top and bottom desktop
- Background: Warm Paper `#FBF8F3`

**D. CTA section (dark green) — small adjustments:**
1. Replace the placeholder phone `04-XXXX-XXXX` with `04-2435-1850`
2. Ensure the address reads `台中市北屯區東山路一段156-6號6樓之1` (not 太平區 / 長億六街)
3. Keep the orange `預約專業諮詢` button and its position

**E. Footer expansion:**
- Expand from the current compact footer to 4 columns:
  - Column 1: `奇承聯合會計師事務所 Cicpafirm` wordmark + 1-line description `台中北屯的會計師事務所,專業服務中小企業超過 20 年。`
  - Column 2: heading `服務項目` + links: `工商登記` / `會計師簽證及審計` / `會計、稅務服務` / `諮詢服務`
  - Column 3: heading `關於` + links: `關於我們` / `稅務新聞` / `常見問題` / `下載專區`
  - Column 4: heading `聯絡` + `TEL 04-2435-1850` / `FAX 04-2435-1830` / `cicpafirm@gmail.com` / `台中市北屯區東山路一段156-6號6樓之1`
- Bottom bar separated by a 1px Hairline:
  - Left: `© 2026 奇承聯合會計師事務所 · All rights reserved`
  - Right: `隱私權政策` · `使用條款`
  - Both in 13px Text Secondary

Do NOT modify: hero section, 四大核心服務 card layout, dark green CTA background, the overall color palette, or typography system.
