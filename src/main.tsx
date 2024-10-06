import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './app'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './libs/react-query-client'



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
