import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ScrollToTop } from './components/ScrollToTop'
import { LanguageProvider } from './context/LanguageContext'
import { MainLayout } from './layouts/MainLayout'
import { About } from './pages/About'
import { Approach } from './pages/Approach'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Industries } from './pages/Industries'
import { NotFound } from './pages/NotFound'
import { Projects } from './pages/Projects'
import { Services } from './pages/Services'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="a-propos" element={<About />} />
            <Route path="services" element={<Services />} />
            <Route path="secteurs" element={<Industries />} />
            <Route path="approche" element={<Approach />} />
            <Route path="projets" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
