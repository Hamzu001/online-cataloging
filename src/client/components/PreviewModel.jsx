import React from "react";

const PreviewModel = ({title, component, isModelShow }) => {
  return (
    <div className="flex justify-center backdrop-filter backdrop-blur items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
      <div className="relative">
        <div className="border border-solid border-black/30 rounded-lg shadow-lg relative flex flex-col sm:w-full w-[95%] min-h-[350px] justify-center items-center p-3 bg-white outline-none focus:outline-none">
          <div className="flex w-full p-2 justify-between border-b border-solid border-black/50">
            <p className="sm:text-xl font-serif font-semibold">
              {title}
            </p>
            <button
              onClick={() => isModelShow(false)}
              className="text-black opacity-7 text-1xl w-8 h-8 text-center rounded-full bg-slate-200 justify-center items-center flex "
            >
              <p className="font-bold">X</p>
            </button>
          </div>
          <div className="p-4 mt-1">{component}</div>
        </div>
      </div>
    </div>
  );
};

export default PreviewModel;
