import React from "react";

import { portfolios } from "../data";

export default function Modal({ modal, setModal }) {
  const portfolio = portfolios.find((portfolio) => portfolio.id === modal);

  const [image, setImage] = React.useState(portfolio.src);

  return (
    <div
      id="default-modal"
      tabindex="-1"
      aria-hidden="true"
      className="fixed top-0 right-0 left-0 bottom-0 z-[70000] flex  justify-center items-center w-full md:inset-0 min-h-screen bg-black bg-opacity-50 transition-opacity duration-300"
      onClick={() => setModal("")}
    >
      <div className="relative p-4 max-h-full">
        <div
          className="relative bg-white rounded-lg shadow dark:bg-gray-700
            w-[95vw] md:w-auto md:h-auto md:max-w-[60vw] md:max-h-[90vh]"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {portfolio.name}
            </h3>
            <button
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="default-modal"
              onClick={() => setModal("")}
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>

          <div className="p-4 md:p-5 space-y-4 overflow-y-scroll max-h-[70vh]">
            <img
              src={image}
              alt=""
              className="border rounded-md duration-200 hover:scale-105 md:w-[50vw] md:h-[50vh] max-h-[50vh] object-contain mx-auto
                
              "
            />
            <div className="flex items-center overflow-x-scroll overflow-y-clip custom-scrollbar">
              {portfolio.images.map((image, index) => (
                <img
                  src={image}
                  alt=""
                  className="border rounded-md duration-200 hover:scale-105 w-[100px] h-auto max-h-[100px] mx-2 object-contain"
                  key={index}
                  onClick={() => setImage(image)}
                />
              ))}
            </div>
            <p className="text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Technologies: </span>
              {portfolio.techs}
            </p>
          </div>

          <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
            {portfolio?.appStore && (
              <a
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-[#A2AAAD] border border-white hover:bg-white hover:text-[#A2AAAD] hover:border-[#A2AAAD] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                href={portfolio.appStore}
                target="_blank"
                rel="noreferrer"
              >
                App Store
              </a>
            )}
            {portfolio?.playStore && (
              <a
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-[#3bccff] border border-white hover:bg-white hover:text-[#3bccff] hover:border-[#3bccff] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                href={portfolio.playStore}
                target="_blank"
                rel="noreferrer"
              >
                Play Store
              </a>
            )}
            {portfolio?.live && (
              <a
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-[#007bff] border border-white hover:bg-white hover:text-[#007bff] hover:border-[#007bff] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                href={portfolio.live}
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            )}
            {portfolio?.github && (
              <a
                data-modal-hide="default-modal"
                type="button"
                className="text-white bg-[#333] border border-white hover:bg-white hover:text-[#333] hover:border-[#333] font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
                href={portfolio.github}
                target="_blank"
              >
                Github
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
