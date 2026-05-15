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

    // 1. 管理者へ通知メール送信
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `【${genderLabel}無料相談】${name}様よりお申し込み`,
      html: htmlBody,
      replyTo: email,
    })

    if (error) {
      console.error('Resend error (admin):', error)
      return NextResponse.json({ success: false, error: error.message }, { status: 500 })
    }

    // 2. 申込者への自動返信メール
    const autoReplyHtml = `
<div style="font-family:'Hiragino Kaku Gothic Pro','Meiryo',sans-serif;max-width:600px;margin:0 auto;background:#faf7f5;padding:32px;border-radius:12px;">
  <div style="text-align:center;margin-bottom:24px;">
    <h1 style="color:#b76e79;font-size:20px;margin:0 0 8px;">マレッジロードジャパン</h1>
    <p style="color:#8a6a6a;font-size:12px;margin:0;">結婚相談所 · IBJ正規加盟店 No.01226</p>
  </div>

  <h2 style="color:#2d2020;font-size:18px;border-bottom:2px solid #e8d5d0;padding-bottom:12px;margin-bottom:20px;">
    お申し込みありがとうございます
  </h2>

  <p style="color:#2d2020;font-size:14px;line-height:1.8;margin-bottom:16px;">
    ${name} 様<br><br>
    この度はマレッジロードジャパンへお申し込みいただき、誠にありがとうございます。<br>
    以下の内容でお申し込みを受け付けました。
  </p>

  <div style="background:#fff2ee;border:1px solid #e8d5d0;border-radius:8px;padding:20px;margin-bottom:24px;">
    <h3 style="color:#b76e79;font-size:14px;margin:0 0 12px;">■ お申し込み内容</h3>
    <table style="width:100%;border-collapse:collapse;font-size:13px;">
      <tr><td style="padding:6px 12px 6px 0;color:#8a6a6a;width:140px;">お名前</td><td style="padding:6px 0;color:#2d2020;font-weight:bold;">${name}（${kana}）</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#8a6a6a;">性別</td><td style="padding:6px 0;color:#2d2020;">${genderLabel}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#8a6a6a;">年齢</td><td style="padding:6px 0;color:#2d2020;">${age}歳</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#8a6a6a;">都道府県</td><td style="padding:6px 0;color:#2d2020;">${pref || '未記入'}</td></tr>
      <tr><td style="padding:6px 12px 6px 0;color:#8a6a6a;">第1希望日時</td><td style="padding:6px 0;color:#2d2020;">${date1}</td></tr>
      ${date2 ? `<tr><td style="padding:6px 12px 6px 0;color:#8a6a6a;">第2希望日時</td><td style="padding:6px 0;color:#2d2020;">${date2}</td></tr>` : ''}
      ${date3 ? `<tr><td style="padding:6px 12px 6px 0;color:#8a6a6a;">第3希望日時</td><td style="padding:6px 0;color:#2d2020;">${date3}</td></tr>` : ''}
    </table>
  </div>

  <div style="background:#fff8f0;border-left:4px solid #b76e79;padding:16px 20px;border-radius:0 8px 8px 0;margin-bottom:24px;">
    <p style="color:#2d2020;font-size:14px;line-height:1.8;margin:0;">
      <strong>担当者より1営業日以内にご連絡いたします。</strong><br>
      しばらくお待ちください。急ぎの場合はお電話でもお問い合わせいただけます。
    </p>
  </div>

  <div style="text-align:center;margin-bottom:24px;">
    <a href="tel:050-1807-3163"
      style="display:inline-block;background:#b76e79;color:white;padding:12px 32px;border-radius:50px;font-size:14px;font-weight:bold;text-decoration:none;">
      📞 050-1807-3163
    </a>
    <p style="color:#8a6a6a;font-size:11px;margin-top:8px;">受付時間：10:00〜23:00（年中無休）</p>
  </div>

  <hr style="border:none;border-top:1px solid #e8d5d0;margin:24px 0;" />

  <p style="color:#8a6a6a;font-size:11px;text-align:center;line-height:1.8;margin:0;">
    マレッジロードジャパン<br>
    〒243-0424 神奈川県海老名市社家6-5-2-301<br>
    IBJ正規加盟店 No.01226<br>
    <a href="https://marriage-road-site.vercel.app" style="color:#b76e79;">https://marriage-road-site.vercel.app</a>
  </p>
</div>
`

    const { error: autoReplyError } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: '【マレッジロードジャパン】お申し込みありがとうございます',
      html: autoReplyHtml,
    })

    if (autoReplyError) {
      // 自動返信失敗はログのみ（管理者通知は成功済みなのでエラーにしない）
      console.error('Resend error (auto-reply):', autoReplyError)
    }

    // 3. Supabase CRM へ登録
    const supabaseUrl = process.env.SUPABASE_URL
    const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

    if (supabaseUrl && supabaseKey) {
      try {
        const supabaseRes = await fetch(`${supabaseUrl}/rest/v1/contact_leads`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'apikey': supabaseKey,
            'Authorization': `Bearer ${supabaseKey}`,
            'Prefer': 'return=minimal',
          },
          body: JSON.stringify({
            gender,
            name,
            kana,
            age,
            income: income || null,
            phone,
            pref: pref || null,
            email,
            date1,
            date2: date2 || null,
            date3: date3 || null,
            question: question || null,
          }),
        })

        if (!supabaseRes.ok) {
          const errText = await supabaseRes.text()
          console.error('Supabase insert error:', errText)
        }
      } catch (supabaseErr) {
        console.error('Supabase error:', supabaseErr)
      }
    } else {
      console.warn('Supabase env vars not set. Skipping CRM registration.')
    }

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('Contact API error:', err)
    return NextResponse.json({ success: false, error: 'サーバーエラーが発生しました' }, { status: 500 })
  }
}
