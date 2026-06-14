import Link from 'next/link'
import type { Metadata } from 'next'

const PRIMARY = '#b76e79'
const ACCENT = '#c9a96e'

export const metadata: Metadata = {
  title: 'オンライン婚活・ZOOM対応の結婚相談所【全国対応】マレッジロードジャパン',
  description: 'ZOOMを使ったオンライン婚活で全国から婚活できます。マレッジロードジャパンはZOOM完全対応。海老名市に来られない方も安心してご相談ください。',
  keywords: ['オンライン婚活', 'ZOOM婚活', '結婚相談所', '全国対応', 'ZOOM相談'],
  alternates: { canonical: 'https://marriage-road.jp/lp/online-marriage' },
}

export default function OnlineMarriageLpPage() {
  return (
    <div style={{ background: '#faf7f5', minHeight: '100vh', fontFamily: "'Noto Sans JP', sans-serif", color: '#2d2020' }}>
      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, #4a5568, #6b3a4a)`, color: '#fff', padding: '60px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', borderRadius: 20, padding: '4px 16px', fontSize: 12, marginBottom: 20, fontWeight: 700 }}>
            💻 ZOOM完全対応 ｜ 全国どこからでもOK
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 5vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.3 }}>
            <span style={{ color: ACCENT }}>オンライン婚活</span>で<br />全国から婚活できる
          </h1>
          <p style={{ fontSize: 15, opacity: 0.9, marginBottom: 32, lineHeight: 1.7 }}>
            ZOOMを使えば自宅から婚活OK。<br />
            神奈川県外の方もマレッジロードジャパンで本格婚活が始められます。
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: '#fff', color: PRIMARY, fontWeight: 900, borderRadius: 50, padding: '14px 40px', fontSize: 15, textDecoration: 'none' }}>
            無料ZOOM相談を申し込む →
          </Link>
        </div>
      </section>

      {/* オンラインのメリット */}
      <section style={{ padding: '60px 16px', background: '#fff' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 32, color: PRIMARY, textAlign: 'center' }}>オンライン婚活のメリット</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
            {[
              { icon: '🏠', title: '自宅から参加', desc: '慣れた環境でリラックスして面談できる' },
              { icon: '⏰', title: '時間を有効活用', desc: '移動時間ゼロ。仕事帰りや休日に参加可能' },
              { icon: '💰', title: '交通費節約', desc: '遠方の方でも費用をかけずに婚活できる' },
              { icon: '🌏', title: '全国対応', desc: '北海道から沖縄まで全国の方が利用可能' },
            ].map(item => (
              <div key={item.title} style={{ background: '#faf7f5', borderRadius: 16, padding: 24, border: '1px solid #e8d5d0', textAlign: 'center' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{item.icon}</div>
                <div style={{ fontWeight: 700, color: PRIMARY, marginBottom: 8 }}>{item.title}</div>
                <p style={{ fontSize: 13, color: '#6b4a50' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ZOOM相談の流れ */}
      <section style={{ padding: '60px 16px', background: '#faf7f5' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 32, color: PRIMARY, textAlign: 'center' }}>ZOOM相談の流れ</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {[
              { step: '01', title: 'お申し込み', desc: '電話・メール・お問い合わせフォームからご連絡ください' },
              { step: '02', title: 'ZOOMリンク送付', desc: '日時を調整後、ZOOMの参加リンクをお送りします' },
              { step: '03', title: 'ZOOM相談（60分）', desc: '担当カウンセラーが費用・流れ・ご要望を丁寧に伺います' },
              { step: '04', title: '入会検討', desc: 'ご納得いただけたら入会手続きへ。もちろん断っても大丈夫です' },
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                <div style={{ flexShrink: 0, width: 48, height: 48, borderRadius: '50%', background: PRIMARY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, fontSize: 13 }}>
                  {item.step}
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: PRIMARY, marginBottom: 4 }}>{item.title}</div>
                  <p style={{ fontSize: 13, color: '#6b4a50', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 16px', background: `linear-gradient(135deg, #4a5568, #6b3a4a)`, textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>今すぐZOOM相談を申し込む</h2>
        <p style={{ opacity: 0.9, marginBottom: 32 }}>全国どこからでも参加可能・費用一切無料</p>
        <Link href="/contact" style={{ display: 'inline-block', background: '#fff', color: PRIMARY, fontWeight: 900, borderRadius: 50, padding: '14px 40px', fontSize: 16, textDecoration: 'none', marginBottom: 16 }}>
          無料ZOOM相談はこちら →
        </Link>
        <p style={{ fontSize: 13, opacity: 0.8 }}>Tel: 080-3207-8422 ｜ Email: f.yoneyone9@gmail.com</p>
      </section>

      <footer style={{ background: '#2d2020', color: '#c4a4b0', padding: '32px 16px', textAlign: 'center', fontSize: 12 }}>
        <Link href="/" style={{ color: ACCENT, textDecoration: 'none' }}>マレッジロードジャパン TOP</Link>
        <p style={{ marginTop: 12, opacity: 0.6 }}>© 2026 マレッジロードジャパン. All rights reserved.</p>
      </footer>
    </div>
  )
}
