import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800
    py-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">
            Submit the form below to get in Touch with me...
          </p>
        </div>
        <div className="flex justify-center items-center">
          <form action="https://getform.io/f/00c183fe-909c-4cc3-b1dc-2f30b613ac57" method="POST" className="flex-col flex w-full md:w-1/2">
            <input
              type="text"
              name="name "
              placeholder="Enter Your Name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus-outline-none"
            />
            <input
              type="text"
              name="email "
              placeholder="Enter Your email"
              className="p-2 bg-transparent border-2 rounded-md mt-2 text-white focus-outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              rows="10"
              className="p-2 bg-transparent border-2 mt-2 rounded-md text-white focus-outline-none"
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3
            my-8 mx-auto items-center rounded-md hover:scale-110 duration-300"
            >
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
