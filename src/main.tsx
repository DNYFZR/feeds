// Feeds App
import "./main.css"
import logo from "/icons/feeds-128.png"

import React from "react"
import { createRoot } from "react-dom/client"
import { createBrowserRouter, RouterProvider, Outlet } from "react-router"

import Sidebar from "./components/Sidebar"
import Render from "./components/Markdown"
import Home from "./pages/home"


function App() {
  const pageList = ["base", "hello world", "rust simulator", "rust geospatial"];

  const Layout = () => {
    return (
      <div>
        <div className="app-header">
          <a onClick={() => window.location.reload()}>
            <img className="app-logo" src={logo} />
          </a>

          <h2 className="app-title">{`feeds`}</h2>
        </div>
        <Sidebar title="menu" keys={pageList} />
        
        <div className="app-content">
          <Outlet />
        </div>
        
      </div>
    );
  };

  const AppRoutes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {path: '/feeds/', element: <Home />},
        {path: '/feeds/hello-world', element: <Render path="/feeds/markdown/posts/2024-12-10-hello-world.md" />},
        {path: '/feeds/rust-simulator', element: <Render path="https://raw.githubusercontent.com/DNYFZR/rs-sim/refs/heads/main/README.md" />},
        {path: '/feeds/rust-geospatial', element: <Render path="https://raw.githubusercontent.com/DNYFZR/rs-geospatial/refs/heads/main/README.md" />},

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
