import DesktopPage from './components/DesktopPage'
import Footer from './components/Footer'
import MobilePage from './components/MobilePage'

export default function Home() {
  return (
    <>
      <MobilePage />
      <DesktopPage />
      <Footer />
    </>
  )
}
