import React from "react";

const Form = () => {
  return (
    <form
      className="flex flex-row flex-wrap"
      // onSubmit={formSubmit}
    >
      <div className="pl-24 pt-14">
        <div className="flex items-center flex-col justify-center w-full">
          <div className="rounded-md h-[260px] w-[210px] border-2 border-red-200 p-2">
            <div className="rounded-md h-[240px] w-[190px] border-2 border-dashed border-red-200">
              <img
                className="img-fluid rounded-md h-[240px] w-[190px]"
                id="imageoutput"
                alt=""
              />
            </div>
          </div>
          <input
            onChange={(e) => {
              const output = document.getElementById("imageoutput");
              output.src = URL.createObjectURL(e.target.files[0]);
              output.onload = function () {
                URL.revokeObjectURL(output.src); // free memory
              };
            }}
            id="file"
            type="file"
            name="file"
            className="w-[210px] mt-1 border-2 cursor-pointer rounded-lg border-red-200 p-1"
            required
          />
        </div>
      </div>

      <div className="ml-24 mt-4">
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="name"
            className="block py-2.5 px-0 w-full text-sm text-[#b5594f] bg-transparent border-0 border-b-2 border-red-200 appearance-none focus:outline-none focus:ring-0 focus:border-red-300 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-[#b5594f] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#b5594f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter your name
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="fatherName"
            className="block py-2.5 px-0 w-full text-sm text-[#b5594f] bg-transparent border-0 border-b-2 border-red-200 appearance-none focus:outline-none focus:ring-0 focus:border-red-300 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="fatherName"
            className="peer-focus:font-medium absolute text-sm text-[#b5594f] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#b5594f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Father Name
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="number"
            name="phoneNumber"
            className="block py-2.5 px-0 w-full text-sm text-[#b5594f] bg-transparent border-0 border-b-2 border-red-200 appearance-none  focus:outline-none focus:ring-0 focus:border-red-300 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="phoneNumber"
            className="peer-focus:font-medium absolute text-sm text-[#b5594f] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#b5594f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Phone Number
          </label>
        </div>

        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="department"
            className="block py-2.5 px-0 w-full text-sm text-[#b5594f] bg-transparent border-0 border-b-2 border-red-200 appearance-none  focus:outline-none focus:ring-0 focus:border-red-300 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="department"
            className="peer-focus:font-medium absolute text-sm text-[#b5594f]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#b5594f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Department
          </label>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="date"
              name="joinDate"
              className="block py-2.5 px-0 w-full text-sm text-[#b5594f] bg-transparent border-0 border-b-2 border-red-200 appearance-none  focus:outline-none focus:ring-0 focus:border-red-300 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="date"
              className="peer-focus:font-medium absolute text-sm text-[#b5594f]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#b5594f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Join Date
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="rollNumber"
              className="block py-2.5 px-0 w-full text-sm text-[#b5594f] bg-transparent border-0 border-b-2 border-red-200 appearance-none  focus:outline-none focus:ring-0 focus:border-red-300 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="rollNumber"
              className="peer-focus:font-medium absolute text-sm text-[#b5594f] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#b5594f] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Roll Number
            </label>
          </div>
        </div>

        <div className="grid md:grid-cols-2 md:gap-6">
          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="session"
              className="block py-2.5 px-0 w-full text-sm text-[#b5594f] bg-transparent border-0 border-b-2 border-red-200 appearance-none  focus:outline-none focus:ring-0 focus:border-red-300 peer"
              placeholder=""
              required
            />
            <label
              htmlFor="session"
              className="peer-focus:font-medium absolute text-sm text-[#b5594f]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#b5594f]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Session (Ex. 2020-2024)
            </label>
          </div>

          <div className="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name=""
              className="block py-2.5 px-0 w-full text-sm text-[#b5594f] bg-transparent border-0 border-b-2 border-red-200 appearance-none  focus:outline-none focus:ring-0 focus:border-red-300 peer"
              placeholder=" "
            />
            <label
              htmlFor=""
              className="peer-focus:font-medium absolute text-sm text-[#b5594f]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#b5594f]  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Optional (any message)
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mr-2 w-52 mt-1 text-white bg-gradient-to-br from-blue-400 to-blue-300 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
