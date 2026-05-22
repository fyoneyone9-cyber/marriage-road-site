'use client'

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

const STEPS = [
  {
    num: 1,
    title: 'ご契約書類の郵送',
    desc: '「概要書面」「契約書面」「会員規約」を郵送いたします。内容をじっくりご確認ください。',
  },
  {
    num: 2,
    title: 'ご契約日時の確定',
    desc: '記載内容にご納得いただけましたら、契約日時を確定します。オンライン（ZOOM）での実施です。',
  },
  {
    num: 3,
    title: 'ご契約内容の説明会',
    desc: '契約日当日にZoomにてご契約内容の説明を実施。ご不明な点は何でもご質問ください。',
  },
  {
    num: 4,
    title: 'ご契約書類の返送',
    desc: '「概要書面」「契約書面」の順にサインいただき、相談所控え分を郵送でご返送ください。',
  },
  {
    num: 5,
    title: '活動開始',
    desc: 'ご入金確認後、本相談所にてIBJSシステムに登録。登録完了後、すぐに婚活活動を開始できます！',
  },
]

export default function OnlineContractPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Online Contract</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            オンライン契約の流れ
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            全国どこからでもオンラインでご契約いただけます。<br />
            郵送とZOOMを組み合わせた安心・スムーズな契約フローです。
          </p>
        </div>

        {/* ステップ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0', marginBottom: '2rem' }}>
          {STEPS.map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '0' }}>
              {/* ライン */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '1.25rem' }}>
                <div style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  background: PRIMARY,
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                  fontSize: '0.875rem',
                  flexShrink: 0,
                  zIndex: 1,
                }}>
                  {step.num}
                </div>
                {i < STEPS.length - 1 && (
                  <div style={{ width: '2px', flex: 1, background: BORDER, minHeight: '2rem' }} />
                )}
              </div>
              <div style={{ paddingBottom: i < STEPS.length - 1 ? '1.5rem' : 0, flex: 1 }}>
                <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '0' }}>
                  <div style={{ fontWeight: 700, marginBottom: '0.375rem', fontSize: '0.9rem', color: TEXT }}>{step.title}</div>
                  <div style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.7 }}>{step.desc}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 補足 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '2rem' }}>
          <h3 style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.5rem', color: TEXT }}>📌 ご注意事項</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem', color: MUTED, lineHeight: 1.8 }}>
            <li>・契約前にZOOMにて無料相談を実施します（必須）</li>
            <li>・書類の確認期間として余裕を持ったスケジュールをお勧めします</li>
            <li>・書類はPDFでの電子確認も対応可能です</li>
            <li>・ご不明な点はいつでもLINEまたは電話でご相談ください</li>
          </ul>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            オンライン契約の詳細についてもZOOMで丁寧にご説明します。
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
