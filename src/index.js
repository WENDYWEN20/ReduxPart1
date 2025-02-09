import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import store from './app/store.js'
import { Provider } from 'react-redux'

import { worker } from './api/server.js'


// Wrap app rendering so we can wait for the mock API to initialize
async function start() {
  // Start our mock API server
  await worker.start({ onUnhandledRequest: 'bypass' })

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  )
}

start()

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <BrowserRouter> 
//     <Provider store={store}> 
//     <App />
//     </Provider>
//     </BrowserRouter>
//   </StrictMode>,
// )

