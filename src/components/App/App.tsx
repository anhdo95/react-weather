import { BrowserRouter } from "react-router-dom";

import RouterOutlet from '@/components/RouterOutlet'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

import './App.css'

function App(props: any) {
  return (
    <BrowserRouter>
      <Header />
      <main className="main">
        <RouterOutlet />
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default App
