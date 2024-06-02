import React, { useEffect, useState } from "react";
import QRCode from "qrcode";

const CardUi = ({ data }) => {
  const cardDetails = data[0];
  const [qrCode, setQrCode] = useState(null);

  useEffect(() => {
    async function generateQRCode(studentId) {
      QRCode.toDataURL(studentId)
        .then((url) => {
          setQrCode(url);
        })
        .catch((err) => {
          console.error("erer qrcode",err);
        });
    }
    generateQRCode(cardDetails.studentId.toString())
  }, []);

  console.log(cardDetails);
  return (
    <div className="container pt-1">
      <div className="get-pdf">
        <div className=" gap-y-4 flex py-2">
          <div className="text-[13px] mr-2 rounded-lg overflow-hidden h-[200px] w-[320px] md:w-[400px] md:h-[233px] bg-slate-200">
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
            <div className="flex mb-1 gap-x-2">
              <img
                crossOrigin="anonymous"
                alt="Loading...."
                className="ml-2 md:ml-4 object-cover object-center block w-[90px] h-[100px] md:w-[100px] rounded-lg md:h-[120px]"
                src={"/student-card-images/" + cardDetails.studentImage}
              />

              {/* /////////---Card-Details----//////////// */}
              <div className="flex gap-3">
                <div className="">
                  <p className="text-[14px] sm:text-[15px] font-bold">Name: </p>
                  <p className="text-[14px] sm:text-[15px] font-bold">
                    F.Name:{" "}
                  </p>
                  <p className="text-[14px] sm:text-[15px] font-bold">
                    Roll no:{" "}
                  </p>
                  <p className="text-[14px] sm:text-[15px] font-bold">
                    Class:{" "}
                  </p>
                  <p className="text-[14px] sm:text-[15px] font-bold">
                    Phone:{" "}
                  </p>
                </div>
                <div className="">
                  <p className="text-[14px] sm:text-[15px]">
                    {cardDetails.name}
                  </p>
                  <p className="text-[14px] sm:text-[15px]">
                    {cardDetails.fatherName}
                  </p>
                  <p className="text-[14px] sm:text-[15px]">
                    {cardDetails.rollNumber}
                  </p>
                  <p className="text-[14px] sm:text-[15px]">
                    {cardDetails.department}
                  </p>
                  <p className="text-[14px] sm:text-[15px]">
                    {cardDetails.phoneNumber}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center p-1 text-white text-[13px] bg-[#90b4c4]">
              <span className="font-bold">
                Date to Join : {cardDetails.joinDate}
              </span>{" "}
            </div>
          </div>
          {/* card back side  */}
          <div className="flex flex-col relative h-[200px] w-[320px] md:w-[400px] md:h-[233px] rounded-lg bg-slate-200 overflow-hidden">
            <div className="text-md font-semibold bg-[#579cbc] sm:p-2 p-1 text-center">
              IF FOUND PLEASE RETURN TO
            </div>
            <div className="sm:p-4 p-5 flex gap-4 justify-center items-center">
              {/* //////---QR Code---////// */}
              <div className="">
                {qrCode ? (
                  <img
                    src={qrCode}
                    alt="qrcode "
                    className="sm:w-[90px] sm:h-[90px] w-[75px] h-[75px] rounded-md border-black border flex items-center justify-center object-cover"
                  />
                ) : (
                  <div>Loading....</div>
                )}
                <div className="sm:w-[90px] w-[75px] text-[8px] text-center">
                  {cardDetails.studentId}
                </div>
              </div>

              <div className="flex justify-center items-center">
                <h1 className="text-xl font-bold text-center">
                  Govt. Municipal Graduate College Faisalabad
                </h1>
              </div>
            </div>
            <div className="bottom-0 absolute bg-[#841d26] text-white text-center w-full text-sm p-1 z-10">
              041-922083
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CardUi;
