import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Form from './components/Form'
import List from './components/Lists'
import Video from './components/Video'

function App() {
  return (
    <>
      <Header />
      <main>
        <List titulo={"Lista 1"} />
        <List titulo={"Lista 2"} />
        <Video />
        <Form />
      </main>
        <Footer />
    </>
  )
}

export default App
