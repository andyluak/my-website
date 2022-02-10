import logo from './logo.svg';
import './App.scss';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import MyWork from './components/MyWork/MyWork';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Skills />
      <MyWork />
    </div>
  );
}

export default App;
