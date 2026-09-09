import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ReactLenis } from 'lenis/react'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ReactLenis
      root
      options={{
        lerp: 0.08,             // Slightly tighter — removes "floaty" overshoot
        duration: 1.2,          // Shorter sweep — feels crisper on enterprise hardware
        smoothWheel: true,
        syncTouch: true,        // Native momentum scroll on iOS
        touchMultiplier: 1.4,   // Tuned for responsive mobile feel
        wheelMultiplier: 0.9,   // Slightly under 1 to dampen excessive scroll speed
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo-out
        autoRaf: true,          // Let Lenis manage its own RAF — no double-scheduling
        infinite: false,
      }}
    >
      <App />
    </ReactLenis>
  </StrictMode>,
)
