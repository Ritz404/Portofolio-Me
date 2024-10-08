import Image from 'next/image'
import profileImage from "@/assets/img/catboy.png";
import NavigationBottom from '@/components/NavigationBottom';


export default function Home(): JSX.Element {
  return (
    <main className="relative flex flex-col items-center min-h-screen font-rubik">
      <div className="w-[70%] flex flex-col justify-center py-14">
        <div className="flex items-center justify-center sm:flex-col 2lg:flex-row">
          <div>
            <Image src={profileImage} alt="Profile Image" className="sm:mb-5 sm:w-[10rem] sm:h-[10rem] 2lg:mb-0 2lg:w-[12rem] 2lg:h-[12rem] xl:mb-0 xl:w-[13rem] xl:h-[13rem] rounded-full border-4 bg-blue-200 border-blue-500"/>
          </div>
          <div className="flex flex-col sm:items-center sm:justify-center 2lg:items-start 2lg:justify-start sm:ml-0 2lg:ml-10 xl:ml-10">
            <div className="font-semibold text-xl">Hello</div>
            <div className="font-extrabold sm:text-3xl md:text-4xl xl:text-6xl">I&#39;m Always Ritz</div>
            <div className="font-bold sm:text-sm md:text-base xl:text-xl">A Junior Developer</div>
            <div className="mt-4 flex-wrap sm:w-[20rem] md:w-[30rem] text-slate-700 dark:text-slate-300 sm:ml-10 2lg:ml-0">
              I am a full-stack developer, and I enjoy creating self-projects when I have the inspiration and motivation to do so.
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center mt-14">
          <div className="uppercase relative leading-relaxed sm:before:w-[5rem] xl:before:w-[6.2rem] inline-block sm:text-xl xl:text-2xl font-semibold mb-8 before:content-[''] before:absolute before:-bottom-2 before:h-1 before:left-3 before:rounded-md before:bg-sky-500 dark:before:bg-sky-600">
            About Me
          </div>
          <div className="sm:text-base xl:text-lg text-slate-700 dark:text-slate-300">
            Hi, I&#39;m Ridwan, and my alias name is Always Ritz. I&#39;m a junior developer with 2 years of experience in the Python programming language and am currently self-learning TypeScript.
            <br/><br/>
            I have developed many bots for whatsapp, REST APIs using FastAPI, scraped websites, developed front-ends using NextJS, ReactJS, React Native, Flutter/Dart, Kotlin, and built back-ends, especially REST APIs, using Python&#39;s FastAPI and Flask.
            <br/><br/>
            I have used MongoDB and MySQL for databases, and I often use MongoDB for my own Telegram and Discord bots because it requires fast response times. MongoDB is a NoSQL database, so it is lightweight and faster.
          </div>
        </div>
      </div>
      <NavigationBottom/>
    </main>
  )
}
