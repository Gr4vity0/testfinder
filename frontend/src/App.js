import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Button from 'react-bootstrap/Button';
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { IoGameController } from "react-icons/io5";
import { GiBroom } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";



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
          <h5><span className="icons-index"><IoGameController /></span>Trouves ton <span className="text-warning">ActivityBro : </span> Gaming, sport, musique, pote de sortie...</h5>
          <h5><span className="icons-index"><GiBroom /></span>Une Aide : <span className="text-warning">Taches ménagères : </span> Courses, ménage, cuisine, repassage...</h5>          
          <h5><span className="icons-index"><HiWrenchScrewdriver /></span>Un <span className="text-warning">HandyMan : </span> Mecanicien, travaux maison, jardinage...</h5>
          <Button variant="warning" size="s">Les Annonces</Button>
          <hr />
          <h5><span className="icons-index"><FaHeart /></span><span className="text-warning">Situation d'urgence : </span> Hébergement, repas, écoute / accompagnement...</h5>    
          <Button variant="warning" size="s">Les Infos Utiles</Button>      
        </div>
      </Container>
    <Footer />
    </main>
    </>

  )
}

export default App