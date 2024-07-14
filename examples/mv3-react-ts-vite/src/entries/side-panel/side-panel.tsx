import ReactDOM from 'react-dom/client'
import '../../style/index.css'
import App from './App'

import { testChrome } from '@/utils/chrome-utils'
testChrome('side-panel')

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
