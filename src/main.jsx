import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// pages
import HomePage from './pages/HomePage.jsx'
import SingleMoviePage from './pages/SingleMoviePage.jsx'
import FavoritesPage from './pages/FavoritesPage.jsx'

// Router
import { createBrowserRouter, RouterProvider, Router } from 'react-router-dom'

//Redux
import {Provider} from 'react-redux';
import store from './store/store.js';


const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<h1>404</h1>,
    children:[
      {
        path:"/",
        element:<HomePage/>        
      },
      {
        path:"/movie/:id",
        element:<SingleMoviePage/>        
      },
      {
        path:"/favorites",
        element:<FavoritesPage/>        
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
