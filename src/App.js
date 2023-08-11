import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Qualification from './components/qualifications/Qualification';
import Services from './components/services/Services';
import Skills from './components/skills/Skills';

function App() {
  return (
    <div>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Contact />
      </main>
    </div>
  );
}

export default App;
