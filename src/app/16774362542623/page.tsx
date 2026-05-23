import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: { index: false, follow: false },
}


const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

export default function DokushinShoumeishoPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Certificate</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            独身証明書とは？
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            結婚相談所への入会に必要な「独身証明書」についてご説明します。
          </p>
        </div>

        {/* 法律根拠 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.5rem', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.75rem', color: PRIMARY, fontWeight: 600, marginBottom: '0.5rem' }}>📜 法的根拠</div>
          <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.75rem', color: TEXT }}>民法732条との関係</h2>
          <p style={{ fontSize: '0.875rem', color: MUTED, lineHeight: 1.8 }}>
            独身証明書は、民法第732条の「重婚の禁止」の規定に抵触しないことを証明する書類です。
            国内の結婚情報サービス・結婚相談業者に独身であることを証明するために提出します。
          </p>
        </div>

        {/* Q&A形式 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {[
            {
              q: '独身証明書はどこで発行されますか？',
              a: '全国の市役所・区役所で発行できます。お住まいの市区町村の窓口にてお申し込みください。一部の役所では郵送での申請・受け取りにも対応しています。',
            },
            {
              q: '発行にはどのくらいかかりますか？',
              a: '窓口申請の場合、即日発行が可能な場合がほとんどです。郵送申請の場合は1〜2週間程度かかります。手数料は概ね300円前後です。',
            },
            {
              q: '結婚相談所では必ず必要ですか？',
              a: 'IBJ加盟の結婚相談所では提出が必須です。これにより全会員の独身性が保証されており、安心・安全な婚活環境が維持されています。',
            },
            {
              q: '当相談所で代行サービスはありますか？',
              a: 'マレッジロードジャパンでは、IBJ正規加盟店として独身証明書取得のサポートを行っています。申請方法のご案内や、書類確認などのサポートが可能です。詳しくはご相談ください。',
            },
          ].map((item, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem' }}>
              <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: PRIMARY }}>Q. {item.q}</div>
              <div style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.75 }}>A. {item.a}</div>
            </div>
          ))}
        </div>

        {/* 市役所リンク */}
        <div style={{ background: `rgba(201,169,110,0.12)`, border: `1px solid rgba(201,169,110,0.4)`, borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '0.5rem' }}>市役所・区役所の連絡先検索</div>
          <a href="https://www.mapion.co.jp/phonebook/M14004/" target="_blank" rel="noopener noreferrer"
            style={{ color: ACCENT, fontWeight: 600, fontSize: '0.875rem', textDecoration: 'underline' }}>
            📍 全国市区町村の連絡先はこちら
          </a>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            独身証明書の取得方法など、入会に必要な手続きについてご説明します。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
            <a href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf" target="_blank" rel="noopener noreferrer"
              style={{ background: PRIMARY, color: 'white', textDecoration: 'none', padding: '0.75rem 2rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem', display: 'inline-block' }}>
              📅 ZOOM無料相談を予約する
            </a>
            <a href="https://lin.ee/UxgdZ7F" target="_blank" rel="noopener noreferrer"
              style={{ background: '#06C755', color: 'white', textDecoration: 'none', padding: '0.75rem 2rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem', display: 'inline-block' }}>
              💬 LINEで相談する
            </a>
            <a href="tel:050-1807-3163"
              style={{ border: `2px solid ${PRIMARY}`, color: PRIMARY, background: 'white', textDecoration: 'none', padding: '0.625rem 2rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem', display: 'inline-block' }}>
              📞 050-1807-3163
            </a>
          </div>
        </div>

      </div>
    </div>
  )
}
