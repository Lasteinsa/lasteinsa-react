import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"

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
        <div className="min-h-screen dark:text-white">
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

            <p className="text-center text-3xl mt-12">
                Contact
            </p>
            <p className="text-center text-lg mt-2">Stay in touch</p>

            <div className="flex justify-center place-items-center mt-4">
                <img className="w-24 mx-4" src="https://cdn-icons-png.flaticon.com/512/1821/1821283.png" alt="" />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 mt-8">
                {
                    aboutInfo.map(({title, icon, text, link}, i) => (
                        <motion.div key={i} 
                            transition={{delay: 0.2}}
                            initial={{opacity: 0, x:100}}
                            whileInView={{opacity: 1, x:0}}
                            viewport={{ once: true }}
                            className="grid grid-cols-1 sm:grid-cols-2 m-2 py-4 px-2 rounded-xl  
                                        bg-gradient-to-r from-purple-500 to-pink-500">
                            <div className="flex place-content-center py-4 rounded-xl bg-slate-200">
                                <img className="w-16" src={icon} alt="" />
                            </div>
                            <div className="text-center">
                                <p className="text-2xl mb-4">{title}</p>
                                <a target="_blank" className="border-b-4" href={link}>{text}</a>
                            </div>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default About