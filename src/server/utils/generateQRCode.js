import QRCode from "qrcode";

export async function generateQRCode(studentId) {
  return new Promise((resolve) => {
    QRCode.toDataURL(studentId, function (err, baseUrl) {
      resolve({ err, baseUrl });
    });
  });
}
