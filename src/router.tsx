// Feeds App
import "./main.css"
import { createBrowserRouter } from "react-router"

import Notes from "./pages/archive/notes"
import Projects from "./pages/archive/projects"
import Posts from "./pages/archive/posts"

export const AppRoutes = createBrowserRouter([
  {
    path: '/feeds/',
    element: (
      <div>
        <Sidebar 
          title="menu"
          keys={pageList}
          // keyChangeEvent={setActivePage}
          currentKey={activePage}
        />
        <Outlet />
      </div>
    ),
  },
  {
    path: '/feeds/notes',
    element: <Notes />,
  },
  {
    path: '/feeds/projects',
    element: <Projects />,
  },
  {
    path: '/feeds/posts',
    element: <Posts />,
  },
]);