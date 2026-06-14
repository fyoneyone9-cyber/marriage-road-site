import Link from 'next/link'
import type { Metadata } from 'next'

const PRIMARY = '#b76e79'
const ACCENT = '#c9a96e'

export const metadata: Metadata = {
  title: '【海老名市】結婚相談所マレッジロードジャパン｜IBJ加盟・ZOOM対応・月額8,000円〜',
  description: '神奈川県海老名市の結婚相談所マレッジロードジャパン。IBJ加盟（No.01226）で全国82,000人以上のネットワーク。月額8,000円〜・ZOOM全国対応・無料相談受付中。',
  keywords: ['結婚相談所', '海老名市', 'IBJ加盟', '婚活', '神奈川県', 'マレッジロードジャパン'],
  alternates: { canonical: 'https://marriage-road.jp/lp/marriage-counseling' },
}

const FEATURES = [
  { icon: '💍', title: 'IBJ加盟 No.01226', desc: '全国82,000人以上のネットワーク。日本最大の結婚相談所連盟に加盟しています。' },
  { icon: '💰', title: '月額8,000円〜', desc: '業界最低水準の月額費用。無理なく続けられる料金設定です。' },
  { icon: '💻', title: 'ZOOM全国対応', desc: '遠方の方もZOOMで相談・面談が可能。全国どこからでも婚活できます。' },
  { icon: '🧠', title: '上級心理カウンセラー', desc: '資格を持つカウンセラーが相性・価値観を重視したマッチングをサポート。' },
  { icon: '📍', title: '社家駅徒歩1分', desc: 'JR相模線「社家駅」から徒歩1分の好アクセス。駐車場も完備。' },
  { icon: '📅', title: '無料相談受付中', desc: 'まずはご相談から。費用・流れ・相性など何でもお気軽にどうぞ。' },
]

const FLOW = [
  { step: '01', title: '無料相談', desc: '電話・メール・ZOOMでお気軽にご相談ください' },
  { step: '02', title: '入会・プロフィール作成', desc: '書類準備・写真撮影サポート・プロフィール作成を担当者が支援' },
  { step: '03', title: 'お相手探し・申し込み', desc: '全国82,000人以上から条件に合ったお相手を担当者が提案' },
  { step: '04', title: 'お見合い・交際', desc: '初回面談の準備から交際中のアドバイスまでサポート' },
  { step: '05', title: '成婚・退会', desc: 'ご成婚が決まったら退会。成婚後のフォローも行っています' },
]

