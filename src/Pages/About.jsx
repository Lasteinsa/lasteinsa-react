import { TypeAnimation } from "react-type-animation"

const About = ({title}) => {
    document.title  = `${title} | Lasteinsa`

    const Lasteinsa = ['',2000,'L',100,'La',100,'Las',100,'Last',100,'Laste',100,'Lastein',100,'Lasteinsa',500,'Lasteinsa',3000]
    return(
        <>
            <div className="flex place-content-center">
                <p className="text-5xl text-bold dark:text-white">
                    I am
                    <span className="mx-2 border-b-3 border-b-sky-500">
                        <TypeAnimation
                            sequence={Lasteinsa}
                            cursor={true}
                            wrapper='span'
                            repeat={Infinity}
                            />
                    </span>
                </p>
            </div>
        </>
    )
}

export default About