import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars, faHome, faPaintBrush, faPencil } from "@fortawesome/free-solid-svg-icons"
import Collapsible from "react-collapsible"
import { NavLink } from "react-router-dom"
import { useState } from "react"

const Navigation = () => {
    const [isExpanded, setIsExpanded] = useState(false)

    const NavbarData = [
        {
            name: "Home",
            path: '/home',
            icon: faHome
        },
        // {
        //     name: "Project",
        //     path: '/project',
        //     icon: faPaintBrush
        // },
        {
            name: "About",
            path: '/about',
            icon: faPencil
        },
    ]

    const onExpandHandler = () => {
        setIsExpanded(!isExpanded)
    }

    return(
        <nav className="flex justify-between bg-gradient-to-r mx-8 rounded-xl from-blue-500 to-blue-300">
            <ul className="hidden sm:flex">
                {
                    NavbarData.map(({name, path, icon}, key) => (
                            <li key={key} className="mx-4 my-2 px-4 py-2 rounded-lg text-white">
                                <NavLink key={name} to={path} className={({isActive}) => isActive? 'px-4 py-2 rounded-lg bg-blue-600' : ''}>
                                    <FontAwesomeIcon className="mr-2" icon={icon}/>
                                    {name}
                                </NavLink>
                            </li>
                    ))
                }
            </ul>
            <Collapsible
                easing="ease-in-out"
                transitionCloseTime={200}
                onOpen={onExpandHandler}
                onClose={onExpandHandler}
                trigger={
                <button className="mx-4 my-4 px-4 py-2 rounded-lg text-white sm:hidden"><FontAwesomeIcon icon={faBars} /></button>
            }>
                <ul className="sm:hidden">
                    {
                        NavbarData.map(({name, path, icon}) => (
                            <NavLink key={name} to={path} className={({isActive}) => isActive? 'px-4 py-2 rounded-lg bg-purple-400' : ''}>
                                <li className="mx-4 my-2 px-4 py-2 rounded-lg text-white">
                                    <FontAwesomeIcon className="mr-2" icon={icon}/>
                                    {name}
                                </li>
                            </NavLink>
                        ))
                    }
                </ul>
            </Collapsible>
        </nav>
    )
}

export default Navigation