import logo from "../assets/images/img1.jpeg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogleScholar, FaSquareTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {

  const data = [
    {
      title: 'About',
    },
    {
      title: 'Education',
    },
    {
      title: 'Experience',
    },
    {
      title: 'Publication',
    },
    {
      title: 'Blogs',
    },

  ]

  return (
    <nav className="mb-20 w-full flex justify-between items-center py-6 relative px-10 lg:px-20">

      <div className="absolute hidden inset-0 md:flex justify-center items-center">
        <div className="flex gap-[30px] select-none">
          {data.map((item, index) => (
            <h2 className="text-gray-200 cursor-pointer text-[14px] font-semibold" key={index}
              onClick={() => {
                const Element = document.getElementById(item.title);
                if (Element) {
                  Element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              {item.title}
            </h2>
          ))}
        </div>
      </div>

      <div className="flex  items-center">
        <h2 className="text-gray-300 font-bold text-[35px]">
          ZS
        </h2>
      </div>
      <div className="flex m-8 relative z-10 items-center justify-center gap-4 text-2xl">
        <FaLinkedin
          className="cursor-pointer"
          onClick={() => {
            window.open("https://www.linkedin.com/in/zafarshahid");
          }}
        />

        <FaSquareTwitter
          className="cursor-pointer"
          onClick={() => {
            window.open("https://twitter.com/zafarshahid0");
          }}
        />

        <FaGoogleScholar
          className="cursor-pointer"
          onClick={() => {
            window.open("https://scholar.google.com/citations?user=NC4nfO8AAAAJ&hl=en");
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
