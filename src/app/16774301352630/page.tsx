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

export default function WhyWebInterviewPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Web Interview</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            なぜWeb面談が必要なのか？
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            IBJ正規加盟店として、一定のルールを守っています。<br />
            その理由をご説明します。
          </p>
        </div>

        {/* メインメッセージ */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.75rem', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '1.5rem', textAlign: 'center', marginBottom: '1rem' }}>🎥</div>
          <p style={{ fontSize: '0.9rem', color: TEXT, lineHeight: 1.8, fontWeight: 500, textAlign: 'center', marginBottom: '1rem' }}>
            「遊び半分ではなく、本気で婚活をするご意志があるのかを<br />
            判断させて頂くために、必ずWeb面談もしくは対面での<br />
            面談を実施してからのご入会としています」
          </p>
          <p style={{ fontSize: '0.8rem', color: MUTED, textAlign: 'center' }}>
            — マレッジロードジャパン 代表カウンセラー
          </p>
        </div>

        {/* 理由説明 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {[
            {
              icon: '🤝',
              title: 'お相手への敬意',
              desc: 'お相手の異性の方も真剣に婚活に取り組んでいます。遊び半分での参加は相手の方に多大な迷惑をかけることになります。',
            },
            {
              icon: '🔐',
              title: 'IBJ正規加盟店としてのルール',
              desc: 'IBJ（日本結婚相談所連盟）の正規加盟店として、一定の基準を満たす会員様のみにサービスを提供することが求められています。',
            },
            {
              icon: '✅',
              title: '安心・安全な婚活環境の維持',
              desc: '面談を通じて本人確認・婚活意欲の確認を行うことで、全ての会員様にとって安心・安全な婚活環境を維持しています。',
            },
            {
              icon: '💬',
              title: 'カウンセラーとの信頼関係構築',
              desc: '面談を通じてカウンセラーとの信頼関係を築くことで、より質の高いサポートをご提供できます。',
            },
          ].map((item, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
              <div style={{ fontSize: '1.5rem', flexShrink: 0 }}>{item.icon}</div>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.9rem', marginBottom: '0.25rem', color: TEXT }}>{item.title}</div>
                <div style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ZOOM相談案内 */}
        <div style={{ background: `rgba(183,110,121,0.08)`, border: `2px solid ${PRIMARY}`, borderRadius: '0.75rem', padding: '1.5rem', textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>📅</div>
          <div style={{ fontWeight: 700, color: TEXT, fontSize: '1rem', marginBottom: '0.375rem' }}>ZOOMでの無料相談</div>
          <div style={{ fontSize: '0.875rem', color: MUTED, marginBottom: '0.5rem' }}>毎週4枠実施中</div>
          <div style={{ fontSize: '0.8rem', color: MUTED }}>
            スマートフォン・パソコンどちらでもご参加いただけます。<br />
            所要時間は30〜60分程度です。
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>Web面談のご予約はこちら</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            まずはお気軽にZOOMでご相談ください。
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
