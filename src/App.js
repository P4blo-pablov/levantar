import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Service from './components/service/Service';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';

const App = () =>{
  return(
    <>
      <Sidebar />
      <main className='main'>
        <Home/>
        <About/>
        <Service/>
        <Portfolio/>
        <Contact/>
      </main>
    </>
  )
}

export default App;
