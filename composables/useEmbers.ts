import { type Ref, onMounted, onBeforeUnmount } from 'vue'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
}

export function useEmbers(canvasRef: Ref<HTMLCanvasElement | null>) {
  let animationFrameId: number | null = null
  let particles: Particle[] = []
  let width = 0
  let height = 0
  let rgbColor = '232,113,15'
  let colorSchemeMediaQuery: MediaQueryList | null = null

  function extractAccentRgb(): string {
    if (!import.meta.client) return '232,113,15'

    const accentVal = getComputedStyle(document.documentElement)
      .getPropertyValue('--accent')
      .trim()

    const tempCanvas = document.createElement('canvas')
    const ctx = tempCanvas.getContext('2d')
    if (!ctx) return '232,113,15'

    ctx.fillStyle = accentVal || '#F07F1B'
    const hex = ctx.fillStyle
    if (hex.startsWith('#') && hex.length >= 7) {
      const r = parseInt(hex.slice(1, 3), 16)
      const g = parseInt(hex.slice(3, 5), 16)
      const b = parseInt(hex.slice(5, 7), 16)
      return `${r},${g},${b}`
    }
    return '232,113,15'
  }

  function resizeAndInitParticles() {
    const canvas = canvasRef.value
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const rect = canvas.getBoundingClientRect()
    width = rect.width
    height = rect.height

    canvas.width = width * dpr
    canvas.height = height * dpr
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

    const particleCount = Math.max(26, Math.min(64, Math.round((width * height) / 17000)))
    particles = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -(0.1 + Math.random() * 0.38),
        radius: 0.8 + Math.random() * 1.8,
      })
    }
  }

  function renderFrame(prefersReducedMotion: boolean) {
    const canvas = canvasRef.value
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, width, height)

    const len = particles.length
    for (let i = 0; i < len; i++) {
      const p = particles[i]

      if (!prefersReducedMotion) {
        p.x += p.vx
        p.y += p.vy

        if (p.y < -10) {
          p.y = height + 10
          p.x = Math.random() * width
        }
        if (p.x < -10) p.x = width + 10
        if (p.x > width + 10) p.x = -10
      }

      // Draw connection lines to nearby particles
      for (let j = i + 1; j < len; j++) {
        const q = particles[j]
        const dx = p.x - q.x
        const dy = p.y - q.y
        const distSq = dx * dx + dy * dy

        if (distSq < 15000) {
          const alpha = (0.2 * (1 - distSq / 15000)).toFixed(3)
          ctx.strokeStyle = `rgba(${rgbColor},${alpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(q.x, q.y)
          ctx.stroke()
        }
      }

      // Draw particle dot
      const alpha = (0.35 + p.radius * 0.2).toFixed(2)
      ctx.fillStyle = `rgba(${rgbColor},${alpha})`
      ctx.beginPath()
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
      ctx.fill()
    }

    if (!prefersReducedMotion) {
      animationFrameId = requestAnimationFrame(() => renderFrame(prefersReducedMotion))
    }
  }

  function handleResize() {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
    }
    resizeAndInitParticles()
    const prefersReducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    renderFrame(prefersReducedMotion)
  }

  onMounted(() => {
    if (!import.meta.client || !canvasRef.value) return

    rgbColor = extractAccentRgb()
    resizeAndInitParticles()

    const prefersReducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
    renderFrame(prefersReducedMotion)

    window.addEventListener('resize', handleResize)

    if (window.matchMedia) {
      colorSchemeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
      const updateColor = () => {
        setTimeout(() => {
          rgbColor = extractAccentRgb()
        }, 50)
      }
      colorSchemeMediaQuery.addEventListener('change', updateColor)
    }
  })

  onBeforeUnmount(() => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId)
    }
    if (import.meta.client) {
      window.removeEventListener('resize', handleResize)
    }
  })
}

