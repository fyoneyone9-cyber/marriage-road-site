import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const TO_EMAIL = 'f.yoneyone9@gmail.com'
const FROM_EMAIL = 'onboarding@resend.dev' // 独自ドメイン設定前の仮送信元

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { gender, name, kana, age, income, phone, pref, email, date1, date2, date3, question } = body

    const genderLabel = gender === 'female' ? '女性' : '男性'

    const htmlBody = `
<h2>【マレッジロードジャパン】${genderLabel}無料相談お申し込みがありました</h2>
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;font-size:14px;">
  <tr><th style="background:#f5e8e8;width:150px;">お名前</th><td>${name}（${kana}）</td></tr>
  <tr><th style="background:#f5e8e8;">年齢</th><td>${age}歳</td></tr>
  <tr><th style="background:#f5e8e8;">年収</th><td>${income || '未記入'}</td></tr>
  <tr><th style="background:#f5e8e8;">電話番号</th><td>${phone}</td></tr>
  <tr><th style="background:#f5e8e8;">都道府県</th><td>${pref || '未記入'}</td></tr>
  <tr><th style="background:#f5e8e8;">メールアドレス</th><td>${email}</td></tr>
  <tr><th style="background:#f5e8e8;">希望日時 第1希望</th><td>${date1}</td></tr>
  <tr><th style="background:#f5e8e8;">希望日時 第2希望</th><td>${date2 || '未記入'}</td></tr>
  <tr><th style="background:#f5e8e8;">希望日時 第3希望</th><td>${date3 || '未記入'}</td></tr>
  <tr><th style="background:#f5e8e8;">ご質問</th><td>${question || 'なし'}</td></tr>
</table>
<p style="margin-top:16px;color:#888;font-size:12px;">
  マレッジロードジャパン 自動送信メール<br>
  https://marriage-road-site.vercel.app
</p>
`

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `【${genderLabel}無料相談】${name}様よりお申し込み`,
      html: htmlBody,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ success: false, error: 'サーバーエラーが発生しました' }, { status: 500 })
  }
}
