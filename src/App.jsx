import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Trate from './components/Trate/Trate';
import Why from './components/Why/Why';

function App() {
  return (
    <div className="App">
      <Header/>
      <Why/>
      <Trate/>
      <Footer/>
    </div>
  );
}

export default App;