import { Routes, Route } from 'react-router-dom'
import { LanguageProvider } from './context/LanguageContext'
import AppLayout from './components/Layout/AppLayout'
import Dashboard from './pages/Dashboard'
import SwotAnalysis from './pages/SwotAnalysis'
import MarketAnalysis from './pages/MarketAnalysis'

function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/swot-analysis" element={<SwotAnalysis />} />
          <Route path="/market-analysis" element={<MarketAnalysis />} />
        </Route>
      </Routes>
    </LanguageProvider>
  )
}

export default App
