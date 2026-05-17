'use client'
import { useEffect, useMemo, useState } from 'react'
import { Download } from 'lucide-react'

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed'; platform: string }>
}

export default function QuickNav() {
  const [open, setOpen] = useState(false)
  const [showInstallHelp, setShowInstallHelp] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null)
  const [isInstalled, setIsInstalled] = useState(false)

  const isIos = useMemo(() => {
    if (typeof window === 'undefined') return false
    return /iphone|ipad|ipod/i.test(window.navigator.userAgent)
  }, [])

  useEffect(() => {
    const onBeforeInstallPrompt = (e: Event) => {
      e.preventDefault()
      setDeferredPrompt(e as BeforeInstallPromptEvent)
    }

    const onAppInstalled = () => {
      setIsInstalled(true)
      setDeferredPrompt(null)
      setShowInstallHelp(false)
    }

    window.addEventListener('beforeinstallprompt', onBeforeInstallPrompt)
    window.addEventListener('appinstalled', onAppInstalled)

    if ((window.navigator as any).standalone) setIsInstalled(true)

    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstallPrompt)
      window.removeEventListener('appinstalled', onAppInstalled)
    }
  }, [])

  const links = [
    { label: 'TOP', icon: '🏠', href: '/' },
    { label: '\u7279\u5fb4\u30fb\u5f37\u307f', icon: '✨', href: '/feature' },
    { label: '\u30d7\u30e9\u30f3\u30fb\u6599\u91d1', icon: '💰', href: '/plan' },
    { label: '\u5165\u4f1a\u306e\u6d41\u308c', icon: '📋', href: '/flow' },
    { label: '\u30ab\u30a6\u30f3\u30bb\u30e9\u30fc', icon: '👤', href: '/greeting' },
    { label: '\u3088\u304f\u3042\u308b\u8cea\u554f', icon: '❓', href: '/faq' },
    { label: '\u5b9f\u7e3e\u30c7\u30fc\u30bf', icon: '📊', href: '/data' },
    { label: '\u30d6\u30ed\u30b0', icon: '📝', href: '/blog' },
    { label: '\u5546\u5de5\u4f1a\u8b70\u6240', icon: '🏛️', href: '/chamber' },
    { label: '\u7537\u6027\u76f8\u8ac7', icon: '👨', href: '/m-contact' },
    { label: '\u5973\u6027\u76f8\u8ac7', icon: '👩', href: '/w-contact' },
  ]

  const handleInstall = async () => {
    if (isInstalled) return

    if (deferredPrompt) {
      deferredPrompt.prompt()
      await deferredPrompt.userChoice
      setDeferredPrompt(null)
      return
    }

    setShowInstallHelp(true)
  }

  return (
    <>
      {showInstallHelp && (
        <div style={{
          position: 'fixed',
          right: '12px',
          bottom: '84px',
          zIndex: 10000,
          width: 'min(320px, calc(100vw - 24px))',
          background: 'rgba(255,255,255,0.98)',
          border: '1px solid #e8d5d0',
          borderRadius: '16px',
          boxShadow: '0 12px 32px rgba(0,0,0,0.16)',
          padding: '14px 14px 12px',
          color: '#3d2c2c',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '10px' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 700, marginBottom: '6px' }}>
                \u30db\u30fc\u30e0\u753b\u9762\u306b\u8ffd\u52a0\u3059\u308b\u65b9\u6cd5
              </div>
              <div style={{ fontSize: '12px', lineHeight: 1.6, color: '#7d5f5f' }}>
                {isIos
                  ? '\u0041\u0069\u0072\u0065\u0062\u0075\u0067\u3042\u3068\u3082\u306f Safari\u306e\u5171\u6709\u30dc\u30bf\u30f3 \u2192 \u300c\u30db\u30fc\u30e0\u753b\u9762\u306b\u8ffd\u52a0\u300d\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044\u3002'
                  : 'Chrome\u306e\u30e1\u30cb\u30e5\u30fc \u2192 \u300c\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u300d\u307e\u305f\u306f \u300c\u30db\u30fc\u30e0\u753b\u9762\u306b\u8ffd\u52a0\u300d\u3092\u9078\u3093\u3067\u304f\u3060\u3055\u3044\u3002'}
              </div>
            </div>
            <button
              onClick={() => setShowInstallHelp(false)}
              aria-label="\u9589\u3058\u308b"
              style={{ border: 'none', background: 'transparent', cursor: 'pointer', color: '#b76e79' }}
            >
              ×
            </button>
          </div>
        </div>
      )}

      <div style={{
        position: 'fixed', bottom: '20px', right: '12px', zIndex: 9999,
        display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '8px',
      }}>
        {!isInstalled && (
          <button
            onClick={handleInstall}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '12px 16px', borderRadius: '999px',
              background: 'linear-gradient(135deg, #b76e79, #c9a96e)',
              color: 'white', border: 'none', cursor: 'pointer',
              fontSize: '13px', fontWeight: 700,
              boxShadow: '0 10px 24px rgba(183,110,121,0.35)',
            }}
            aria-label="\u30b5\u30a4\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"
            title="\u30b5\u30a4\u30c8\u3092\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"
          >
            <Download size={16} />
            \u30a4\u30f3\u30b9\u30c8\u30fc\u30eb
          </button>
        )}

        {open && (
          <div style={{
            background: 'rgba(45,26,26,0.95)',
            backdropFilter: 'blur(12px)',
            borderRadius: '16px',
            padding: '10px 8px',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
            minWidth: '148px',
          }}>
            {links.map(({ label, icon, href }) => (
              <a key={href} href={href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '8px',
                  padding: '7px 12px', borderRadius: '10px',
                  color: 'rgba(255,255,255,0.85)',
                  textDecoration: 'none', fontSize: '13px', fontWeight: 500,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(183,110,121,0.35)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <span style={{ fontSize: '15px', width: '20px', textAlign: 'center' }}>{icon}</span>
                {label}
              </a>
            ))}
          </div>
        )}

        <button
          onClick={() => setOpen(!open)}
          style={{
            width: '52px', height: '52px', borderRadius: '50%',
            background: '#b76e79',
            color: 'white', border: 'none', cursor: 'pointer',
            fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 4px 16px rgba(183,110,121,0.5)',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.1)'; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
          aria-label="\u30da\u30fc\u30b8\u30ca\u30d3\u30b2\u30fc\u30b7\u30e7\u30f3"
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </>
  )
}
