import { useState, useEffect } from 'react'
import { GrainGradient } from '@paper-design/shaders-react';
import './App.css'

function App() {
  const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight })

  useEffect(() => {
    const onResize = () => setSize({ width: window.innerWidth, height: window.innerHeight })
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <GrainGradient
        width={size.width}
        height={size.height}
        colors={["#7300ff", "#eba8ff", "#00bfff", "#2b00ff"]}
        colorBack="#000000"
        softness={0.5}
        intensity={0.5}
        noise={0.25}
        shape="corners"
        speed={1}
      />
      <h1 style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: 0, color: 'white', fontFamily: "'Fraunces', serif", fontWeight: 900, fontSize: 'clamp(4rem, 5vw, 16rem)' }}>13</h1>
      <a href="https://shaders.paper.design/grain-gradient" target="_blank" style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', color: 'white', textDecoration: 'none' }}>shaders</a>
    </div>
  )
}

export default App
