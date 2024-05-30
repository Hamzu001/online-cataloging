import connectToMySql from "../db/index.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { generateShortId } from "../utils/functions.js";
import { generateQRCode } from "../utils/generateQRCode.js";

const createStudentCard = asyncHandler(async (req, res) => {
  //  console.log(req.file.filename);
  const studentId = generateShortId(6);
  const { err, baseUrl } = await generateQRCode(studentId);
  if (err) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "generate qrcode error!"));
  }

  const {
    name,
    fatherName,
    phoneNumber,
    department,
    joinDate,
    session,
    rollNumber,
  } = req.body;

  if (
    [
      name,
      fatherName,
      phoneNumber,
      department,
      joinDate,
      session,
      rollNumber,
    ].some((field) => field.trim() == "")
  ) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"));
  }

  try {
    const sqlQuery =
      "INSERT INTO `cards` (`studentId`, `name`, `fatherName`, `phoneNumber`, `department`, `joinDate`, `session`, `rollNumber`, `studentImage`, `baseUrl`) VALUES (?,?,?,?,?,?,?,?,?,?)";

    const values = [
      studentId,
      name,
      fatherName,
      phoneNumber,
      department,
      joinDate,
      session,
      rollNumber,
      req.file.filename,
      baseUrl,
    ];

    const insertToDb = new Promise((resolve) => {
      connectToMySql.query(sqlQuery, values, (err, result) => {
        resolve({ err, result });
      });
    });

    const { err, result } = await insertToDb;

    if (err) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "insert to mySql-DB error"));
    }

    res
      .status(200)
      .json(new ApiResponse(200, {}, "student college card is created"));
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

// get student card
const getStudentCard = asyncHandler(async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM cards";

    const getToDb = new Promise((resolve) => {
      connectToMySql.query(sqlQuery, (err, result) => {
        resolve({ err, result });
      });
    });

    const { err, result } = await getToDb;

    if (err) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "getting data to mySql-DB error"));
    }

    res
      .status(200)
      .json(new ApiResponse(200, result, "student college card is created"));
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

export { createStudentCard, getStudentCard };
