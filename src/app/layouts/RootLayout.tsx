import { Outlet } from 'react-router'
import { Header } from '../components/Header'
import { Footer } from '../components/Footer'
import { ScrollToTop } from '../components/ScrollToTop'
import { BackToTopButton } from '../components/BackToTopButton'
import { LanguageProvider } from '../context/LanguageContext'

export function RootLayout() {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-white">
        <ScrollToTop />
        <Header />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        <BackToTopButton />
      </div>
    </LanguageProvider>
  )
}
