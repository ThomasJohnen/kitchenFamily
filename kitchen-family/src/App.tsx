import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'
import ResumeCard from './components/Card'
import Carousel from './components/Carousel'
import HeadingComponant from './components/Headings'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
      <HeadingComponant
        titre="Bienvenue sur mon app de recettes 🍲"
        sousTitre="Sélectionne une catégorie ci-dessus pour explorer les plats."
      />

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
