import React from "react";
import HeroImage from "../assets/heroImage.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-scroll";
import imh from "../assets/software.png";
import webdev from "../assets/webdev.svg";
import laptop from "../assets/homemg.png";
import laptop1 from "../assets/laptop.png";
import "./css/portfolio.css";
const Home = () => {
  return (
    <div
      name="home"
      className="w-full bg-gradient-to-b
    from-black via-black to-gray-800 "
      style={{
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          height: "15vh",
        }}
      />
      <div
        className="max-w-screen-xl mx-auto flex flex-col items-center justify-center px-4 md:flex-row"
        style={{
          minHeight: "100vh",
        }}
      >
        <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse  md:justify-center flex-control ">
          <div className="w-10/12">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              Welcome to <span className="span">Script</span> Vortex
            </h2>
            <p className="text-gray-500 py-4 ">
              Welcome to Script Vortex, where innovation meets efficiency.
              Specializing in React Native app development and React JS web
              applications, we bring your digital ideas to life. With a keen eye
              for design, our team also excels in graphics designing, ensuring
              your projects are not only functional but visually appealing. Our
              expertise extends to WordPress, enabling us to offer versatile
              solutions for your web presence. Driven by passion and powered by
              technology, we are here to transform your digital landscape.
            </p>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className=" group text-white  w-fit px-6 py-4 my-2 flex item-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer  "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <AiOutlineArrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>

          <div className="software">
            <img src={laptop1} />
          </div>
          <div>
            {/* <a
              href="/resume.pdf"
              to="portfolio"
              target="_blank"
              rel="noreferrer"
              className=" group text-white  w-fit px-6 py-4 my-2 flex item-center rounded-md bg-gradient-to-r from-blue-500 to-cyan-500 cursor-pointer md:hidden "
            >
              Resume
            </a> */}
          </div>
        </div>
        {/* <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto   md:w-full"
          />
        </div> */}
      </div>
    </div>
  );
};

export default Home;
