import { createBrowserRouter } from "react-router-dom"
import About from "../pages/About"
import Home from "../pages/Home"
import Project from "../pages/Project"
import RootLayout from "../pages/RootLayout"


const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout/>,
        children: [
            {
                path: '/home',
                element: <Home title="Home"/>
            },
            {
                path: '/project',
                element: <Project title="Project"/>
            },
            {
                path: '/about',
                element: <About title="About"/>
            }
        ]
        
    }
])

export default router