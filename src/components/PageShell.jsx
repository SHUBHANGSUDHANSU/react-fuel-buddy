import { useEffect, useState } from 'react'

export default function PageShell({ children }) {
  const [lightbox, setLightbox] = useState({ type: '', url: '' })

  useEffect(() => {
    const disposers = []

    const parseSettings = (value) => {
      if (!value) return {}
      try {
        return JSON.parse(value)
      } catch {
        return {}
      }
    }

    const getSettingForWidth = (settings, base, width, fallback = 1) => {
      const get = (key) => {
        const raw = settings[key]
        if (raw === undefined || raw === null || raw === '') return undefined
        return Number(raw)
      }

      if (width <= 767) {
        return get(`${base}_mobile`) ?? fallback
      }
      if (width <= 1024) {
        return get(`${base}_tablet`) ?? get(`${base}_tablet_extra`) ?? fallback
      }
      if (width <= 1366) {
        return get(`${base}_laptop`) ?? get(`${base}_tablet_extra`) ?? fallback
      }
      if (width >= 1440) {
        return get(`${base}_widescreen`) ?? get(base) ?? fallback
      }
      return get(base) ?? fallback
    }

    const initCarousel = (container) => {
      const track =
        container.querySelector('.cms-swiper-slider') ||
        container.querySelector('.cms-swiper-wrapper') ||
        container.querySelector('.swiper-wrapper')
      if (!track) return () => {}

      const slides = Array.from(track.querySelectorAll('.swiper-slide'))
      const settings = parseSettings(container.getAttribute('data-settings'))
      const dotsContainer = container.parentElement?.querySelector('.cms-swiper-dots')
      const autoplay = String(settings.autoplay) === 'true'
      const pauseOnHover = String(settings.pause_on_hover) === 'true'
      const loop = String(settings.loop) === 'true'
      const speed = Number(settings.speed || 300)
      const delay = Number(settings.delay || 5000)

      let currentIndex = 0
      let slidesToShow = 1
      let slidesToScroll = 1
      let slideWidth = 0
      let gutter = 0
      let timerId = null
      let isHovered = false
      let dotButtons = []

      const applyLayout = () => {
        const width = window.innerWidth
        slidesToShow = getSettingForWidth(settings, 'slides_to_show', width, 1)
        slidesToScroll = getSettingForWidth(settings, 'slides_to_scroll', width, 1)

        gutter = Number(settings.slides_gutter || 0)
        track.style.display = 'flex'
        track.style.transition = `transform ${speed}ms ease`
        track.style.willChange = 'transform'
        track.style.gap = gutter ? `${gutter}px` : ''

        const containerWidth = container.getBoundingClientRect().width
        if (containerWidth > 0 && slidesToShow > 0) {
          const totalGutter = gutter * Math.max(slidesToShow - 1, 0)
          slideWidth = Math.max((containerWidth - totalGutter) / slidesToShow, 0)
          slides.forEach((slide) => {
            slide.style.flex = `0 0 ${slideWidth}px`
          })
        } else {
          slideWidth = 0
          slides.forEach((slide) => {
            slide.style.flex = `0 0 ${100 / slidesToShow}%`
          })
        }

        if (!loop) {
          const maxIndex = Math.max(0, slides.length - slidesToShow)
          currentIndex = Math.min(currentIndex, maxIndex)
        }
        update()
        renderDots()
      }

      const update = () => {
        if (slideWidth > 0) {
          const offset = (slideWidth + gutter) * currentIndex
          track.style.transform = `translateX(-${offset}px)`
        } else {
          const offset = (100 / slidesToShow) * currentIndex
          track.style.transform = `translateX(-${offset}%)`
        }
        slides.forEach((slide) => {
          slide.classList.remove('swiper-slide-active', 'swiper-slide-visible')
        })
        if (slides.length > 0) {
          const total = slides.length
          const count = Math.min(slidesToShow, total)
          if (loop) {
            for (let i = 0; i < count; i += 1) {
              const index = (currentIndex + i) % total
              slides[index].classList.add('swiper-slide-visible')
            }
          } else {
            const end = Math.min(currentIndex + count, total)
            for (let i = currentIndex; i < end; i += 1) {
              slides[i].classList.add('swiper-slide-visible')
            }
          }
          slides[currentIndex].classList.add('swiper-slide-active')
        }
        dotButtons.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentIndex)
          dot.setAttribute('aria-selected', index === currentIndex ? 'true' : 'false')
        })
      }

      const next = () => {
        const maxIndex = Math.max(0, slides.length - slidesToShow)
        if (currentIndex + slidesToScroll <= maxIndex) {
          currentIndex += slidesToScroll
        } else if (loop) {
          currentIndex = 0
        }
        update()
      }

      const renderDots = () => {
        if (!dotsContainer) return
        dotsContainer.innerHTML = ''
        dotButtons = []
        const maxIndex = Math.max(0, slides.length - slidesToShow)
        for (let i = 0; i <= maxIndex; i += slidesToScroll) {
          const button = document.createElement('button')
          button.type = 'button'
          button.className = 'cms-swiper-dot'
          button.setAttribute('aria-label', `Go to slide ${i + 1}`)
          button.addEventListener('click', () => {
            currentIndex = i
            update()
          })
          dotsContainer.appendChild(button)
          dotButtons.push(button)
        }
      }

      const startAutoplay = () => {
        if (!autoplay || slides.length <= slidesToShow) return
        if (timerId) return
        timerId = window.setInterval(() => {
          if (!isHovered) next()
        }, delay)
      }

      const stopAutoplay = () => {
        if (timerId) {
          window.clearInterval(timerId)
          timerId = null
        }
      }

      const handleResize = () => applyLayout()
      window.addEventListener('resize', handleResize)
      disposers.push(() => window.removeEventListener('resize', handleResize))

      if (pauseOnHover) {
        const onEnter = () => {
          isHovered = true
        }
        const onLeave = () => {
          isHovered = false
        }
        container.addEventListener('mouseenter', onEnter)
        container.addEventListener('mouseleave', onLeave)
        disposers.push(() => {
          container.removeEventListener('mouseenter', onEnter)
          container.removeEventListener('mouseleave', onLeave)
        })
      }

      applyLayout()
      startAutoplay()

      return () => {
        stopAutoplay()
      }
    }

    const carouselContainers = Array.from(
      document.querySelectorAll('.cms-slider-container, .cms-swiper-container'),
    )
    const carouselCleanups = carouselContainers.map((container) => initCarousel(container))
    disposers.push(() => carouselCleanups.forEach((cleanup) => cleanup()))

    const accordionItems = Array.from(document.querySelectorAll('.cms-accordion-item'))
    const closeAllAccordions = () => {
      accordionItems.forEach((item) => {
        item.classList.remove('active')
        const title = item.querySelector('.cms-ac-title')
        if (title) title.classList.remove('text-accent')
        const icon = item.querySelector('.cms-ac-title--icon')
        if (icon) {
          icon.classList.remove('cmsi-chevron-down', 'text-white', 'bg-accent', 'active')
          icon.classList.add('cmsi-chevron-right', 'text-white', 'bg-body')
        }
        const content = item.querySelector('.cms-ac-content')
        if (content) content.style.display = 'none'
      })
    }

    accordionItems.forEach((item) => {
      const content = item.querySelector('.cms-ac-content')
      if (!content) return
      content.style.display = item.classList.contains('active') ? 'block' : 'none'
    })

    accordionItems.forEach((item) => {
      const title = item.querySelector('.cms-ac-title')
      const content = item.querySelector('.cms-ac-content')
      const handler = () => {
        const isActive = item.classList.contains('active')
        closeAllAccordions()
        if (!isActive) {
          item.classList.add('active')
          if (title) title.classList.add('text-accent')
          const icon = item.querySelector('.cms-ac-title--icon')
          if (icon) {
            icon.classList.remove('cmsi-chevron-right', 'bg-body')
            icon.classList.add('cmsi-chevron-down', 'bg-accent', 'active')
          }
          if (content) content.style.display = 'block'
        }
      }
      if (title) {
        title.addEventListener('click', handler)
        disposers.push(() => title.removeEventListener('click', handler))
      }
    })

    const counters = Array.from(document.querySelectorAll('.cms-counter-number'))
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          counterObserver.unobserve(el)
          const target = Number(el.getAttribute('data-to-value') || 0)
          const duration = Number(el.getAttribute('data-duration') || 2000)
          const start = performance.now()
          const startValue = 0
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1)
            const value = Math.round(startValue + (target - startValue) * progress)
            el.textContent = value.toString()
            if (progress < 1) {
              requestAnimationFrame(tick)
            }
          }
          requestAnimationFrame(tick)
        })
      },
      { threshold: 0.3 },
    )
    counters.forEach((counter) => counterObserver.observe(counter))
    disposers.push(() => counterObserver.disconnect())

    const menuToggles = Array.from(document.querySelectorAll('.open-menu'))
    const mainMenu = document.getElementById('cms-primary-menu')
    const navigation = document.querySelector('.cms-navigation')
    if (menuToggles.length && navigation) {
      const onMenuToggle = (event) => {
        event.preventDefault()
        const toggle = event.currentTarget
        if (toggle instanceof HTMLElement) {
          toggle.classList.toggle('opened')
        }
        document.body.classList.toggle('cms-mobile-menu-open')
        navigation.classList.toggle('navigation-open')
        if (mainMenu) mainMenu.classList.toggle('is-open')
      }
      menuToggles.forEach((toggle) => toggle.addEventListener('click', onMenuToggle))
      disposers.push(() => menuToggles.forEach((toggle) => toggle.removeEventListener('click', onMenuToggle)))
    }

    const toggleHandler = (event) => {
      const link = event.target.closest('a[data-toggle="submenu"]')
      if (!link) return
      event.preventDefault()
      const parent = link.closest('.menu-item-has-children')
      if (!parent) return
      const isOpen = parent.classList.contains('is-open')
      parent.classList.toggle('is-open', !isOpen)
      const submenu = parent.querySelector('.sub-menu')
      if (submenu) submenu.style.display = isOpen ? 'none' : 'block'
    }

    document.addEventListener('click', toggleHandler)
    disposers.push(() => document.removeEventListener('click', toggleHandler))

    const lightboxTargets = Array.from(document.querySelectorAll('[data-elementor-lightbox]'))
    lightboxTargets.forEach((target) => {
      const handler = (event) => {
        event.preventDefault()
        const data = target.getAttribute('data-elementor-lightbox')
        if (!data) return
        let url = ''
        try {
          const parsed = JSON.parse(data)
          url = parsed.url || ''
        } catch {
          url = ''
        }
        if (url) setLightbox({ type: 'video', url })
      }
      target.addEventListener('click', handler)
      disposers.push(() => target.removeEventListener('click', handler))
    })

    const galleryLinks = Array.from(document.querySelectorAll('.cms-galleries-light-box'))
    galleryLinks.forEach((link) => {
      const handler = (event) => {
        event.preventDefault()
        const img = link.closest('.cms-gallery-item')?.querySelector('img')
        if (!img || !img.getAttribute('src')) return
        setLightbox({ type: 'image', url: img.getAttribute('src') })
      }
      link.addEventListener('click', handler)
      disposers.push(() => link.removeEventListener('click', handler))
    })

    const videoWidgets = Array.from(document.querySelectorAll('.elementor-widget-video'))
    videoWidgets.forEach((widget) => {
      const settings = parseSettings(widget.getAttribute('data-settings'))
      const youtubeUrl = settings.youtube_url || ''
      if (!youtubeUrl) return
      let videoId = ''
      const shortMatch = youtubeUrl.match(/youtu\.be\/([^?]+)/)
      const longMatch = youtubeUrl.match(/v=([^&]+)/)
      if (shortMatch) {
        videoId = shortMatch[1]
      } else if (longMatch) {
        videoId = longMatch[1]
      }
      if (!videoId) return
      const iframe = document.createElement('iframe')
      iframe.src = `https://www.youtube.com/embed/${videoId}`
      iframe.title = 'FuelBuddy video'
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
      iframe.allowFullscreen = true
      const container = widget.querySelector('.elementor-video')
      if (container) {
        container.innerHTML = ''
        container.appendChild(iframe)
      }
    })

    return () => {
      disposers.forEach((dispose) => dispose())
    }
  }, [])

  return (
    <>
      {children}
      {lightbox.url ? (
        <div className="react-lightbox" role="dialog" aria-modal="true">
          <button
            className="react-lightbox__close"
            type="button"
            aria-label="Close video"
            onClick={() => setLightbox({ type: '', url: '' })}
          >
            ×
          </button>
          <div className="react-lightbox__content">
            {lightbox.type === 'video' ? (
              <iframe
                src={lightbox.url}
                title="FuelBuddy video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <img src={lightbox.url} alt="" />
            )}
          </div>
          <button
            className="react-lightbox__backdrop"
            type="button"
            aria-label="Close"
            onClick={() => setLightbox({ type: '', url: '' })}
          ></button>
        </div>
      ) : null}
    </>
  )
}
