import { motion } from "framer-motion"
import BottomLine from "../components/BottomLine"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCertificate,
  faCode,
  faPalette,
} from "@fortawesome/free-solid-svg-icons"
import Heading from "../components/Heading"
import { faAndroid, faReact } from "@fortawesome/free-brands-svg-icons"
import TextInfo from "../components/TextInfo"
import Card from "../components/Home/Card"
import { certificate, projectList } from "../utilities/Data"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Navigation, Pagination } from "swiper"
import CardSwipe from "../components/Home/CardSwipe"

const Home = ({ title }) => {
  document.title = `${title} | Lasteinsa`

  return (
    <div className="space-y-8 dark:text-white">
      <div className="grid grid-flow-row px-8 sm:h-96 place-content-center">
        <motion.div
          className="mb-4 text-xl font-bold text-green-600 rounded-md dark:bg-white w-fit dark:p-2"
          transition={{ delay: 0.3 }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Konnichiwa ~
        </motion.div>
        <motion.div
          className="space-y-4 text-2xl dark:text-white"
          transition={{ delay: 0.8 }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-3xl font-semibold">I'm Ruby Ahmad Fauzan, </p>
          <p className="text-2xl">
            {" "}
            <span className="border-b-2 border-blue-400">React JS</span> and
            Android <span className="border-b-2 border-purple-400">Kotlin</span>{" "}
            Developer
          </p>
          <p className="text-xl">
            Specialize in Web Front End using React JS{" "}
            <FontAwesomeIcon icon={faReact} />, and Modern Android Kotlin for
            Android <FontAwesomeIcon icon={faAndroid} /> <br />
          </p>
        </motion.div>
      </div>

      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

      <section className="space-y-24">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Heading>
            <FontAwesomeIcon icon={faCode} className="mx-2" />
            What I Can Do ?
          </Heading>

          <BottomLine />

          <TextInfo>I like coding and thats what make me here</TextInfo>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Card
              imgUrl={
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png"
              }
              title={"Javascript & ReactJS"}
              lists={[
                "React Hooks & Custom Hooks",
                "React Router",
                "Material UI",
                "Etc...",
              ]}
            >
              I have experience working with both JavaScript and React JS.{" "}
              <br />I am proficient in writing clean and efficient JavaScript
              code, and have extensive knowledge of the React JS framework, I
              have a strong understanding of how to build scalable and
              maintainable code using these technologies.
            </Card>
            <Card
              imgUrl={
                "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/kotlin/kotlin.png"
              }
              title={"Kotlin Android"}
              lists={[
                "MVVM Pattern",
                "Dagger Hilt Dependency Injection",
                "Kotlin Coroutine Flow",
                "Etc...",
              ]}
            >
              I have also worked with Android development. <br />
              Additionally, I am knowledgeable in using Android Studio. Overall,
              I am capable of building high-quality, maintainable, and scalable
              Android applications using Kotlin and the latest Android
              development practices
            </Card>
          </div>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Heading>
            <FontAwesomeIcon icon={faPalette} className="mx-2" />
            Project
          </Heading>

          <BottomLine />

          <TextInfo>Web (React JS) and Android (Kotlin) project</TextInfo>

          <Swiper
            className="mx-2"
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            {projectList.map(
              ({ imgUrl, title, desc, github, demo, stack }, i) => (
                <SwiperSlide key={i}>
                  <div className="grid grid-cols-1 p-4 m-4 sm:grid-cols-2">
                    <CardSwipe
                      imgUrl={imgUrl}
                      title={title}
                      desc={desc}
                      github={github}
                      demo={demo}
                      stack={stack}
                    />
                  </div>
                </SwiperSlide>
              ),
            )}
          </Swiper>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <Heading>
            <FontAwesomeIcon icon={faCertificate} className="mx-2" />
            Certificate
          </Heading>

          <BottomLine />

          <TextInfo>Web and Android Certificate</TextInfo>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-4">
            {certificate.map(({ title, imgUrl }, key) => (
              <div key={key} className="flex flex-col">
                <p className="flex-1 text-xl font-semibold">{title}</p>
                <img className="w-full" src={imgUrl} alt="" />
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  )
}

export default Home
