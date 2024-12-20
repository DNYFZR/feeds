// Feeds App
import "./main.css"
import logo from "/icons/code-128.png"

import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"

import Sidebar from "./components/Sidebar"
import Render from "./components/Markdown"

function App() {
  const pageList = [
    "home", 
    "fallout pip boy", 
  ];

  const Layout = () => {
    return (
      <div>
        <div className="app-header">
          <a onClick={() => window.location.reload()}>
            <img className="app-logo" src={logo} />
          </a>

          <h2 className="app-title">feeds</h2>
        </div>
        <Sidebar title="menu" keys={pageList} />
        
        <div className="app-content">
          <Outlet />
        </div>
        
      </div>
    );
  };

  const Home = () => {
  
    return(
      <div className="centered-block">
        <h3>Hello World...</h3>
  
        <div className="centered-block">
          <img src="/feeds/images/spaceman.jpg"/>
        </div>
      </div>
    );
  };

  const AppRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {path: '/feeds', element: <Home />},
        {path: '/feeds/fallout-pip-boy', element: <Render path="/feeds/posts/pipOS.md" />},

      ],
    },
  ]);

  return (
    <div className="app-main">
      <RouterProvider router={AppRoutes} />
    </div>
  )
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
