import logo from './logo.svg';
import './App.css';
import Jumbutron from './component/Jumbutron';
import SearchFeild from './component/SearchFeild';
import { Images } from './component/Images';
import { useAxios } from './hooks/useAxios';
import { createContext } from 'react';


export const ImageContext = createContext();

function App() {

  const {response, isLoading,error,fetchData} =
   useAxios(`search/photos?page=1&query=office&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
  console.log(response)


  const value = {
    response,
    isLoading,
    error,
    fetchData
  }
   return (
    <div >
  <ImageContext.Provider value={value}>
  <Jumbutron>
    <SearchFeild/>
    
  </Jumbutron>
  <Images/>
  </ImageContext.Provider>
    </div>
  );
}

export default App;
