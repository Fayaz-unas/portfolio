import { useState, lazy, Suspense, memo } from 'react'
import { AnimatePresence } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import Hero from './components/Hero'
import Notification from './components/Notification'
import Footer from './components/Footer'

// Lazy load components that are not immediately visible or are heavy
const About = lazy(() => import('./components/About'))
const HorizontalSection = lazy(() => import('./components/HorizontalSection'))
const Contact = lazy(() => import('./components/Contact'))

const LoadingFallback = memo(() => (
  <div className="w-full h-24 flex items-center justify-center bg-white border-t-[12px] border-black" aria-label="Loading content">
    <div className="flex gap-2">
      <div className="w-4 h-4 bg-primary animate-bounce" />
      <div className="w-4 h-4 bg-secondary animate-bounce [animation-delay:-.3s]" />
      <div className="w-4 h-4 bg-accent animate-bounce [animation-delay:-.5s]" />
    </div>
  </div>
))

LoadingFallback.displayName = 'LoadingFallback'

function App() {
  const [notification, setNotification] = useState(null)

  return (
    <div className="relative bg-white font-body antialiased">
      <CustomCursor />

      <main className="relative">
        <Hero setNotification={setNotification} />

        <Suspense fallback={<LoadingFallback />}>
          <div className="bg-white border-t-[12px] border-black" id="about">
            <div className="w-full">
              <About />
            </div>
          </div>
          <HorizontalSection />
          <div className="relative z-10 bg-white border-t-[12px] border-black">
            <Contact setNotification={setNotification} />
          </div>
        </Suspense>
      </main>

      <Footer />

      <AnimatePresence>
        {notification && (
          <Notification
            {...notification}
            onClose={() => setNotification(null)}
          />
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
