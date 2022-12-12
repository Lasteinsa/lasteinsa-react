import { createBrowserRouter } from "react-router-dom"
import About from "../Pages/About"
import Home from "../Pages/Home"
import Project from "../Pages/Project"
import RootLayout from "../Pages/RootLayout"


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