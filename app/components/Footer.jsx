import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin, FaVimeoV } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col">
      <div className="bg-black text-white px-6 py-10 flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2 flex items-start justify-center">
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold my-[80px]">
              ارتباط با ما
            </h1>

            <div className="flex items-center gap-2 text-base sm:text-lg mb-[80px]">
              <Mail className="w-5 h-5 text-gray-400" />
              hello@qoostudio.com
            </div>

            <div className="flex items-center gap-2 text-base sm:text-lg mb-[80px]">
              <Phone className="w-5 h-5 text-gray-400" />
              ۴۱۶-۲۰۰-۰۹۸۸
            </div>

            <div className="flex items-center gap-2 text-base sm:text-lg mb-[40px]">
              <MapPin className="w-5 h-5 text-gray-400" />
              تهران، خیابان مثال، پلاک ۱۲۳
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex items-start justify-center">
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mt-[80px] mb-[60px]">
              ما را دنبال کنید
            </h1>
            <div className="flex gap-6 text-2xl text-gray-400">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-red-500 transition"
              >
                <FaYoutube />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 transition"
              >
                <FaVimeoV />
              </a>
            </div>
          </div>
        </div>
      </div>
      <h1 className="text-[14px] bg-black text-center text-gray-500 font-normal border-t-1 border-gray-500 py-[30px]">
        حق چاپ © 2023 QOO Studio. تمامی حقوق محفوظ است.
      </h1>
    </div>
  );
};

export default Footer;