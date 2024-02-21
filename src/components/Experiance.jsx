import React from "react";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import express from "../assets/express.png";
import expo from "../assets/expo.png";
import firebase from "../assets/firebase.png";
import mongodb from "../assets/mongodb.png";

const Experiance = () => {
  const techs = [
    {
      id: 1,
      src: react,
      title: "React Native",
      shadow: "shadow-blue-500",
    },
    {
      id: 2,
      src: expo,
      title: "Expo CLI",
      shadow: "shadow-gray-500",
    },
    {
      id: 3,

      src: javascript,
      title: "JavaScript",
      shadow: "shadow-yellow-500",
    },
    {
      id: 7,
      src: firebase,
      title: "Firebase",
      shadow: "shadow-yellow-500",
    },
    {
      id: 5,
      src: node,
      title: "Node JS",
      shadow: "shadow-green-500",
    },
    {
      id: 6,
      src: express,
      title: "Express JS",
      shadow: "shadow-white",
    },
    {
      id: 8,
      src: mongodb,
      title: "MongoDB",
      shadow: "shadow-green-500",
    },
    {
      id: 9,
      src: github,
      title: "Github",
      shadow: "shadow-gray-400",
    },
    {
      id: 4,
      src: react,
      title: "React JS",
      shadow: "shadow-blue-500",
    },
    {
      id: 10,
      src: tailwind,
      title: "Tailwind",
      shadow: "shadow-sky-500",
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black
    w-full"
    >
      <div
        className="max-w-screen-xl mx-auto p-4 flex flex-col justify-center
        w-full text-white"
      >
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies i am familiar with</p>
        </div>
        <div
          className="w-full grid  grid-cols-2  sm:grid-cols-3 gap-8
        text-center py-8 px-6  sm:px-0"
        >
          {techs.map(({ id, src, title, shadow }) => (
            <div
              key={id}
              className={
                " shadow-md hover:scale-105 duration-500 py-2 rounded-lg " +
                shadow
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiance;
