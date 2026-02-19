import { useCallback, useEffect, useRef, useState } from "react"

interface UseTurnstileOptions {
  siteKey: string
  onSuccess?: (token: string) => void
  onExpire?: () => void
  onError?: () => void
}

export function useTurnstile({ siteKey, onSuccess, onExpire, onError }: UseTurnstileOptions) {
  const containerRef = useRef<HTMLDivElement>(null)
  const widgetIdRef = useRef<string | null>(null)
  const [token, setToken] = useState<string | null>(null)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (!containerRef.current) return

    const container = containerRef.current

    function renderWidget() {
      if (!window.turnstile || !container) return false

      // Already rendered
      if (widgetIdRef.current !== null) return true

      widgetIdRef.current = window.turnstile.render(container, {
        sitekey: siteKey,
        theme: "dark",
        appearance: "interaction-only",
        callback: (t: string) => {
          setToken(t)
          setIsReady(true)
          onSuccess?.(t)
        },
        "expired-callback": () => {
          setToken(null)
          setIsReady(false)
          onExpire?.()
        },
        "error-callback": () => {
          setToken(null)
          setIsReady(false)
          onError?.()
        },
      })

      return true
    }

    // Try immediately, then poll if script hasn't loaded yet
    if (!renderWidget()) {
      const interval = setInterval(() => {
        if (renderWidget()) clearInterval(interval)
      }, 200)

      return () => {
        clearInterval(interval)
        if (widgetIdRef.current !== null && window.turnstile) {
          window.turnstile.remove(widgetIdRef.current)
          widgetIdRef.current = null
        }
      }
    }

    return () => {
      if (widgetIdRef.current !== null && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current)
        widgetIdRef.current = null
      }
    }
  }, [siteKey, onSuccess, onExpire, onError])

  const reset = useCallback(() => {
    if (widgetIdRef.current !== null && window.turnstile) {
      window.turnstile.reset(widgetIdRef.current)
    }
    setToken(null)
    setIsReady(false)
  }, [])

  return { containerRef, token, isReady, reset }
}
