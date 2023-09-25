import { Inter } from 'next/font/google'
import Link from 'next/link';
import styles from './rootStyle.module.css';
import './global.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Globext',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className={styles.header}>
          <h1>
            <Link className={styles.homeLink} href={"/home"}>
              GLOBOMANTICS
            </Link>
          </h1>
          <h3>
            <Link className={styles.menuBarLinks} href="/blog">
              Blog
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/settings">
              Settings
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLinks} href="/conference">
              Conference
            </Link>
          </h3>
        </header>
        {children}
      </body>
    </html>
  )
}
