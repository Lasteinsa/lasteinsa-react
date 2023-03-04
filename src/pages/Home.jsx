import { motion } from "framer-motion"
import BottomLine from "../components/BottomLine"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import Heading from "../components/Heading";
import { faAndroid, faReact } from "@fortawesome/free-brands-svg-icons";
import TextInfo from "../components/TextInfo";


const Home = ({title}) => {
    document.title  = `${title} | Lasteinsa`

    return(
        <div className="dark:text-white">
            <div className="sm:h-96 grid grid-flow-row place-content-center px-8">
                <motion.div
                    className="text-xl font-bold text-green-600 dark:bg-white w-fit p-2 rounded-md"
                    transition={{delay: 0.3}}
                    initial={{opacity: 0, y:-50}}
                    whileInView={{opacity: 1, y:0}}
                    viewport={{ once: true }}>
                        Konnichiwa ~
                </motion.div>
                <motion.div
                    className="text-2xl dark:text-white space-y-4"
                    transition={{delay: 0.8}}
                    initial={{opacity: 0, x:50}}
                    whileInView={{opacity: 1, x:0}}
                    viewport={{ once: true }}>
                        <p className="text-3xl font-semibold">I'm Ruby Ahmad Fauzan, </p>
                        <p className="text-2xl"> <span className="border-b-2 border-blue-400">React JS</span> and Android <span className="border-b-2 border-purple-400">Kotlin</span> Developer</p> 
                        <p className="text-xl">
                            Specialize in Web Front End using React JS <FontAwesomeIcon icon={faReact} />, and Modern Android Kotlin for Android <FontAwesomeIcon icon={faAndroid} /> <br />
                        </p>
                </motion.div>
            </div>

            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

            <motion.div
                className="space-y-4"
                transition={{delay: 1}}
                initial={{opacity: 0, x:-50}}
                whileInView={{opacity: 1, x:0}}
                viewport={{ once: true }}>

                <Heading>
                    <FontAwesomeIcon icon={faCode} className="mx-2" />
                    What I Can Do ?
                </Heading>
                
                <BottomLine/>

                <TextInfo>
                    I like coding and thats what make me here
                </TextInfo>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="m-4 p-8 rounded-sm bg-sky-500 text-white dark:bg-slate-800 space-y-4">
                        <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png" width="100px" className="bg-slate-100 p-4 rounded-md" />
                        <p className="text-2xl font-semibold"> Javascript & ReactJS </p>
                        <div className="space-y-4">
                            <p> 
                                I have experience working with both JavaScript and React JS. <br />
                                I am proficient in writing clean and efficient JavaScript code, 
                                and have extensive knowledge of the React JS framework, 
                                I have a strong understanding of how to build scalable and maintainable code using these technologies.
                            </p>
                            <ul className="list-disc mx-4">
                                <li> React Hooks & Custom Hooks </li>
                                <li> Redux State Manajement </li>
                                <li> React Router </li>
                                <li> Material UI </li>
                                <li> Etc.. </li>
                            </ul>
                        </div>
                    </div>
                    <div className="m-4 p-8 rounded-sm bg-sky-500 text-white dark:bg-slate-800 space-y-4">
                        <img src="https://cdn.jsdelivr.net/npm/programming-languages-logos/src/kotlin/kotlin.png" width="100px" className="bg-slate-100 p-4 rounded-md" />
                        <p className="text-2xl font-semibold"> Kotlin Android </p>
                        <div className="space-y-4">
                            <p> 
                                I have also worked with Android development. <br />
                                Additionally, I am knowledgeable in using Android Studio. 
                                Overall, I am capable of building high-quality, maintainable, and scalable Android applications 
                                using Kotlin and the latest Android development practices
                            </p>
                            <ul className="list-disc mx-4">
                                <li> MVVM Pattern </li>
                                <li> Dagger Hilt Dependency Injection </li>
                                <li> Kotlin Coroutine Flow </li>
                                <li> Etc.. </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </motion.div>

            {/* <motion.div
                transition={{delay: 0.7}}
                initial={{opacity: 0, y: -50}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{ once: true }}>
                    
                <p className="text-center text-3xl mt-16">
                    <FontAwesomeIcon icon={faMusic} className="mx-2" />
                    Favorite Music
                </p>
                <BottomLine/>
                <p className="text-center text-lg mt-4">talk is cheap. show me your playlist !</p>

                <div className="flex items-center mt-4 p-8">
                    <Swiper className="mx-2"
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            dynamicBullets: true,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}>
                        {
                            musicAlbumData.map(({title, artist, url}, i) => (
                                <SwiperSlide key={i}>
                                    <div className="grid grid-cols-1 sm:flex justify-items-center sm:place-content-center">
                                        <div>
                                            <img className="rounded-lg w-36" src={url} alt={title} />
                                        </div>
                                            <p 
                                                className="text-center w-full sm:w-1/6 sm:mx-8 mt-4 mb-8 p-4 rounded-lg text-white bg-gradient-to-r from-purple-300  to-purple-400">
                                                    <span className="text-xl tracking-wide border-b-2">{title}</span> <br /> by <br /> {artist}
                                            </p>
                                    </div>
                                </SwiperSlide>
                            ))
                        }
                    </Swiper>
                </div>
            </motion.div> */}
        </div>
    )
}

export default Home
