import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black 
    text-white md:pt-0 pt-96"
    >
      <div
        className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center
        w-full h-full"
      >
        <div className="pb-9 ">
          <p
            className="text-4xl font-bold inline border-b-4
                 border-gray-500"
          >
            About
          </p>
        </div>
        <p className="text-xl mt-08">
          Welcome to Vortex Software House, your go-to destination for top-notch
          website and app development. We take your ideas and turn them into
          stunning digital realities. With a focus on simplicity and excellence,
          we ensure your online presence stands out. Trust Vortex to bring your
          vision to life with our straightforward and effective solutions. Our
          core services include:
          <br />
          <br />
          <li className="mb-2">App Development:</li>
          Leveraging the power of React Native, we create seamless and
          responsive mobile applications tailored to your needs.
          <br />
          <br />
          <li className="mb-2">Web Applications:</li>
          Using React JS, we develop dynamic and scalable web applications that
          offer engaging user experiences.
          <br />
          <br />
          <li className="mb-2">Graphics Designing:</li>
          From branding to UI/UX design, our graphic designers craft visually
          stunning and intuitive designs that resonate with your audience.
        </p>
      </div>
    </div>
  );
};

export default About;
