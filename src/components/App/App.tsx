import { BrowserRouter } from "react-router-dom";

import Header from '@/components/Header'
import RouterOutlet from '@/components/RouterOutlet'

import './App.css'

function App(props: any) {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <RouterOutlet />
      </main>
      {/* <Footer /> */}
    </BrowserRouter>
  )
}

export default App
