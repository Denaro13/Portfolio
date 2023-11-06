import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="align-element p-8 mb-8 border-t-4 w-11/12 flex items-center justify-between">
      <h4 className="text-lg font-bold">usmanNurudeen</h4>
      <div className="flex gap-x-6  mt-4">
        <a href="https://github.com/Denaro13">
          <FaGithub className="h-6 w-6 text-slate-500 hover:text-black duration-300" />
        </a>
        <a href="https://linkedin.com/in/usman-nurudeen/">
          <FaLinkedin className="h-6 w-6 text-slate-500 hover:text-black duration-300" />
        </a>
        <a href="https://twitter.com/thecapguy_">
          <FaTwitter className="h-6 w-6 text-slate-500 hover:text-black duration-300" />
        </a>
        <a href="https://instagram.com/_thecapguy">
          <FaInstagram className="h-6 w-6 text-slate-500 hover:text-black duration-300" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
