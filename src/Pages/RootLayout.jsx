import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Outlet, useLocation, useNavigate } from "react-router"
import Navigation from "../components/Navigation"
import { themeAction } from "../store/theme"
import ToggleTheme from "../components/ToggleTheme"
import Snowfall from "react-snowfall"
import { AnimatePresence, motion } from "framer-motion"

const RootLayout = () => {
    const {pathname}    = useLocation()
    const navigate      = useNavigate()

    const dispatch  = useDispatch()
    const isDay     = useSelector(state => state.theme.isDay)

    const rootRef   = useRef()

    const changeTheme = () => {
        dispatch(themeAction.changeTheme())
    }

    useEffect(() => {
        if(pathname === '/') {
            navigate('/home',{replace: true})
        }
    },[pathname,navigate])

    return(
        <div ref={rootRef} id='rootLayout' className={`${isDay? '' : 'dark'}`}>
            {
                !isDay ?
                    <Snowfall
                        style={{
                            position: 'fixed',
                            width: '100vw',
                            height: '100vh',
                        }}
                        snowflakeCount={100}/>
                    :
                    <Snowfall
                        style={{
                            position: 'fixed',
                            width: '100vw',
                            height: '100vh',
                        }}
                        color="#FFA1CF"
                        snowflakeCount={110}/>
            }
            <div className="py-8 dark:bg-black">
                <Navigation/>
                <ToggleTheme isDay={isDay} changeTheme={changeTheme} />
                <main className="mx-8">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={pathname}
                            initial={{ opacity: 0, x:-50}}
                            animate={{ opacity: 1, x:0}}
                            exit={{ opacity: 0, x:-50, y: 0}}
                        >
                            <Outlet/>
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    )
}

export default RootLayout