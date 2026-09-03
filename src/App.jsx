import { useState } from 'react'
import Header from './components/Header/Header.jsx';
import Sect1 from './components/Sect1/Sect1.jsx';
import Sect2 from './components/Sect2/Sect2.jsx';
import Sect3 from './components/Sect3/Sect3.jsx';
import Sect4 from './components/Sect4/Sect4.jsx';
import Sect5 from './components/Sect5/Sect5.jsx';
import Footer from './components/Footer/Footer.jsx';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/styles.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Sect1 />
      <Sect2 />
      <Sect3 />
      <Sect4 />
      <Sect5 />
      <Footer />
    </>
  )
}

export default App
