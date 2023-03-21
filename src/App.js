import './App.css';
import Home from './components/home/Home';
import { QueryClient, QueryClientProvider } from "react-query";
import { DataProvider } from './context/Context';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Character from './components/charactersCards/Character';
import CharacterSingular from './components/characterSing/CharacterSingular';


function App() {
  const queryClient = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}> 
      <BrowserRouter>
          <DataProvider>    
          <Routes>        
              <Route path='/'element ={<Home/>}></Route>
              <Route path='/character/:name' element={<CharacterSingular/>}></Route>              
              <Route path="*" element="Error 404" />
         
          </Routes>
        </DataProvider>
        </BrowserRouter>
     </QueryClientProvider>

    </div>
  );
}

export default App;
