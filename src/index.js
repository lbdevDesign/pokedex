import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PokemonPage from './pages/pokemonSingle';
import { PokemonProvider } from './data/pokeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/pokemon/:id",
    element: <PokemonPage />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <PokemonProvider>
    <RouterProvider router={router}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RouterProvider>
  </PokemonProvider>
);


