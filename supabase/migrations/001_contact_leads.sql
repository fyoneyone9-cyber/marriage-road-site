-- contact_leads テーブル作成
-- マレッジロードジャパン 問い合わせCRMテーブル

CREATE TABLE IF NOT EXISTS contact_leads (
  id         UUID        NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  gender     TEXT,
  name       TEXT        NOT NULL,
  kana       TEXT,
  age        TEXT,
  income     TEXT,
  phone      TEXT,
  pref       TEXT,
  email      TEXT        NOT NULL,
  date1      TEXT,
  date2      TEXT,
  date3      TEXT,
  question   TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- RLS（Row Level Security）を有効化
ALTER TABLE contact_leads ENABLE ROW LEVEL SECURITY;

-- service_role は全操作可能（Vercel から INSERT する際に使用）
CREATE POLICY "service_role_all" ON contact_leads
  FOR ALL
  USING (true)
  WITH CHECK (true);
