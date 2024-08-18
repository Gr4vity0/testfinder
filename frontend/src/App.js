import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import Button from 'react-bootstrap/Button';

import { HiWrenchScrewdriver } from "react-icons/hi2";
import { IoGameController } from "react-icons/io5";
import { GiBroom } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";



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
          <h5><span className="icons-index"><GiBroom /></span>Une Aide-<span className="text-warning">Taches ménagères : </span> Courses, ménage, cuisine, repassage...</h5>          
          <h5><span className="icons-index"><HiWrenchScrewdriver /></span>Un <span className="text-warning">HandyMan : </span> Mecanicien, travaux maison, jardinage...</h5>
          <h5><span className="icons-index"><GiClothes /></span>Tu veux te débarasser <span className="text-warning">Gratuitement </span>de tes affaires? Meubles, vêtements, electronique...</h5>
          <Button className="m-3" variant="warning" size="s" href="#products-index">Voir Les Annonces</Button><Button variant="danger" size="s" href="#products-index">Publier une Annonce</Button>
          <hr />
          <h5><span className="icons-index"><FaHeart /></span><span className="text-warning">Situation d'urgence : </span> Hébergement, repas, écoute / accompagnement...</h5>    
          <Button href="#products-index" variant="warning" size="s">Les Infos Utiles</Button>      
        </div>
      </Container>
      <div className="py-3">

      </div>
      <Container className="ms-auto text-center overlay-index-container" id="products-index">
      <div className="overlay-text-products">  
        <Outlet />
      </div>
      </Container>
    </main>
    <Footer />
    </>

  )
}

export default App