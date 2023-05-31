import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import Home from './components/home';
import Dashboard from './components/dashboard';
import Header from './components/header';



function App() {
  return (
    <div className="App">
      <h1>Mi Aplicación de React</h1>
      <Home />
      <Dashboard />
      <Header />

    </div>

    
  );
}

export default App;
