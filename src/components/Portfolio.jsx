import React, { useEffect } from "react";

import { portfolios } from "./data";

import Modal from "./Modal";
import "./css/portfolio.css";

let adminChk = false;
let appChk = false;
const Portfolio = () => {
  const [modal, setModal] = React.useState("");
  const [tt1, setTt1] = React.useState(false);
  const [tt2, setTt2] = React.useState(false);

  const adminFun = () => {
    if (adminChk) return;

    const admin = document.querySelector("#admin");
    const adminTop = admin.getBoundingClientRect().top;
    const adminHeight = admin.getBoundingClientRect().height;
    const adminBottom = adminTop + adminHeight;
    const scroll = window.screenY + window.innerHeight;

    if (scroll > adminTop && scroll < adminBottom) {
      adminChk = true;
      setTt1(true);
    }
  };

  const appFun = () => {
    if (appChk) return;

    const app = document.querySelector("#app");
    const appTop = app.getBoundingClientRect().top;
    const appHeight = app.getBoundingClientRect().height;
    const appBottom = appTop + appHeight;
    const scroll = window.screenY + window.innerHeight;

    if (scroll > appTop && scroll < appBottom) {
      appChk = true;
      setTt2(true);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", adminFun);
    window.addEventListener("scroll", appFun);
    return () => {
      window.removeEventListener("scroll", adminFun);
      window.removeEventListener("scroll", appFun);
    };
  }, []);

  useEffect(() => {
    if (!tt1) return;
    setTimeout(() => {
      setTt1(false);
    }, 2000);
  }, [tt1]);

  useEffect(() => {
    if (!tt2) return;
    setTimeout(() => {
      setTt2(false);
    }, 2000);
  }, [tt2]);

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white padding-top "
      id="portfolio "
    >
      <div className="max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full md:pt-0 pt-80">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4">Portfolio</p>
          <p className="py-6">check out some of our work right here ...</p>
        </div>
        {/* React Native Apps */}
        <h4 className="text-2xl font-bold mb-2" id="app">
          React Native Apps
        </h4>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 mb-5">
          {portfolios
            .filter((portfolio) => portfolio.category === "app")
            .map(({ id, src, href, name }) => (
              <div
                onClick={() => setModal(id)}
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg relative"
              >
                {id === "app1" && tt2 && (
                  <div className="modal">
                    {/* instruction to click on card */}
                    <p className="text-black text-center text-sm">
                      Click on the card to view more detail
                    </p>
                  </div>
                )}
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center ">
                  <p className="w-1/2px-6  py-3 pointer-events-none">{name}</p>
                </div>
              </div>
            ))}
        </div>

        <h4 className="text-2xl font-bold my-5">Web Apps</h4>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios
            .filter((portfolio) => portfolio.category === "web")
            .map(({ id, src, href, name }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg"
                onClick={() => setModal(id)}
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center ">
                  <p className="w-1/2px-6  py-3 pointer-events-none">{name}</p>
                </div>
              </div>
            ))}
        </div>
        {/* Admin Panel */}
        <h4 className="text-2xl font-bold my-5" id="admin">
          Admin Panel
        </h4>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios
            .filter((portfolio) => portfolio.category === "ap")
            .map(({ id, src, href, name }) => (
              <div
                key={id}
                className="shadow-md shadow-gray-600 rounded-lg relative"
                onClick={() => setModal(id)}
                id={id}
              >
                {id === "ap1" && tt1 && (
                  <div className="modal">
                    {/* instruction to click on card */}
                    <p className="text-black text-center text-sm">
                      Click on the card to view more detail
                    </p>
                  </div>
                )}
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center ">
                  <p className="w-1/2px-6  py-3 pointer-events-none">{name}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {modal && <Modal setModal={setModal} modal={modal} />}
    </div>
  );
};

export default Portfolio;
