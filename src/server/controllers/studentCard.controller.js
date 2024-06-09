import connectToMySql from "../db/index.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// create student card
const createStudentCard = asyncHandler(async (req, res) => {
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
      "INSERT INTO `cards` (`name`, `fatherName`, `phoneNumber`, `department`, `joinDate`, `session`, `rollNumber`, `studentImage` ) VALUES (?,?,?,?,?,?,?,?)";

    const values = [
      name,
      fatherName,
      phoneNumber,
      department,
      joinDate,
      session,
      rollNumber,
      req.file.filename,
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
      .json(
        new ApiResponse(
          200,
          { success: true },
          "student college card is created"
        )
      );
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

// get all cards
const getStudentCard = asyncHandler(async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM cards";

    const getToDb = new Promise((resolve) => {
      return connectToMySql.query(sqlQuery, (err, result) => {
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
      .json(new ApiResponse(200, result, "get all student college card"));
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

// search student card by id
const searchStudentCard = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const sqlQuery = "SELECT * FROM cards WHERE `studentId`= ?";

    const searchToDb = new Promise((resolve) => {
      return connectToMySql.query(sqlQuery, [id], (err, result) => {
        resolve({ err, result });
      });
    });

    const { err, result } = await searchToDb;

    if (err) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "search data to mySql-DB error"));
    }

    if (result.length === 0) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "Invalid Student ID"));
    }

    res
      .status(200)
      .json(new ApiResponse(200, result, "search by studentId successfully"));
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

// update card
const updateStudentCard = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const {
    name,
    fatherName,
    phoneNumber,
    department,
    joinDate,
    session,
    rollNumber,
  } = req.body;

  try {
    const sqlQuery =
      "UPDATE cards SET `name`=?, `fatherName`=?, `phoneNumber`=?, `department`=?, `joinDate`=?, `session`=?, `rollNumber`=? WHERE studentId=?";

    const values = [
      name,
      fatherName,
      phoneNumber,
      department,
      joinDate,
      session,
      rollNumber,
      id,
    ];

    const updateToDb = new Promise((resolve) => {
      return connectToMySql.query(sqlQuery, values, (err, result) => {
        resolve({ err, result });
      });
    });

    const { err, result } = await updateToDb;

    if (err) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "updatting data to mySql-DB error"));
    }

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { success: true },
          "update student college card successfully"
        )
      );
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

// delete card
const deleteStudentCard = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const sqlQuery = "DELETE FROM cards WHERE studentId=?";

    const deleteToDb = new Promise((resolve) => {
      return connectToMySql.query(sqlQuery, [id], (err, result) => {
        resolve({ err, result });
      });
    });

    const { err, result } = await deleteToDb;

    if (err) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "deleting data to mySql-DB error"));
    }

    res
      .status(200)
      .json(new ApiResponse(200, { success: true }, "delete successfully"));
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

export {
  createStudentCard,
  getStudentCard,
  updateStudentCard,
  deleteStudentCard,
  searchStudentCard,
};
