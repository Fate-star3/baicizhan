import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/rem'
import '@/style/reset.css'
// 引入字体图标
import 'font-awesome/css/font-awesome.min.css'
import '@/assets/icon/iconfont.css'

import { BrowserRouter,HashRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import 'swiper/dist/css/swiper.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>

)
