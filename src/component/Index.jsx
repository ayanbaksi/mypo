import CV from '../assets/resume.pdf'
import './Index.css'

import hi from '../hi.json'
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import a from '../assets/a.jpg'
import b from '../assets/b.jpg'
import c from '../assets/c.jpg'
import d from '../assets/d.jpg'
import e from '../assets/e.jpg'
import vector2 from '../assets/vector.jpg'
 import vector from '../assets/vector.ico'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import deved from "../assets/dev-ed-wave.png";
import code from "../assets/code.png";
import design from "../assets/design.png";
import consulting from "../assets/consulting.png";
import web1 from "../assets/certificate.png";
import web2 from "../assets/noek.png";
import web3 from "../assets/nodui.png";
import web4 from "../assets/aec.png";
import web5 from "../assets/schl.png";
import web6 from "../assets/schl2.jpg";
import mypic from '../assets/mypic.jpeg'



export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = CV; // Replace with the actual path to your CV PDF
    link.target = '_blank';
    link.download = 'Ayan_S Cv.pdf'; // Specify the desired filename for the download
    link.click();
  };
  return (
    <div className={darkMode ? "dark" : ""}>
     
      <div className=" bg- px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10  mb-12 flex justify-between dark:text-white ">
            <h1 className="font-burtons pt-3 text-xl">DevelopedbyAB</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer ml-10 text-2xl"
                />
              </li>
              
              <li>
                <button
                  className="bg-gradient-to-r from-cyan-500 text- to-yellow-500 text-white px-4 rounded-full py-2  border-none animate-pulse  ml-10"
                  href="#" onClick={handleDownload}
                >
                  Resume
                </button>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-5">
            <h2 className="text-6xl amar_nam py-8 text-teal-600 font-medium dark:text-teal-400  glow-dark md:text-6xl dark:glow-white " >
              Ayan Baksi
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
             Full Stack Web Developer and Designer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-1000 dark:text-white-200 max-w-xl mx-auto md:text-xl sm:text-xl">
              Hello guys!! I am a full stack developer and UI/UX Designer worked on ReactJS,NodeJS,MongoDB,SQL,SpringBoot and AI based Designs.
            </p>
            <h4 className='text-md py-5 leading-8 text-red-1000 dark:text-yellow-500 max-w-xl mx-auto md:text-xl'> CheckOut My Socials</h4>
            <div className="text-5xl flex justify-center gap-16 py-3 text-white-600 dark:text-white-400 ">
              
              <a href="https://www.linkedin.com/in/ayan-baksi-318a14298/" className=' w-20 h-20 bg-white-500 rounded-full flex items-center justify-center hover:bg-blue-200 transition duration-300 ' ><AiFillLinkedin className='rounded-full'/></a>
                
              <a href="https://github.com/ayanbaksi" className='w-20 h-20 bg-white-500 rounded-full flex items-center justify-center hover:bg-blue-200 transition duration-300' ><AiFillGithub className='rounded-full'/></a>
              
            </div>
            <div className='flex flex-col md:flex-row md:justify-center md:items-center md:resolution-1920*1080 '>
  <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-96 h-96 overflow-hidden mt-4 mb-4 md:mt-20 md:mb-20 md:h-96 md:w-96  md:mr-4 ">
    <img src={e} className="w-full h-full object-cover" alt="Image 1" />
  </div>
  <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-96 h-96 overflow-hidden mt-4 mb-4 md:mt-20 md:mb-20 md:h-96  md:mr-4 md:w-96 md:resolution-1920*1080">
    <img src={mypic} className="w-full h-full object-cover" alt="Image 2" />
  </div>
  <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-96 h-96 overflow-hidden mt-4 mb-4 md:mt-20 md:mb-20 md:h-96 md:w-96 md:resolution-1920*1080">
    <img src={vector2} className="w-full h-full object-cover" alt="Image 3" />
  </div>
</div>

            
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-4xl py-1 dark:text-white font-burtons  ">My Education Journey</h3>
            <p className="text-md dark:text-white py-2 leading-8 text-white-400 ">
              Hello Everyone,let's go through my education journey so far.
              
            </p>
        
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center  shadow-lg p-10 rounded-xl my-10   flex-1 dark:bg-blue-500 dark:bg-opacity-10 transition-transform transform hover:scale-110">
            
            <img src={web4} className=' h-40 w-100 m-0 mx-auto  '/>
              <h3 className="text-lg font-medium pt-8 pb-2 dark:text-white  ">
                Let's Cover My College
              </h3>
              <p className="py-2 dark:text-white">
                Golden Days!!
              </p>
              
              <h4 className="py-4 text-blue-400 dark:text-blye "> 🎓 Bachelor of Technology </h4>
              <p className="text-white-400 dark:text-black-500 py-1"> 👨‍✈️ Asansol Engineering College</p>
              <p className="text-white-400 dark:text-black-500 py-1"> 🔌 Electronics and Communication</p>
              <p className="text-white-400 dark:text-black-500 py-1">🚀8.99 Aggrigate</p>
              <p className="text-white-400 dark:text-black-500 py-1">📅2019-2023</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10  flex-1 dark:bg-blue-500 dark:bg-opacity-10 transition-transform transform hover:scale-110">
              <img src={web5} className='h-40 w-100 m-0 mx-auto '/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Higher Secondary Education
              </h3>
              <p className="py-2">
                West Bengal Council Of HIgher Secondary Education
              </p>
              <h4 className="py-1 text-blue-400 text-shadow-white ">🎓Class 10+2</h4>
              <p className="text-white-400 py-1"> 👨‍✈️ Subaspally Bidyaniketan</p>
              <p className="text-white-400 py-1"> 🧪 Science</p>
              <p className="text-white-400 py-1">🚀86.60%</p>
              <p className="text-white-400 py-1">📅2017-2019</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 bg-white-500 flex-1 dark:bg-blue-500 dark:bg-opacity-10 transition-transform transform hover:scale-110">
            <img src={web6} layout="responsive" className='h-40 w-100 m-0 mx-auto'/>
              <h3 className="text-lg font-medium pt-8 pb-2 ">Madhyamik Education</h3>
              <p className="py-2">
                West Bengal Council Of HIgher Secondary Education
              </p>
              <h4 className="py-1 text-blue-400 dark:tewhite-400">🎓Class 10</h4>
              <p className="text-white-400 py-1"> 👨‍✈️ Subaspally Bidyaniketan</p>
              <p className="text-white-400 py-1">🎁Quiz Champion District Level </p>
              <p className="text-white-400 py-1">🚀88.60%</p>
              <p className="text-white-400 py-1">📅Passed out in 2017</p>
            </div>
          </div>
        </section>
        <section className="py-10">
        <div>
  <h3 className="text-4xl font-burtons py-1 dark:text-white">Portfolio</h3>
  <h1 className="font-burtons text-2xl pb-3">
    Hover in dark mode to see the beauty and reveal the magic
  </h1>
  <p className="text-md py-2  leading-8 dark:spoiler spoiler">
    Since the beginning of my journey as a web developer,
    I've tried to learn new technologies and constantly strive to learn more.
    I am enthusiastic about contributing my skills to a reputable company.
    Here are some of my works and achievements.
  </p>
</div>

<div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
            <h1 className='flex text-md  justify-centre text-1xl text-black-900 py-1 dark:text-white justify-centre text-3xl  ml-10 font-burtons py-5'>Oracle Certified Java Associate</h1>
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
            <h1 className='flex text-md  text-1xl text-black-900 py-1 dark:text-white justify-centre text-3xl  ml-10 font-burtons py-5'>Inventory Management System(React and SpringBoot)</h1>

              <img
                className="rounded-lg object-cover "
                width={"100%"}
                height={"%"}
                layout="responsive"
                src={web2}
              />
            </div>
           <h1 className='justify-centre text-3xl pt-96 ml-10 font-burtons py-5'>Here are some of my designs ➡️</h1>
            <div className="basis-1/3 flex-1">
            
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={a}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={b}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg  h-90"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={c}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <img
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={d}
              />
            </div>
            
          </div>

        </section>
      </div>
      
      
    </div>
  );
}
