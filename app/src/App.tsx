import LandingPage from '@/pages/landing/LandingPage'
import { ModeToggle } from '@/components/mode-toggle'

function App() {
  return (
    <div>
      <div className="fixed top-4 right-4 z-50">
        <ModeToggle />
      </div>
      <LandingPage />
    </div>
  )
}

export default App