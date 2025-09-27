import React, { useState } from 'react'
import { GlobalContextProviders } from '../_Globalcontextprovider'
import Home from '../Home'
import LoginPage from '../login'

const App: React.FC = () => {
  const [route, setRoute] = useState<'login' | 'home'>('login')

  return (
    <GlobalContextProviders>
      <div className="app-viewport">
        {route === 'login' ? (
          <div>
            <LoginPage />
            <div style={{ position: 'fixed', bottom: 16, right: 16 }}>
              <button onClick={() => setRoute('home')}>Enter App</button>
            </div>
          </div>
        ) : (
          <div>
            <Home />
            <div style={{ position: 'fixed', bottom: 16, right: 16 }}>
              <button onClick={() => setRoute('login')}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </GlobalContextProviders>
  )
}

export default App
