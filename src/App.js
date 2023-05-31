import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

//importacion de los componentes
import Show from './components/Show';
import  Edit from './components/Edit';
import  Create  from './components/Create';


//importacion del router para la navegacion
import { BrowserRouter,Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">

 {/*configuracion de las rutas */}
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Show />} />
      <Route path='/create' element={<Create />} />
      <Route path='/edit/:id' element={<Edit />} />
    </Routes>
    </BrowserRouter>
    </div>

    
  );
}

export default App;