export default function MarriageCounselingLpPage() {
  return (
    <div style={{ background: '#faf7f5', minHeight: '100vh', fontFamily: "'Noto Sans JP', sans-serif", color: '#2d2020' }}>
      {/* Hero */}
      <section style={{ background: `linear-gradient(135deg, ${PRIMARY}, #8b4a5a)`, color: '#fff', padding: '60px 16px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.2)', borderRadius: 20, padding: '4px 16px', fontSize: 12, marginBottom: 20, fontWeight: 700 }}>
            💍 IBJ加盟 No.01226 ｜ 全国82,000人のネットワーク
          </div>
          <h1 style={{ fontSize: 'clamp(24px, 5vw, 42px)', fontWeight: 900, marginBottom: 16, lineHeight: 1.3 }}>
            海老名市の結婚相談所<br />
            <span style={{ color: ACCENT }}>マレッジロードジャパン</span>
          </h1>
          <p style={{ fontSize: 16, opacity: 0.9, marginBottom: 32, lineHeight: 1.7 }}>
            月額8,000円〜・ZOOM全国対応・無料相談実施中<br />
            上級心理カウンセラーがあなたの婚活を丁寧にサポートします
          </p>
          <Link
            href="/contact"
            style={{ display: 'inline-block', background: '#fff', color: PRIMARY, fontWeight: 900, borderRadius: 50, padding: '14px 40px', fontSize: 16, textDecoration: 'none' }}
          >
            無料相談を申し込む →
          </Link>
          <p style={{ fontSize: 12, opacity: 0.7, marginTop: 12 }}>Tel: 080-3207-8422 ｜ ZOOM対応</p>
        </div>
      </section>

      {/* 特徴 */}
      <section style={{ padding: '60px 16px', background: '#fff' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 24, fontWeight: 900, marginBottom: 40, color: PRIMARY }}>
            選ばれる6つの理由
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 20 }}>
            {FEATURES.map(f => (
              <div key={f.title} style={{ background: '#faf7f5', borderRadius: 16, padding: 24, border: '1px solid #e8d5d0' }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
                <div style={{ fontWeight: 700, color: PRIMARY, marginBottom: 8 }}>{f.title}</div>
                <p style={{ fontSize: 13, color: '#6b4a50', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 料金 */}
      <section style={{ padding: '60px 16px', background: '#faf7f5' }}>
        <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 32, color: PRIMARY }}>料金プラン</h2>
          <div style={{ background: '#fff', borderRadius: 20, padding: 32, border: `2px solid ${PRIMARY}`, boxShadow: '0 8px 32px rgba(183,110,121,0.1)' }}>
            <div style={{ fontSize: 13, color: '#8a6a6a', marginBottom: 8 }}>月額</div>
            <div style={{ fontSize: 48, fontWeight: 900, color: PRIMARY, marginBottom: 4 }}>8,000円〜</div>
            <div style={{ fontSize: 12, color: '#8a6a6a', marginBottom: 24 }}>（税込・プランにより異なります）</div>
            <div style={{ textAlign: 'left', fontSize: 13, color: '#4a3030', lineHeight: 2 }}>
              ✓ IBJネットワーク（全国82,000人）利用可能<br />
              ✓ 担当カウンセラーによる個別サポート<br />
              ✓ ZOOM面談対応（追加費用なし）<br />
              ✓ プロフィール写真撮影サポート
            </div>
          </div>
          <Link
            href="/contact"
            style={{ display: 'inline-block', marginTop: 24, background: PRIMARY, color: '#fff', fontWeight: 900, borderRadius: 50, padding: '14px 40px', fontSize: 16, textDecoration: 'none' }}
          >
            無料相談はこちら →
          </Link>
        </div>
      </section>

      {/* 流れ */}
      <section style={{ padding: '60px 16px', background: '#fff' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: 24, fontWeight: 900, marginBottom: 40, color: PRIMARY }}>
            婚活の流れ
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {FLOW.map(item => (
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
      <section style={{ padding: '60px 16px', background: `linear-gradient(135deg, ${PRIMARY}, #8b4a5a)`, textAlign: 'center', color: '#fff' }}>
        <h2 style={{ fontSize: 24, fontWeight: 900, marginBottom: 16 }}>まずは無料相談から</h2>
        <p style={{ opacity: 0.9, marginBottom: 32, fontSize: 15 }}>
          電話・メール・ZOOMいずれでもOK<br />
          費用・流れ・不安なことは何でもご相談ください
        </p>
        <Link
          href="/contact"
          style={{ display: 'inline-block', background: '#fff', color: PRIMARY, fontWeight: 900, borderRadius: 50, padding: '14px 40px', fontSize: 16, textDecoration: 'none', marginBottom: 16 }}
        >
          無料相談を申し込む →
        </Link>
        <p style={{ fontSize: 13, opacity: 0.8 }}>
          Tel: 080-3207-8422 ｜ Email: f.yoneyone9@gmail.com
        </p>
      </section>

      <footer style={{ background: '#2d2020', color: '#c4a4b0', padding: '32px 16px', textAlign: 'center', fontSize: 12 }}>
        <Link href="/" style={{ color: '#c9a96e', textDecoration: 'none' }}>マレッジロードジャパン TOP</Link>
        <span style={{ margin: '0 12px' }}>|</span>
        <Link href="/privacy" style={{ color: '#c4a4b0', textDecoration: 'none' }}>プライバシーポリシー</Link>
        <p style={{ marginTop: 12, opacity: 0.6 }}>© 2026 マレッジロードジャパン. All rights reserved.</p>
      </footer>
    </div>
  )
}
