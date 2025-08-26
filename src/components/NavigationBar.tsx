import { useEffect, useRef, useState } from 'react'
import { useLocation, Link } from 'react-router-dom'
import { cn } from '../util'


const routes = [
  { name: 'Home', path: '/' },
  { name: 'Experience', path: '/experience' },
  { name: 'Sources', path: '/sources' },
]

const NavigationBar = () => {
  const location = useLocation()
  const [, setIndicatorState] = useState({ left: 0, width: 0 })
  const navIndicatorRef = useRef<HTMLDivElement>(null)
  const navContainerWrapperRef = useRef<HTMLDivElement>(null)
  const scrollToTopRef = useRef<HTMLButtonElement>(null)


  const positionIndicator = () => {
    const activeLink = document.querySelector(
      `[data-path="${location.pathname}"]`
    ) as HTMLElement || document.querySelector('[data-index="0"]') as HTMLElement

    if (activeLink && navIndicatorRef.current) {
      const padding = 2
      const newLeft = activeLink.offsetLeft - padding
      const newWidth = activeLink.offsetWidth + padding * 2

      navIndicatorRef.current.style.left = `${newLeft}px`
      navIndicatorRef.current.style.width = `${newWidth}px`

      setIndicatorState({ left: newLeft, width: newWidth })
    }
  }

  const toggleTheme = () => {
    const html = document.documentElement
    const isDarkMode = html.classList.toggle('dark')

    if (isDarkMode) {
      localStorage.setItem('theme', 'dark')
      html.classList.add('dark')
    } else {
      localStorage.setItem('theme', 'light')
      html.classList.remove('dark')
    }
  }

  const setupThemeToggle = async () => {
    if (!document.startViewTransition) {
      toggleTheme()
      return
    }

    const style = document.createElement('style')
    style.id = 'view-transitions-style'
    style.textContent = `
      ::view-transition-group(root) {
        animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 10000;
      }
      
      ::view-transition-old(root) {
        mix-blend-mode: normal;
        animation: theme-switch-expand 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
      
      ::view-transition-new(root) {
        -webkit-mask: url('shigure-ui.webp') center / 0 no-repeat;
        mask: url('shigure-ui.webp') center / 0 no-repeat;
        -webkit-mask-position: center;
        mask-position: center;
        animation: theme-switch-expand 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
      }
    `
    document.head.appendChild(style)

    const t = document.startViewTransition(() => {
      toggleTheme()
    })

    await t.finished
    style.remove()
  }

  const toggleScrollButton = () => {
    const mainCard = document.getElementById('mainCard')
    if (!mainCard || !scrollToTopRef.current || !navContainerWrapperRef.current) {
      return
    }

    const mainCardRect = mainCard.getBoundingClientRect()
    const isOutOfView = mainCardRect.bottom < 0

    if (isOutOfView) {
      scrollToTopRef.current.classList.remove('opacity-0', 'scale-0')
      scrollToTopRef.current.classList.add('opacity-100', 'scale-100')
      navContainerWrapperRef.current.style.transform = 'translateX(15px)'
    } else {
      scrollToTopRef.current.classList.remove('opacity-100', 'scale-100')
      scrollToTopRef.current.classList.add('opacity-0', 'scale-0')
      navContainerWrapperRef.current.style.transform = 'translateX(0)'
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  useEffect(() => {
    positionIndicator()
  }, [location.pathname])

  useEffect(() => {
    const handleScroll = () => toggleScrollButton()
    const handleResize = () => positionIndicator()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)
    
    // Initial setup
    toggleScrollButton()
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget
    if (!navIndicatorRef.current) return

    const padding = 2
    const newLeft = target.offsetLeft - padding
    const newWidth = target.offsetWidth + padding * 2

    navIndicatorRef.current.style.left = `${newLeft}px`
    navIndicatorRef.current.style.width = `${newWidth}px`

    setIndicatorState({ left: newLeft, width: newWidth })
  }

  return (
    <div className="fixed bottom-8 md:top-8 md:bottom-full left-1/2 transform -translate-x-1/2 z-50 w-auto">
      <div id="nav-wrapper" className="relative flex items-center justify-center">
        <button
          ref={scrollToTopRef}
          onClick={() => {
            scrollToTop()
          }}
          className="absolute left-0 p-1.5 bg-theme-card-dark backdrop-blur-lg border border-theme-card-border rounded-full hover:bg-theme-card transition-all opacity-0 scale-0 transform -translate-x-[100%] origin-right"
          aria-label="Scroll to top"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.4s var(--smooth-animation)',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
            zIndex: 10,
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="currentColor"
            className="text-theme-foreground-secondary"
            viewBox="0 0 16 16"
            style={{ transition: 'transform 0.2s var(--smooth-animation)' }}
          >
            <path d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z" />
          </svg>
        </button>

        <div
          ref={navContainerWrapperRef}
          className="relative transition-transform duration-300 transform translate-x-0"
          style={{ transition: 'transform 0.5s var(--smooth-animation)' }}
        >
          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20 rounded-full blur-lg dark:opacity-50" />

          {/* glass */}
          <nav
            id="nav-container"
            className="relative backdrop-blur-lg bg-theme-card-dark border border-theme-card-border rounded-full px-1.5 py-1.5 flex items-center shadow-xl transition-all duration-300 ease-out"
          >
            {/* grain */}
            <div
              className="absolute inset-0 rounded-full opacity-10"
              style={{
                backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');",
              }}
            />

            <div
              ref={navIndicatorRef}
              id="nav-indicator"
              className="absolute top-1/2 -translate-y-1/2 h-[calc(100%-10px)] backdrop-blur-sm border-2 border-theme-card-border rounded-full"
              style={{
                backdropFilter: 'blur(4px)',
                boxShadow: '0 0 10px rgba(139, 92, 246, 0.07)',
                transition: 'all 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              {/* gradient border */}
              <div className="absolute -inset-[1px] bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full -z-10 opacity-50" />

              {/* inner glow */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_8px_rgba(255,255,255,0.5)] dark:shadow-[inset_0_0_8px_rgba(255,255,255,0.1)] shadow-theme-foreground/10" />

              {/* grain */}
              <div
                className="absolute inset-0 rounded-full opacity-20"
                style={{
                  backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ibWF0cml4IiB2YWx1ZXM9IjAgMCAwIDAgMSAwIDAgMCAwIDEgMCAwIDAgMCAxIDAgMCAwIDAuNSAwIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIvPjwvc3ZnPg==');",
                }}
              />
            </div>

            {routes.map((route, idx) => (
              <Link
                key={route.path}
                to={route.path}
                data-path={route.path}
                data-index={idx}
                data-active={location.pathname === route.path}
                onClick={(e) => {
                  handleNavLinkClick(e)
                }}
                className={cn(
                  'nav-link relative px-4 rounded-full text-sm font-medium transition-colors duration-300 mx-1',
                  location.pathname === route.path
                    ? 'text-theme-foreground hover:text-theme-foreground'
                    : 'text-theme-foreground-secondary hover:text-theme-foreground'
                )}
                style={{
                  textDecoration: 'none',
                  transition: 'all 0.2s ease-out',
                }}
              >
                <span className="relative z-10">{route.name}</span>
              </Link>
            ))}

            <button
              onClick={() => {
                setupThemeToggle()
              }}
              className="ml-2 p-1.5 bg-theme-card-dark border dark:border-theme-card-border hover:bg-theme-card rounded-full transition-all md:flex z-10"
              aria-label="Toggle theme"
              style={{
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="text-theme-foreground-secondary hidden dark:block"
                viewBox="0 0 16 16"
              >
                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
              </svg>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                className="text-theme-foreground-secondary block dark:hidden"
                viewBox="0 0 16 16"
              >
                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z" />
              </svg>
            </button>
          </nav>
        </div>
      </div>

      <style>{`
        :root {
          --smooth-animation: cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes theme-switch-expand {
          0% {
            mask-size: 0;
          }
          10% {
            mask-size: 50vmax;
          }
          80% {
            mask-size: 45vmax;
          }
          100% {
            mask-size: 2000vmax;
          }
        }

        .nav-link:hover[data-active="false"] {
          transform: translateY(-1px);
        }

        .nav-link:active {
          transform: translateY(0);
        }

        #nav-wrapper {
          width: max-content;
        }

        #scroll-to-top:hover svg {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  )
}

export default NavigationBar
