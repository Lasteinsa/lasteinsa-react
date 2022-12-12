import { faPaintBrush, faScaleBalanced, faSitemap } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BottomLine from "../components/BottomLine"
import { motion } from "framer-motion"

const Project = () => {
    return(
        <div className="dark:text-white">
            <p className="text-center text-3xl my-8">
                <FontAwesomeIcon icon={faPaintBrush} className="mx-2" />
                Project
            </p>
            <BottomLine/>
            <p className="text-center text-lg mt-4">Let's see what I made!</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 mx-2 my-4">
                <motion.div 
                    className="m-2"
                    transition={{delay: 0.3}}
                    initial={{opacity: 0, x:-100}}
                    whileInView={{opacity: 1, x:0}}
                    viewport={{ once: true }}>
                    <p className="text-center text-3xl mt-8">
                        <FontAwesomeIcon icon={faSitemap} className="mx-2" />
                        Gasturah
                    </p>
                    <BottomLine/>
                    <p className="text-md text-justify mt-4 px-8 py-4 bg-orange-200 dark:bg-orange-400 rounded-xl">
                        <div className="flex place-content-center mb-4">
                            <img className="w-44 shadow-lg rounded-lg" src="https://github.com/Lasteinsa/app_package_gasturah/raw/main/design/logo.png" alt="" />
                        </div>
                        <span className="text-lg">
                            Gasturah meaning "Gas to Situs Bersejarah". <br /> 
                            a Capstone Project for Bangkit 2022
                        </span>
                        <br />
                        Explore Our Lands of History <br />
                        Gasturah is a solution that we will provide to overcome this problem, 
                        where gasturah is present in the form of a mobile application that has various 
                        features so that users are interested and can learn, visit, and preserve historical sites in Indonesia.
                        <br />
                        <br />
                        <img className="inline-block" src="https://camo.githubusercontent.com/a4e0893c9019a9d09c5d3fdb8b3b7c3e2d254c6733b06cbe7b0248fd536141d4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6b6f746c696e2d2532333746353246462e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f746c696e266c6f676f436f6c6f723d7768697465" alt="" />
                        <img className="inline-block" src="https://camo.githubusercontent.com/5b7886225855c2c5ac8bcc15effcb289c238c597680d61c24e5e7541af59ee10/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416e64726f69642d3344444338343f7374796c653d666f722d7468652d6261646765266c6f676f3d616e64726f6964266c6f676f436f6c6f723d7768697465" alt="" />
                        <br />
                        <br />
                        Github Link : 
                        <a target="_blank" href="https://github.com/Lasteinsa/app_package_gasturah"> Gasturah</a>
                    </p>
                </motion.div>
                <motion.div 
                    className="m-2"
                    transition={{delay: 0.5}}
                    initial={{opacity: 0, x:100}}
                    whileInView={{opacity: 1, x:0}}
                    viewport={{ once: true }}>
                    <p className="text-center text-3xl mt-8">
                        <FontAwesomeIcon icon={faScaleBalanced} className="mx-2" />
                        Smart Scaling
                    </p>
                    <BottomLine/>
                    <p className="text-md text-justify mt-4 px-8 py-4 bg-green-200 dark:bg-green-400 rounded-xl">
                        <div className="flex place-content-center mb-4">
                            <img className="w-44 shadow-lg rounded-lg bg-white" src="https://raw.githubusercontent.com/Lasteinsa/app_timbanganpintar/release/app/src/main/res/drawable/logo.png" alt="" />
                        </div>
                        <span className="text-lg">
                            Scaling App for Bank Sampah Teratai. <br /> 
                        </span>
                        <br />
                        Android-based smart scale application for Bank Sampah Teratai <br />
                        This app provide smart scaling use Loadcell + Arduino and HC-05 Bluetooth for transfering data.
                        It's also can work without Arduino
                        <br />
                        <br />
                        <img className="inline-block" src="https://camo.githubusercontent.com/a4e0893c9019a9d09c5d3fdb8b3b7c3e2d254c6733b06cbe7b0248fd536141d4/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6b6f746c696e2d2532333746353246462e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d6b6f746c696e266c6f676f436f6c6f723d7768697465" alt="" />
                        <img className="inline-block" src="https://camo.githubusercontent.com/5b7886225855c2c5ac8bcc15effcb289c238c597680d61c24e5e7541af59ee10/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f416e64726f69642d3344444338343f7374796c653d666f722d7468652d6261646765266c6f676f3d616e64726f6964266c6f676f436f6c6f723d7768697465" alt="" />
                        <br />
                        <br />
                        Github Link : 
                        <a target="_blank" href="https://github.com/Lasteinsa/app_timbanganpintar"> Smart Scaling</a>
                    </p>
                </motion.div>
            </div>
        </div>
    )
}

export default Project