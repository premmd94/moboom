import React, { useState } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Header from './components/Header'
import Home from './pages/Home';
import './assets/fonts/css/font-awesome.css';
import './App.scss';
import { ProductContext } from './services/Api';
import Footer from './components/Footer';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);
function App() {
  const [searchProduct, setsearchProduct] = useState();
  const [clearSearch, setClearSearch] = useState()

  return (
    <React.Fragment>
      <ProductContext.Provider value={{ search: searchProduct, change: setsearchProduct, clear: setClearSearch, clearSearch: clearSearch }}>
        <Header></Header>
        <RouterProvider router={router} />
        <Footer></Footer>
      </ProductContext.Provider>

    </React.Fragment>

  );
}

export default App;
