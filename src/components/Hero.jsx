import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";
import usman from "../assets/images/usman.jpg";
const Hero = () => {
  return (
    <div className="bg-emerald-100 py-24 ">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article>
          <h1 className="text-7xl font-bold tracking-wider">I'm Usman</h1>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide ">
            Frond-End Developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide ">
            Passionate about building accessible web apps that users love
          </p>
          <div className="flex gap-x-4  mt-4">
            <a href="https://github.com/Denaro13">
              <FaGithub className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://linkedin.com/in/usman-nurudeen/">
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://twitter.com/thecapguy_">
              <FaTwitter className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
            <a href="https://instagram.com/_thecapguy">
              <FaInstagram className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>
        <article className="hidden md:block">
          <img
            src={usman}
            alt="author image"
            className="h-80 w-80  lg:h-96 lg:w-96 rounded-full"
          />
        </article>
      </div>
    </div>
  );
};

export default Hero;
