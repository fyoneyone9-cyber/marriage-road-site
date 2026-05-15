-- プラン管理
CREATE TABLE IF NOT EXISTS saas_plans (
  id text PRIMARY KEY,
  name text NOT NULL,
  price_monthly integer NOT NULL,
  monthly_limit integer NOT NULL, -- -1 = unlimited
  features jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

INSERT INTO saas_plans (id, name, price_monthly, monthly_limit, features) VALUES
  ('free', '無料プラン', 0, 5, '["プロフィール添削AI","マッチング提案文AI","フォローメールAI"]'),
  ('standard', 'スタンダードプラン', 3980, 50, '["プロフィール添削AI","マッチング提案文AI","フォローメールAI","断り文句AI","初回面談準備AI","月次レポートAI"]'),
  ('premium', 'プレミアムプラン', 9800, -1, '["プロフィール添削AI","マッチング提案文AI","フォローメールAI","断り文句AI","初回面談準備AI","月次レポートAI","優先サポート"]')
ON CONFLICT (id) DO NOTHING;

-- ユーザーサブスク管理
CREATE TABLE IF NOT EXISTS saas_subscriptions (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  email text UNIQUE NOT NULL,
  name text,
  company text,
  plan_id text REFERENCES saas_plans(id) DEFAULT 'free',
  usage_count integer DEFAULT 0,
  usage_reset_at timestamptz DEFAULT (date_trunc('month', now()) + interval '1 month'),
  stripe_customer_id text,
  stripe_subscription_id text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- 使用ログ
CREATE TABLE IF NOT EXISTS saas_usage_logs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  subscription_id uuid REFERENCES saas_subscriptions(id),
  tool text NOT NULL,
  input_length integer,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE saas_subscriptions ENABLE ROW LEVEL SECURITY;
ALTER TABLE saas_usage_logs ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service_role_all_subscriptions" ON saas_subscriptions FOR ALL TO service_role USING (true);
CREATE POLICY "service_role_all_logs" ON saas_usage_logs FOR ALL TO service_role USING (true);
