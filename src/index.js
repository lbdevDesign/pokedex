import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PokemonPage from './pages/pokemonSingle';
import { PokemonProvider } from './data/pokeContext';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/**
 * Routes configuration: Defines application routes for the home page (/) and individual Pokemon pages (/pokemon/:id).
 */
const router = createBrowserRouter([
  {
    path:"/",
    element: <App />
  },
  {
    path:"/pokemon/:id",  // Matches paths with a dynamic ID parameter
    element: <PokemonPage /> // Renders the PokemonPage component for individual Pokemon pages
  }
])

/**
 * Application entry point: Renders the root React element with context and routing providers.
 */
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


