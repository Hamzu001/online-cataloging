import connectToMySql from "../db/index.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { getCurrentDateTime } from "../utils/functions.js";

// create new student fine
const createStudentFine = asyncHandler(async (req, res) => {
  const {
    studentId,
    rollNumber,
    fineTitle,
    finePrice,
    fineState,
    reason,
    teacher,
    teacherId,
  } = req.body;

  if (
    [
      studentId,
      rollNumber,
      fineTitle,
      finePrice,
      fineState,
      reason,
      teacher,
      teacherId,
    ].some((field) => field.trim() == "")
  ) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"));
  }

  const date = getCurrentDateTime();

  try {
    const sqlQuery =
      "INSERT INTO `student_fines_list` (`studentId`, `rollNumber`, `fineTitle`, `finePrice`, `fineState`, `reason`, `teacher`, `teacherId`, `date`  ) VALUES (?,?,?,?,?,?,?,?,?)";

    const values = [
      studentId,
      rollNumber,
      fineTitle,
      finePrice,
      fineState,
      reason,
      teacher,
      teacherId,
      date,
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
        .json(
          new ApiResponse(400, null, "insert student fine to mySql-DB error")
        );
    }

    res
      .status(200)
      .json(
        new ApiResponse(200, { success: true }, "new student fine is created")
      );
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

// search fine by student id or roll number
const getStudentFine = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // console.log(id.search("-"));
  try {
    const sqlQuery = `SELECT * FROM student_fines_list WHERE ${
      id?.search("-") > 0 ? "rollNumber=?" : "studentId=?"
    }`;

    const getToDb = new Promise((resolve) => {
      return connectToMySql.query(sqlQuery, [id], (err, result) => {
        resolve({ err, result });
      });
    });

    const { err, result } = await getToDb;

    if (err) {
      return res
        .status(400)
        .json(
          new ApiResponse(400, null, "getting fine data to mySql-DB error")
        );
    }

    if (result.length === 0) {
      return res
        .status(400)
        .json(
          new ApiResponse(400, [], `${id} This Student has no Fine/Warning`)
        );
    }

    res
      .status(200)
      .json(new ApiResponse(200, result, "get student fine details"));
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

// update student fine
const updateStudentFine = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { fineTitle, finePrice, fineState, reason } = req.body;
  // console.log(fineTitle, finePrice, fineState, reason, id);

  try {
    const sqlQuery =
      "UPDATE student_fines_list SET `fineTitle`=?, `finePrice`=?, `fineState`=?, `reason`=? WHERE id=?";

    const values = [fineTitle, finePrice, fineState, reason, id];

    const updateToDb = new Promise((resolve) => {
      return connectToMySql.query(sqlQuery, values, (err, result) => {
        resolve({ err, result });
      });
    });

    const { err, result } = await updateToDb;
    // console.log(err);

    if (err) {
      return res
        .status(400)
        .json(
          new ApiResponse(400, null, "updatting fine detail to mySql-DB error")
        );
    }

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { success: true },
          "update student fine detail successfully"
        )
      );
  } catch (error) {
    // console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

// delete fine item
const deleteStudentFine = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const sqlQuery = "DELETE FROM student_fines_list WHERE id=?";

    const deleteToDb = new Promise((resolve) => {
      return connectToMySql.query(sqlQuery, [id], (err, result) => {
        resolve({ err, result });
      });
    });

    const { err, result } = await deleteToDb;

    if (err) {
      return res
        .status(400)
        .json(
          new ApiResponse(400, null, "deleting student fine to mySql-DB error")
        );
    }

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { success: true },
          "delete student fine successfully"
        )
      );
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

export {
  createStudentFine,
  getStudentFine,
  deleteStudentFine,
  updateStudentFine,
};
