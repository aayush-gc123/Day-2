import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './App.css';
import Cards from './components/Cards';

function App() {
 

  return (
    <>
   <Navbar/>
   <h1>Cards</h1>
  <Cards title = "Card1" des = "Card1 is this"/>
  <Cards title = "Card2" des = "Card2 is this"/>
  <Cards title = "Card3" des = "Card3 is this"/>
  <Cards title = "Card4" des = "Card4 is this"/>
   <Footer/>

    </>
  )
}

export default App
