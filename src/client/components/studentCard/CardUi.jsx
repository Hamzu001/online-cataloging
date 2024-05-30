import React from "react";

const cardDetails = {
  session: "2020-24",
  image: "",
  name: "Hmaza Zahid",
  fatherName: "zahid Anjum",
  department: "BSCS",
  rollNumber: "180-20",
  phoneNumber: "03217788287",
  joinDate: "2020-05-02",
};

const CardUi = () => {
  return (
    <div className="container pt-14">
      <div className="get-pdf">
        <div className="flex-wrap gap-y-4  items-center flex py-2 justify-center">
          <div className="text-[13px] mr-6 ml-4 rounded-lg overflow-hidden h-[200px] w-[320px] md:w-[400px] md:h-[233px] bg-slate-200">
            <div className="bg-[#841d26] text-center">
              <h1 className="py-2 text-[#e49479] font-serif whitespace-pre md:text-[16px] font-bold">
                <i> Govt. Municipal Graduate College </i>
                <span className="text-xs">Faisalabad</span>
              </h1>
            </div>
            <div className="text-center underline text-xs md:text-[15px] text-[#3f9f49] py-1 mb-1 font-bold">
              <p className=" italic">
                Student Card/<span>{cardDetails.session}</span>
              </p>
            </div>
            <div className="flex mb-4 gap-2">
              <img
                crossOrigin="anonymous"
                alt="Loading...."
                className="ml-2 md:ml-4 object-cover object-center block w-[90px] h-[100px] md:w-[100px] rounded-lg md:h-[120px]"
                src={cardDetails.image}
              />
              <div className="py-0 ml-1">
                <p className="md:text-[16px]">
                  <span className="font-bold">Name: </span>
                  {cardDetails.name}
                </p>
                <p className="md:text-[16px]">
                  <span className="font-bold">F. Name: </span>
                  {cardDetails.fatherName}
                </p>
                <p className="md:text-[16px]">
                  <span className="font-bold">Class: </span>
                  {cardDetails.department}
                </p>
                <p className="md:text-[16px]">
                  <span className="font-bold">Roll No: </span>
                  {cardDetails.rollNumber}
                </p>
                <p className="md:text-[16px]">
                  <span className="font-bold">Phone: </span>
                  {cardDetails.phoneNumber}
                </p>
              </div>
            </div>
            <div className="text-center p-1 text-white text-[13px] bg-[#90b4c4]">
              <span className="font-bold">
                Date to Join : {cardDetails.joinDate}
              </span>{" "}
            </div>
          </div>
          {/* card back side   */}
          <div className="">
            <div className="text-[13px]  rounded-lg overflow-hidden h-[200px] w-[320px] md:w-[400px] md:h-[233px] bg-slate-200">
              <div className="bg-[#579cbc] text-center">
                <h1 className="py-2 text-black italic font-serif whitespace-pre md:text-[16px] font-bold">
                  <i> IF FOUND PLEASE RETURN TO </i>
                </h1>
              </div>
              <div>
                <img
                  alt="uploading photo error"
                  className=" object-cover object-center block sm:h-[139px] w-[400px] md:h-[164px]"
                  src="https://res.cloudinary.com/dlczywmww/image/upload/v1709483185/studentimages/uqrk2p4zlaxklxticeri.png"
                />
              </div>
              <div className="text-center italic bg-[#841d26] p-1 text-white text-[13px]">
                <p className=" text-orange-200 text-[13px]">041-9220283</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardUi;
