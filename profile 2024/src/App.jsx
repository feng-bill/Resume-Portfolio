import { useState } from 'react'
import './App.css'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import Card from './components/card/Card.jsx'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <header >
        <Header />
      </header>
      <main >
        <Card />
        {/* <Layout>
        <Blog />
      </Layout> */}
      </main>
      <Footer />
    </>
  )
}

export default App
