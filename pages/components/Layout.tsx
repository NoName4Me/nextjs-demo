import Header from './Header'
import Footer from './Footer'
import styles from './Layout.module.scss'

export default function Layout({ children }: { children: React.ReactNode }) {

  return <>
    <Header />
    <main className={styles.main}>{children}</main>
    <Footer />
  </>
}