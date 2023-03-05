import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
import Heading from "../components/Heading"
import BottomLine from "../components/BottomLine"

const About = ({title}) => {
    document.title  = `${title} | Lasteinsa`

    const Lasteinsa = ['',2000,'L',100,'La',100,'Las',100,'Last',100,'Laste',100,'Lastein',100,'Lasteinsa',500,'Lasteinsa',3000]

    const aboutInfo = [
        {
            title: "Mail",
            icon: "https://cdn-icons-png.flaticon.com/512/5968/5968534.png",
            text: "rafleshia45@gmail.com",
            link: "mailto:rafleshia45@gmail.com"
        },
        {
            title: "Github",
            icon: "https://cdn-icons-png.flaticon.com/512/2111/2111425.png",
            text: "Lasteinsa",
            link: "http://github.com/Lasteinsa"
        },
        {
            title: "Instagram",
            icon: "https://cdn-icons-png.flaticon.com/512/174/174855.png",
            text: "mainteinsa",
            link: "https://instagram.com/mainteinsa"
        }
    ]

    return(
        <div className="min-h-screen space-y-12 dark:text-white">
            <div className="text-center text-5xl text-bold">
                    I am...
                <TypeAnimation
                    className="mx-2 border-b-3 border-b-sky-500"
                    sequence={Lasteinsa}
                    cursor={true}
                    wrapper='div'
                    repeat={Infinity}
                    />
            </div>

            <Heading>
                Contact
                <BottomLine/>
                <p className="text-center text-lg mt-2">Stay in touch</p>
            </Heading>

            <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
                {
                    aboutInfo.map(({title, icon, text, link}, i) => (
                        <motion.div key={i} 
                            transition={{delay: 0.2}}
                            initial={{opacity: 0, x:100}}
                            whileInView={{opacity: 1, x:0}}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 m-2 p-4 rounded-xl bg-slate-600">
                            <div className="flex place-content-center py-4 rounded-md bg-white">
                                <img className="w-16" src={icon} />
                            </div>
                            <div className="text-center text-white">
                                <p className="text-2xl mb-4">{title}</p>
                                <a target="_blank" rel="noreferrer" className="border-b-4" href={link}>{text}</a>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default About