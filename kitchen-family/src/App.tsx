import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import ResumeCard from './components/Card'
import Carousel from './components/Carousel'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <div style={{ padding: "4rem" }}>
        <h1>Bienvenue sur mon app de recettes 🍲</h1>
        <p>Sélectionne une catégorie ci-dessus pour explorer les plats.</p>
      </div>
    <ResumeCard
        title="Sushi Deluxe"
        description="Ceci est un super test"
        imageUrl="https://www.sushihouse.be/img/sushi_bg.jpg"
        duringTime="30 min"
        categories={["Traditionnel", "Végétarien"]}
    />

    <Carousel/>    

    </>
  )
}

export default App
