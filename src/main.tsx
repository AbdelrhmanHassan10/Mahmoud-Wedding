import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { LazyMotion, domAnimation } from 'framer-motion'
import App from './App'
import SmoothScroll from './components/SmoothScroll'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* only the animation features the site uses; components use <m.*> instead of <motion.*> */}
      <LazyMotion features={domAnimation} strict>
        <SmoothScroll>
          <App />
        </SmoothScroll>
      </LazyMotion>
    </BrowserRouter>
  </React.StrictMode>,
)
