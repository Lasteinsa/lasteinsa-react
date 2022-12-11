import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper"
import { framework, musicAlbumData, programmingLanguage } from "../utilities/Data";
import BottomLine from "../components/BottomLine"

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGamepad, faMusic } from "@fortawesome/free-solid-svg-icons";


const Home = ({title}) => {
    document.title  = `${title} | Lasteinsa`

    return(
        <div className="dark:text-white">
            <div className="flex place-content-center my-1">
                <motion.p
                className="text-5xl text-bold border-b-4 border-b-sky-400"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}>
                        Konnichiwa~
                </motion.p>
            </div>
            <motion.p
                className="flex place-content-center text-center my-2 dark:text-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                    Welcome to my personal homepage. <br />
                    Here is a place where I show to the world
            </motion.p>

            <p className="text-center text-3xl mt-12">
                <FontAwesomeIcon className="mx-2" icon={faGamepad}/>
                Hobbies
                <FontAwesomeIcon className="mx-2" icon={faCode}/>
            </p>
            <BottomLine/>
            <p className="text-center text-lg mt-4">coder and audiophile [newbie] </p>

            <p className="text-center mt-4">I code in : </p>
            <div className="mt-2 flex place-content-center">
                {
                    programmingLanguage.map((data) => (
                        <img src={data} className="mx-2" alt="language" width='50px' />
                    ))
                }
            </div>
            <p className="text-center mt-4">Currently doing on : </p>
            <div className="mt-2 flex place-content-center">
                {
                    framework.map((data) => (
                        <img src={data} className="mx-2" alt="language" width='50px' />
                    ))
                }
            </div>

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
        </div>
    )
}

export default Home