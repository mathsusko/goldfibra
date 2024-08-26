import './global.css'
import { Header } from './components/Header'
import { BannerHero } from './components/BannerHero'
import { SegundaSection } from './components/SegundaSection'
import { Planos } from './components/Planos'
import { Solucao } from './components/Solucao'
import { Prova } from './components/Prova'
import { Footer } from './components/Footer'

export function App() {
  return (
    <div>
      <Header />
      <BannerHero />
      <SegundaSection />
      <Planos />
      <Solucao />
      <Prova />
      <Footer />
    </div>
  )
}
