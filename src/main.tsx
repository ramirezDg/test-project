import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './globals.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './components/ThemeProvider.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
      <Suspense>
        <Router>
          <App />
        </Router>
      </Suspense>
    </ThemeProvider>
  </React.StrictMode>,
)
