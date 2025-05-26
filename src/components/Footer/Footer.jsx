// components/Footer.jsx
import { BsFillGiftFill } from "react-icons/bs";
import { FaFacebookF, FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#0B1120] mt-10 text-white pt-12 pb-6 px-6 md:px-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Brand and Description */}
        <div>         
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BsFillGiftFill size={28}></BsFillGiftFill> Subscription Box
          </h2>
          <p className="text-gray-300 mt-4 text-sm leading-relaxed">
            Join our subscription box service and receive carefully curated items
            delivered right to your doorstep. Perfect for those who love surprises
            and discovering new premium products every month!
          </p>
          <div className="flex gap-3 mt-6">
            <a href="#" className="bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition">
              <FaFacebookF />
            </a>
            <a href="#" className="bg-gray-800 hover:bg-gray-900 p-3 rounded-full transition">
              <FaGithub />
            </a>
            <a href="#" className="bg-pink-600 hover:bg-pink-700 p-3 rounded-full transition">
              <FaInstagram />
            </a>
            <a href="#" className="bg-blue-700 hover:bg-blue-800 p-3 rounded-full transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <Link to="/"><li>› Home</li></Link>
            <Link to="/profile"><li> › Profile</li></Link>
            <Link to="/blogs"><li>› Blog</li></Link>           
            <Link to=""><li>› Privacy & Policy</li></Link>           
            <Link><li>› Terms and Conditions</li></Link>
            <Link to="/auth/login"><li>› Login</li></Link>
            <Link to="/auth/register"><li>› Sign Up</li></Link>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-4 text-gray-300 text-sm">
            <li className="flex items-start gap-3">
              <MdEmail className="text-xl text-blue-500 mt-1" />
              <span>muhitjoy564@gmail.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MdPhone className="text-xl text-green-500 mt-1" />
              <span>+880183916******</span>
            </li>
            <li className="flex items-start gap-3">
              <MdLocationOn className="text-xl text-purple-500 mt-1" />
              <span>
                Habiganj District, Sylhet, Bangladesh
              </span>
            </li>
          </ul>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      {/* Bottom Bar */}
      <div className="flex flex-col gap-2 md:flex-row items-center justify-between text-gray-400 text-sm text-center md:text-left">
        <p>© 2025 <span className="text-blue-400">Subscription Box</span>. All rights reserved.</p>
        <p>
          Developed with <span className="text-red-500"></span> by <span className="text-blue-400">M A Muhit Joy</span>
        </p>
        <div className="flex flex-wrap justify-center md:justify-end gap-4">
          <a href="#" className="hover:text-white transition">Terms of Service</a>
          <a href="#" className="hover:text-white transition">Privacy Policy</a>
          <a href="#" className="hover:text-white transition">FAQ</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
