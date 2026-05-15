import { NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

export async function GET() {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )

  const { error } = await supabase.rpc('exec_sql', {
    sql: `
      CREATE TABLE IF NOT EXISTS contact_leads (
        id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
        gender text,
        name text,
        kana text,
        age text,
        income text,
        phone text,
        pref text,
        email text,
        date1 text,
        date2 text,
        date3 text,
        question text,
        created_at timestamptz DEFAULT now()
      );
      ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;
      CREATE POLICY IF NOT EXISTS "service_role_all" ON contact_leads
        FOR ALL USING (true);
    `
  })

  if (error) {
    // rpcが使えない場合は直接SQL実行
    const res = await fetch(`${process.env.SUPABASE_URL}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'apikey': process.env.SUPABASE_SERVICE_ROLE_KEY!,
        'Authorization': `Bearer ${process.env.SUPABASE_SERVICE_ROLE_KEY!}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sql: 'SELECT 1' })
    })
    return NextResponse.json({ error: error.message, note: 'Use Supabase SQL editor instead' }, { status: 500 })
  }

  return NextResponse.json({ success: true, message: 'contact_leads table created!' })
}
