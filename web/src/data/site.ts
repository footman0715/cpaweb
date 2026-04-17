export const site = {
  name: '奇承聯合會計師事務所',
  brand: 'Cicpafirm',
  tagline: '台中中小企業信賴的會計師事務所',
  subtagline: '記帳、稅務申報、財簽、工商登記 — 一站整合,專業為您守護',
  description:
    '奇承聯合會計師事務所位於台中北屯,提供中小企業記帳、營業稅與所得稅申報、財務簽證、工商登記等一站式會計稅務服務。',
  founded: 2005,
  address: '台中市北屯區東山路一段156-6號6樓之1',
  district: '北屯區',
  postalCode: '406',
  tel: '04-2435-1850',
  telE164: '+886-4-2435-1850',
  fax: '04-2435-1830',
  faxE164: '+886-4-2435-1830',
  email: 'cicpafirm@gmail.com',
  hours: '週一至週五 09:00 – 18:00',
  url: 'https://www.cicpafirm.com',
  socials: {},
} as const;

export const nav = [
  { href: '/services/', label: '服務項目' },
  { href: '/tax-news/', label: '稅務新聞' },
  { href: '/about/', label: '關於我們' },
  { href: '/faq/', label: '常見問題' },
  { href: '/contact/', label: '聯絡我們' },
] as const;

export const services = [
  {
    slug: 'accounting-tax',
    num: '01',
    title: '會計、稅務服務',
    short: '記帳、營業稅與所得稅申報、扣繳與補充保費、勞健保業務一站處理。',
    keywords: ['記帳', '營業稅', '所得稅'],
    flagship: true,
  },
  {
    slug: 'business-registration',
    num: '02',
    title: '工商登記',
    short: '公司與行號設立、變更登記、進出口廠商登記,從命名到核准一路代辦。',
    keywords: ['公司設立', '變更登記'],
    flagship: false,
  },
  {
    slug: 'audit-attestation',
    num: '03',
    title: '會計師簽證及審計',
    short: '財務簽證、稅務簽證、資本額簽證、融資簽證,支援銀行融資與法定查核需求。',
    keywords: ['財簽', '稅簽', '融資簽證'],
    flagship: false,
  },
  {
    slug: 'consulting',
    num: '04',
    title: '諮詢服務',
    short: '稅務規劃、創業諮詢、公司管理制度建置、會計稅務教育訓練。',
    keywords: ['稅務規劃', '創業諮詢'],
    flagship: false,
  },
] as const;

export const whyUs = [
  {
    num: '01',
    title: '20+ 年在地深耕',
    body: '深耕台中超過二十年,熟悉中部產業結構、在地稅務實務與政府查核重點。',
  },
  {
    num: '02',
    title: '一站式服務整合',
    body: '公司設立、記帳報稅、財簽、稅務規劃四條服務線一條龍,免去跨所溝通成本。',
  },
  {
    num: '03',
    title: '專業會計師團隊',
    body: '4 位執業會計師親自把關關鍵案件,非單人作業,重要節點共同會審。',
  },
  {
    num: '04',
    title: '透明收費原則',
    body: '依實際服務範圍與工作量評估,事前書面報價,無隱藏費用,無後續加收。',
  },
] as const;

export const featuredNews = [
  {
    date: '2026.04.12',
    category: '房屋稅',
    slug: 'company-moved-house-tax-rate',
    title: '公司行號已遷走,房屋稅要按何種稅率課徵?',
    excerpt:
      '稅捐稽徵處表示,原供營業使用之房屋,於所得課稅變更使用執照或變更使用執照前實際已停止營業,應依其實際使用情形課徵房屋稅。',
  },
  {
    date: '2026.04.05',
    category: '營業稅',
    slug: '113-vat-filing-common-mistakes',
    title: '113 年度營業稅申報常見 5 大錯誤與修正方式',
    excerpt:
      '財政部近期彙整營業稅申報常見錯誤,包含虛項憑證申報抵扣規定、跨境電商交易稅額計算等常見疏漏,協助納稅人事前避免。',
  },
  {
    date: '2026.03.28',
    category: '創業稅務',
    slug: 'first-year-startup-withholding',
    title: '新創公司第一年該知道的扣繳與股東申報重點',
    excerpt:
      '新設公司第一年最常忽略的並非申報本身,而是扣繳義務與股東可扣抵稅額的整備,一旦漏報將影響次年度申報與融資評估。',
  },
] as const;

export const featuredFaq = [
  {
    q: '在台中成立有限公司需要準備什麼文件?',
    a: '需準備:公司名稱預查、股東身分證與印鑑、公司章程、資本額證明、公司地址使用同意書。依公司型態(有限/股份/行號)略有不同,我們可協助從命名到核准一路代辦,一般約 2–3 週完成。',
  },
  {
    q: '營業稅申報每兩個月一次,我的公司也適用嗎?',
    a: '一般營業人採二個月一期(401 申報),但採查定課徵或小規模營業人可能每季申報。實際申報頻率以國稅局核定為準,新設立公司我們會在建檔時確認。',
  },
  {
    q: '什麼情況下我需要會計師做財務簽證?',
    a: '依公司法與相關法規,實收資本額新台幣 3,000 萬元以上、或銀行授信、股東要求、上市櫃查核等情況,通常會要求會計師財務簽證。我們可協助評估是否需要。',
  },
  {
    q: '記帳服務的收費怎麼計算?',
    a: '依每月憑證張數、申報複雜度、是否需管理報表三個因子計價。一般中小企業約 NT$ 3,500 – 6,000 / 月,實際以書面報價為準,無隱藏費用。',
  },
  {
    q: '沒有實體辦公室可以申請公司設立嗎?',
    a: '可以。可使用商務中心地址、住家地址(需符合土地使用分區)或虛擬辦公室。不同地址類型各有稅務與法遵差異,我們可在諮詢時協助評估最合適的選項。',
  },
] as const;
