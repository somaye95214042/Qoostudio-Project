import { Mail, Phone, MapPin } from "lucide-react";
import { FaInstagram, FaYoutube, FaLinkedin, FaVimeoV } from "react-icons/fa";

const Contact = () => {
  return (
    <main>
      <div className="w-full h-[300px] sm:h-[400px] relative overflow-hidden rounded-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0191781849346!2d-122.41941508468388!3d37.77492977975985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064a3aaffff%3A0x1d15b7bd87977e2d!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1614972156543!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{
            border: 0,
            filter: "grayscale(100%) brightness(40%) contrast(120%)",
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row gap-10">
      
        <div className="md:w-1/2 flex justify-center">
          <div className="flex flex-col text-gray-900">
            <div className="flex items-center gap-2 text-sm sm:text-base lg:text-lg mb-6 color-gray-900">
              <Mail className="w-5 h-5" />
              hello@qoostudio.com
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base lg:text-lg mb-6 color-gray-500">
              <Phone className="w-5 h-5" />
              ۴۱۶-۲۰۰-۰۹۸۸
            </div>
            <div className="flex items-center gap-2 text-sm sm:text-base lg:text-lg mb-6 color-gray-500">
              <MapPin className="w-5 h-5" />
              تهران، خیابان مثال، پلاک ۱۲۳
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center text-right md:text-right">
          <div className="flex flex-col">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-900 font-semibold mb-4">
              با ما در ارتباط باشید
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium leading-relaxed">
              از طریق تلفن یا ایمیل با ما تماس بگیرید؛ ما مطمئن خواهیم بود که
              در اسرع وقت با شما تماس خواهیم گرفت.
            </p>
          </div>
        </div>
      </div>

     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 w-full border-t border-gray-200 flex flex-col lg:flex-row items-center justify-between gap-4">
       
        <div className="flex justify-center gap-4 text-[22px] text-gray-900">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition color-gray-500 text-[30px]"
          >
            <FaInstagram />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition color-gray-500 text-[30px]"
          >
            <FaYoutube />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition color-gray-500 text-[30px]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://vimeo.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300 transition color-gray-500 text-[30px]"
          >
            <FaVimeoV />
          </a>
        </div>

        <p className="text-gray-500 text-sm text-center">
          حق چاپ © 2023 QOO Studio. تمامی حقوق محفوظ است.
        </p>
      </div>
    </main>
  );
};

export default Contact;
