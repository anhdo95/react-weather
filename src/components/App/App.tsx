import { BrowserRouter } from "react-router-dom";

import RouterOutlet from '@/components/RouterOutlet'
import Header from '@/components/Header'


import './App.css'

function App(props: any) {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <RouterOutlet />
      </main>
    </BrowserRouter>
  )
}

export default App
