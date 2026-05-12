'use client'

const PRIMARY = '#b76e79'
const ACCENT  = '#c9a96e'
const BASE    = '#faf7f5'
const SURFACE = '#fff2ee'
const TEXT    = '#2d2020'
const MUTED   = '#8a6a6a'
const BORDER  = '#e8d5d0'

const PARTY_LIST = [
  {
    theme: '穏やかでいつまでも仲良し夫婦が理想',
    male: '31〜40歳男性',
    female: '29〜36歳女性',
    tag: '穏やか系',
  },
  {
    theme: '年収600万円以上の男性限定パーティー',
    male: '39〜50歳男性',
    female: '37〜46歳女性',
    tag: 'ハイスペック',
  },
  {
    theme: '半年以内に婚約が理想・誠実で素直で一途な男女限定',
    male: '全年齢',
    female: '全年齢',
    tag: '真剣婚活',
  },
  {
    theme: 'アニメ・漫画・ゲーム好きな方同士の出会い',
    male: '29〜36歳男性',
    female: '29〜36歳女性',
    tag: 'オタク系',
  },
  {
    theme: '一流企業・優良企業にお勤めの男性 × 若い女性',
    male: '年収安定の男性',
    female: '22〜31歳女性',
    tag: 'エリート系',
  },
]

export default function PartyPage() {
  return (
    <div style={{ background: BASE, color: TEXT, fontFamily: "'Inter', 'Noto Sans JP', sans-serif" }}>
      <div style={{ maxWidth: '48rem', margin: '0 auto', padding: '3rem 1rem' }}>

        <a href="/" style={{ color: PRIMARY, textDecoration: 'none', fontSize: '0.875rem' }}>← トップに戻る</a>

        <div style={{ marginTop: '2rem', marginBottom: '2rem', textAlign: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: PRIMARY }}>Party</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, margin: '0.5rem 0', color: TEXT }}>
            婚活パーティ情報
          </h1>
          <p style={{ color: MUTED, fontSize: '0.875rem', lineHeight: 1.8 }}>
            IBJ日本結婚相談所連盟のパーティー情報をお届けします。<br />
            参加条件や詳細は会員様限定でご案内します。
          </p>
        </div>

        {/* 開催概要 */}
        <div style={{ background: SURFACE, border: `1px solid ${BORDER}`, borderRadius: '1rem', padding: '1.5rem', marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '10rem' }}>
              <div style={{ fontSize: '0.7rem', color: MUTED, marginBottom: '0.25rem' }}>主催</div>
              <div style={{ fontWeight: 600, fontSize: '0.875rem', color: TEXT }}>IBJ日本結婚相談所連盟</div>
            </div>
            <div style={{ flex: 1, minWidth: '10rem' }}>
              <div style={{ fontSize: '0.7rem', color: MUTED, marginBottom: '0.25rem' }}>開催地</div>
              <div style={{ fontWeight: 600, fontSize: '0.875rem', color: TEXT }}>東京（東京駅 八重洲エリア）</div>
            </div>
            <div style={{ flex: 1, minWidth: '10rem' }}>
              <div style={{ fontSize: '0.7rem', color: MUTED, marginBottom: '0.25rem' }}>参加資格</div>
              <div style={{ fontWeight: 600, fontSize: '0.875rem', color: TEXT }}>IBJ加盟相談所の会員様</div>
            </div>
          </div>
        </div>

        {/* パーティーテーマ一覧 */}
        <h2 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '1rem', color: TEXT }}>開催中のパーティーテーマ（一例）</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
          {PARTY_LIST.map((party, i) => (
            <div key={i} style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem', flexWrap: 'wrap' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: TEXT }}>
                    {party.theme}
                  </div>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <div style={{ fontSize: '0.75rem', color: MUTED }}>👨 {party.male}</div>
                    <div style={{ fontSize: '0.75rem', color: MUTED }}>👩 {party.female}</div>
                  </div>
                </div>
                <div style={{ flexShrink: 0 }}>
                  <span style={{ background: `rgba(183,110,121,0.1)`, color: PRIMARY, fontSize: '0.7rem', fontWeight: 600, padding: '0.25rem 0.625rem', borderRadius: '9999px' }}>
                    {party.tag}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 注意事項 */}
        <div style={{ background: `rgba(201,169,110,0.12)`, border: `1px solid rgba(201,169,110,0.4)`, borderRadius: '0.75rem', padding: '1.25rem', marginBottom: '2rem' }}>
          <h3 style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.5rem', color: TEXT }}>📌 参加にあたって</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '0.8rem', color: MUTED, lineHeight: 1.8 }}>
            <li>・参加はIBJ加盟相談所の会員様のみ</li>
            <li>・詳細な参加条件・料金は会員様向けにご案内します</li>
            <li>・最新パーティー情報はLINEで随時配信中</li>
            <li>・パーティー参加前に必ずカウンセラーにご相談ください</li>
          </ul>
        </div>

        {/* LINE誘導 */}
        <div style={{ background: 'white', border: `1px solid ${BORDER}`, borderRadius: '0.75rem', padding: '1.25rem', textAlign: 'center', marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.875rem', color: TEXT, fontWeight: 600, marginBottom: '0.375rem' }}>
            💬 最新情報をLINEで受け取る
          </div>
          <div style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '0.875rem' }}>
            婚活パーティ情報・婚活診断を随時配信中
          </div>
          <a href="https://lin.ee/UxgdZ7F" target="_blank" rel="noopener noreferrer"
            style={{ background: '#06C755', color: 'white', textDecoration: 'none', padding: '0.625rem 1.5rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem', display: 'inline-block' }}>
            LINEを追加する →
          </a>
        </div>

        {/* CTA */}
        <div style={{ background: `linear-gradient(160deg, #fde8df 0%, #fdf5e8 100%)`, borderRadius: '1rem', padding: '2rem', textAlign: 'center' }}>
          <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem', color: TEXT }}>まずは無料相談から</h3>
          <p style={{ fontSize: '0.8rem', color: MUTED, marginBottom: '1.25rem' }}>
            婚活パーティへの参加方法など、詳しくご説明します。
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'center' }}>
            <a href="https://timerex.net/s/f.yoneyone9_d61f/e6c35fdf" target="_blank" rel="noopener noreferrer"
              style={{ background: PRIMARY, color: 'white', textDecoration: 'none', padding: '0.75rem 2rem', borderRadius: '9999px', fontWeight: 600, fontSize: '0.875rem', display: 'inline-block' }}>
              📅 ZOOM無料相談を予約する
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
