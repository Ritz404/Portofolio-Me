import Link from "next/link";
import { BsGithub, BsLinkedin, BsTwitter, BsInstagram } from "react-icons/bs";
import { GrMail } from "react-icons/gr";


const Footer = () => {

  return (
    <footer className="w-screen py-8 border-t-2 border-b-[#cfcfd6] dark:border-[#cbd5e129]">
      <div className="flex flex-col justify-center items-center space-y-5">
        <div className="flex space-x-10">
          <Link href="https://github.com/Ritz404"><BsGithub size={25}/></Link>
          <Link href="https://s.id/alwaysRitz"><BsLinkedin size={25}/></Link>
          <Link href="https://twitter.com/"><BsTwitter size={25}/></Link>
          <Link href="https://www.instagram.com/ritz.404/"><BsInstagram size={25}/></Link>
          <Link href="peshonatangerang@gmail.com"><GrMail size={25}/></Link>
        </div>
        <div className="text-slate-700 dark:text-slate-300 flex">
          Source code is available on
          <Link href="https://github.com/Ritz404" className="flex justify-center items-center ml-1 underline">
            <BsGithub size={15}/>
            <div className="ml-1 font-semibold text-black dark:text-white">GitHub</div>
          </Link>
        </div>
        <div className="text-slate-700 dark:text-slate-300">
          Copyright &copy; {new Date().getFullYear()} - <span className="font-semibold text-black dark:text-white">Kiizuha Kanazawa</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
