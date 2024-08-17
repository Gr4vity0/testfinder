import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Button from 'react-bootstrap/Button';
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { IoGameController } from "react-icons/io5";
import { GiBroom } from "react-icons/gi";



const App = () => {
  return (
    <>
    <Header />
    <main className="py-3">
      <Container className='ms-auto text-center overlay-index-container'>
        <div className="overlay-text">
          <h1>HelpFinder</h1>       
          <p>Simplifiez votre quotidien, trouvez du soutien en cas de besoin, et partagez des moments inoubliables.</p>
          <hr />
          <h5><span className="icons-index"><IoGameController /></span>Trouver un ActivityBro gaming, sport, musique, pote de sortie...</h5>
          <h5><span className="icons-index"><GiBroom /></span>Trouvez de l'Aide pour vos Taches ménagères (courses, ménage, cuisine, repassage...)</h5>          
          <h5><span className="icons-index"><HiWrenchScrewdriver /></span>Trouver un HandyMan Mecanicien, travaux maison, jardinage...</h5>
          <Button variant="warning" size="s">Les Annonces</Button>
          <hr />
          <h5>Aide d'urgence, repas, hébergement, accompagnement...</h5>    
          <Button variant="warning" size="s">Les Infos Utiles</Button>      
        </div>
      </Container>
    <Footer />
    </main>
    </>

  )
}

export default App