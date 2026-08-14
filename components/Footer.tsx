import { useEffect, useState } from 'react'
import style from '../styles/style.module.css'

export default function Footer() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const updateTime = () =>
      setTime(
        new Date()
          .toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
          })
          .toUpperCase()
      )

    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className={style.footer}>
      <p className={style.footerNote}>
        <span className={style.copySymbol}>©</span> No copyright issues.
        <br />
        Feel free to copy. If you need any help, ping me!
      </p>
      <p className={style.footerTime} suppressHydrationWarning>
        {time && (
          <span className={style.footerTimeInner}>
            <svg
              className={style.clockIcon}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M12 7v5l3 2" />
            </svg>
            {time}
          </span>
        )}
      </p>
    </footer>
  )
}
