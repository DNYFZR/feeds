// Feeds App
import "./main.css"
import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"

import Sidebar from "./components/Sidebar"
// import Render from "./components/Markdown"
import Docs from "./components/Docs"
import TexasHoldEm from "./components/GamesPoker"
import Blackjack from "./components/GamesBlackjack"

function App() {
  const pageList = [
    "home", 
    "game : blackjack",
    "game : poker",
    "developer resources",
    // "project : pipOS",
  ];

  const Layout = () => {
    return (
      <>
        <Sidebar title="menu" keys={pageList} />
        <div className="app-content">
          <Outlet />
        </div>
      </>
    );
  };

  const Home = () => {
    return(
      <div className="centered-block">
        <h3>Hello World...</h3>  
        <img className="home-img" src="/feeds/images/sunrise.jpg" />
        <p>
          Check the menu for games, developer resources, notes, articles etc.
        </p>
      </div>
    );
  };

  const AppRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {path: '/feeds', element: <Home />},
        {path: '/feeds/developer-resources', element: <Docs />},
        {path: '/feeds/game-poker', element: <TexasHoldEm />},
        {path: '/feeds/game-blackjack', element: <Blackjack />},
        // {path: '/feeds/project-pipOS', element: <Render path="/feeds/posts/pipOS.md" />},
      ],
    },
  ]);

  return (
    <RouterProvider router={AppRoutes} />
  )
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
