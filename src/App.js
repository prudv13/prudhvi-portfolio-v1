import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';

function App() {
  return (
    <div>
      <Header />

      <main className='main'>
        <Home />
      </main>
    </div>
  );
}

export default App;
