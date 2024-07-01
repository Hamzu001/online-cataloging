import React, { useContext, useEffect, useState } from "react";
import QRCode from "qrcode";
import { Context } from "../../context/Context";

const CardUi = () => {
  const { prevCardDetail } = useContext(Context);
  const [qrCode, setQrCode] = useState(null);

  useEffect(() => {
    async function generateQRCode(studentId) {
      QRCode.toDataURL(studentId)
        .then((url) => {
          setQrCode(url);
        })
        .catch((err) => {
          console.error("erer qrcode", err);
        });
    }
    generateQRCode(prevCardDetail.studentId.toString());
  }, []);

  return (
    <div className="container pt-1">
      <div className="get-pdf">
        <div className=" gap-y-4 flex py-2 flex-col sm:flex-row">
          <div className="text-[13px] mr-2 rounded-lg h-[200px] w-[320px] md:w-[400px] md:h-[233px] bg-slate-200 relative overflow-hidden">
            <div className="bg-[#841d26] text-center">
              <h1 className="py-2 text-[#e49479] font-serif whitespace-pre md:text-[16px] font-bold">
                <i> Govt. Municipal Graduate College </i>
                <span className="text-xs">Faisalabad</span>
              </h1>
            </div>
            <div className="text-center underline text-xs md:text-[15px] text-[#3f9f49] py-1 mb-1 font-bold">
              <p className=" italic">
                Student Card / <span>{prevCardDetail.session}</span>
              </p>
            </div>
            <div className="flex mb-1 gap-x-2">
              <img
                crossOrigin="anonymous"
                alt="Loading...."
                className="ml-2 md:ml-4 object-cover object-center block w-[90px] h-[100px] md:w-[100px] rounded-lg md:h-[120px]"
                src={"/student-card-images/" + prevCardDetail.studentImage}
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
                    {prevCardDetail.name}
                  </p>
                  <p className="text-[14px] sm:text-[15px]">
                    {prevCardDetail.fatherName}
                  </p>
                  <p className="text-[14px] sm:text-[15px]">
                    {prevCardDetail.rollNumber}
                  </p>
                  <p className="text-[14px] sm:text-[15px]">
                    {prevCardDetail.department}
                  </p>
                  <p className="text-[14px] sm:text-[15px]">
                    {prevCardDetail.phoneNumber}
                  </p>
                </div>
              </div>
            </div>
            <div className="text-center p-1 text-white text-[13px] bg-[#90b4c4] absolute bottom-0 z-20 w-full">
              <span className="font-bold">
                Date to Join : {prevCardDetail.joinDate}
              </span>{" "}
            </div>
          </div>

          {/*------------- card back side -----------------  */}

          <div className="flex flex-col relative h-[200px] w-[320px] md:w-[400px] md:h-[233px] rounded-lg bg-slate-200 overflow-hidden">
            <div className="text-md font-semibold bg-[#579cbc] sm:p-2 p-1 text-center">
              IF FOUND PLEASE RETURN TO
            </div>
            <div className="sm:p-4 p-5 flex gap-4 justify-center items-center mt-4">
              {/* //////---QR Code---////// */}
              <div className="mt-1">
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
                  {prevCardDetail.studentId}
                </div>
              </div>

              <div className="flex justify-center items-center">
                <h1 className="text-xl font-serif font-bold text-center">
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
