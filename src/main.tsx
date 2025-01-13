
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')!).render(
  <Auth0Provider
    domain="dev-y870izsbr3wx4epg.us.auth0.com"
    clientId={"Zpc4qwTgZShW82WUmnAZtwQpHS9OjXck"}
    authorizationParams={{
      redirect_uri: window.location.origin,
      audience: "this-is-our-logo-generator-app-project.",
      // scope: "read:user"
    }}
  >
    <App />
  </Auth0Provider>,
)
