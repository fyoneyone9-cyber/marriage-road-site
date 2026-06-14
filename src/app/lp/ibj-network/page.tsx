import Link from 'next/link'
import type { Metadata } from 'next'

const PRIMARY = '#b76e79'
const ACCENT = '#c9a96e'

export const metadata: Metadata = {
  title: 'IBJ加盟の結婚相談所【マレッジロードジャパン】全国82,000人から運命の出会い',
  description: 'IBJ（日本結婚相談所連盟）加盟No.01226。全国82,000人以上のネットワークで理想のパートナーを探せます。海老名市・月額8,000円〜・ZOOM対応。',
  keywords: ['IBJ加盟', '日本結婚相談所連盟', 'マレッジロードジャパン', '婚活', '海老名'],
  alternates: { canonical: 'https://marriage-road.jp/lp/ibj-network' },
}

export default function IbjNetworkLpPage() {
  return (
    <div style={{ background: '#faf7f5', minHeight: '100vh', fontFamily: "'Noto Sans JP', sans-serif", color: '#2d2020' }}>
      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, #6b3a4a, ${PRIMARY})`, color: '#fff', padding: '60px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', borderRadius: 20, padding: '4px 16px', fontSize: 12, marginBottom: 20, fontWeight: 700 }}>
            🏅 IBJ加盟 No.01226
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 5vw, 40px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.3 }}>
            全国<span style={{ color: ACCENT }}>82,000人以上</span>から<br />運命の出会いを探す
          </h1>
          <p style={{ fontSize: 15, opacity: 0.9, marginBottom: 32, lineHeight: 1.7 }}>
            日本最大の結婚相談所連盟IBJに加盟。<br />
            マレッジロードジャパンから全国のお相手に申し込めます。
          </p>
          <Link href="/contact" style={{ display: 'inline-block', background: '#fff', color: PRIMARY, fontWeight: 900, borderRadius: 50, padding: '14px 40px', fontSize: 15, textDecoration: 'none' }}>
            無料相談を申し込む →
          </Link>
        </div>
      </section>

      {/* IBJとは */}
      <section style={{ padding: '60px 16px', background: '#fff' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 32, color: PRIMARY, textAlign: 'center' }}>IBJネットワークとは？</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20, marginBottom: 32 }}>
            {[
              { num: '82,000人+', label: '全国会員数' },
              { num: '3,500社+', label: '加盟相談所数' },
              { num: '全国対応', label: 'ZOOM婚活' },
            ].map(item => (
              <div key={item.label} style={{ textAlign: 'center', padding: 24, background: '#faf7f5', borderRadius: 16, border: '1px solid #e8d5d0' }}>
                <div style={{ fontSize: 32, fontWeight: 900, color: PRIMARY, marginBottom: 8 }}>{item.num}</div>
                <div style={{ fontSize: 13, color: '#8a6a6a' }}>{item.label}</div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 14, color: '#4a3030', lineHeight: 1.8 }}>
            IBJ（日本結婚相談所連盟）は全国3,500社以上の結婚相談所が加盟する日本最大のネットワーク組織です。マレッジロードジャパンに入会すると、このネットワーク内の全会員にお見合いを申し込むことができます。
          </p>
        </div>
      </section>

      {/* 安心・安全 */}
      <section style={{ padding: '60px 16px', background: '#faf7f5' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 32, color: PRIMARY, textAlign: 'center' }}>身元が保証されている安心感</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {[
              { title: '独身証明書の提出が必須', desc: '未婚・離婚が証明された方のみ会員になれます' },
              { title: '収入証明書の確認', desc: '一定の経済力を証明した会員と出会えます' },
              { title: 'IBJの審査を通過した相談所のみ加盟', desc: '信頼性の高い相談所だけがIBJに加盟できます' },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', borderRadius: 12, padding: 20, border: '1px solid #e8d5d0', display: 'flex', gap: 16 }}>
                <div style={{ color: PRIMARY, fontWeight: 900, fontSize: 20, flexShrink: 0 }}>✓</div>
                <div>
                  <div style={{ fontWeight: 700, color: PRIMARY, marginBottom: 4 }}>{item.title}</div>
                  <p style={{ fontSize: 13, color: '#6b4a50' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '60px 16px', background: `linear-gradient(135deg, #6b3a4a, ${PRIMARY})`, textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>IBJネットワークで婚活を始める</h2>
        <p style={{ opacity: 0.9, marginBottom: 32 }}>まずは無料相談でお気軽にご相談ください</p>
        <Link href="/contact" style={{ display: 'inline-block', background: '#fff', color: PRIMARY, fontWeight: 900, borderRadius: 50, padding: '14px 40px', fontSize: 16, textDecoration: 'none' }}>
          無料相談を申し込む →
        </Link>
        <p style={{ fontSize: 13, opacity: 0.8, marginTop: 16 }}>Tel: 080-3207-8422 ｜ ZOOM対応</p>
      </section>

      <footer style={{ background: '#2d2020', color: '#c4a4b0', padding: '32px 16px', textAlign: 'center', fontSize: 12 }}>
        <Link href="/" style={{ color: ACCENT, textDecoration: 'none' }}>マレッジロードジャパン TOP</Link>
        <p style={{ marginTop: 12, opacity: 0.6 }}>© 2026 マレッジロードジャパン. All rights reserved.</p>
      </footer>
    </div>
  )
}
