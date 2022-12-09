import Stellar from "./Styles/Style"
import snow from "../assets/images/snowflake.png"

const ToggleTheme = ({isDay, changeTheme}) => {
    return(
        <div className="flex place-content-end place-items-center mt-4 mr-8">
            <img src={snow} className="w-8 h-8 mx-2 animate-pulse" alt="snow"/>
            <label className="inline-flex relative items-center cursor-pointer">
                <input type="checkbox" value="" className="sr-only peer" checked={!isDay} onChange={changeTheme}/>
                <div className={Stellar.toggleTheme}></div>
            </label>
        </div>
    )
}

export default ToggleTheme