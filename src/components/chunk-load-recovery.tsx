'use client'

import React from 'react'

const RECOVERY_KEY = 'diaz:chunk-load-recovery'
const RECOVERY_WINDOW_MS = 30_000

function isChunkLoadIssue(value: unknown): boolean {
  if (!value) return false

  const target =
    value instanceof ErrorEvent ? value.error || value.message : value
  const message =
    target instanceof Error
      ? `${target.name} ${target.message}`
      : String(target)

  return [
    'ChunkLoadError',
    'Loading chunk',
    'failed to fetch dynamically imported module',
    'Importing a module script failed',
  ].some((pattern) => message.toLowerCase().includes(pattern.toLowerCase()))
}

function shouldRecover(): boolean {
  const lastRecovery = Number(window.sessionStorage.getItem(RECOVERY_KEY) || 0)

  if (Number.isFinite(lastRecovery)) {
    return Date.now() - lastRecovery > RECOVERY_WINDOW_MS
  }

  return true
}

function recoverFromChunkLoad(): void {
  if (!shouldRecover()) return

  window.sessionStorage.setItem(RECOVERY_KEY, String(Date.now()))
  window.location.reload()
}

export default function ChunkLoadRecovery(): null {
  React.useEffect(() => {
    const handleWindowError = (event: ErrorEvent) => {
      if (isChunkLoadIssue(event)) recoverFromChunkLoad()
    }

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      if (isChunkLoadIssue(event.reason)) recoverFromChunkLoad()
    }

    const handleResourceError = (event: Event) => {
      const target = event.target

      if (
        target instanceof HTMLScriptElement &&
        target.src.includes('/_next/static/chunks/')
      ) {
        recoverFromChunkLoad()
      }
    }

    window.addEventListener('error', handleWindowError)
    window.addEventListener('unhandledrejection', handleUnhandledRejection)
    window.addEventListener('error', handleResourceError, true)

    return () => {
      window.removeEventListener('error', handleWindowError)
      window.removeEventListener('unhandledrejection', handleUnhandledRejection)
      window.removeEventListener('error', handleResourceError, true)
    }
  }, [])

  return null
}
