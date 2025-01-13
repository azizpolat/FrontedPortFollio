import { useEffect, useState } from 'react'
import { FaAngular } from 'react-icons/fa'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import { FaReact } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { FaJsSquare } from 'react-icons/fa'
import { FaGitAlt } from 'react-icons/fa6'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
            <h2>Fronted Developer</h2>I am an ambitious and dedicated developer
            with a passion for building dynamic and interactive web applications
            using React. My expertise lies in creating responsive, user-friendly
            interfaces that deliver seamless user experiences. Leveraging
            React’s powerful features such as hooks, context API, and reusable
            components, I build scalable and maintainable web solutions. I enjoy
            integrating APIs and working on challenging projects that require
            creativity and technical problem-solving. Staying updated with the
            latest tools and trends in React development is at the core of my
            approach to delivering cutting-edge web applications.
          </p>
          <p align="LEFT">
            <h2>Mobil Developer</h2>
            In addition to web development, I specialize in creating mobile
            applications using React Native. I focus on building cross-platform
            solutions that provide a native-like experience on both iOS and
            Android devices. My experience includes optimizing performance,
            handling complex navigation patterns, and managing app state
            efficiently using libraries like Redux. By combining intuitive UI
            designs with seamless functionality, I aim to develop mobile
            applications that cater to user needs while maintaining a high
            standard of quality and performance.
          </p>
          <p>
            <h2>Backend Developer</h2>
            Complementing my front-end expertise, I have a strong foundation in
            back-end development using Node.js. I specialize in building RESTful
            APIs, managing server-side logic, and integrating with databases
            such as MongoDB and PostgreSQL. My focus is on creating secure,
            scalable, and efficient back-end systems that support robust
            communication between client and server. I enjoy tackling complex
            challenges, implementing the latest technologies, and delivering
            high-performance server-side solutions for web and mobile
            applications.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FaAngular color="#DD0031" />
            </div>
            <div className="face2">
              <FaCss3Alt color="#F06529" />
            </div>
            <div className="face3">
              <FaCss3Alt color="#28A4D9" />
            </div>
            <div className="face4">
              <FaReact color="#5ED4F4" />
            </div>
            <div className="face5">
              <FaJsSquare color="#EFD81D" />
            </div>
            <div className="face6">
              <FaGitAlt color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
