import connectToMySql from "../db/index.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// create new fine
const createStudentFine = asyncHandler(async (req, res) => {
  const { studentId, fineTitle, finePrice, fineState } = req.body;

  if (
    [studentId, fineTitle, finePrice, fineState].some(
      (field) => field.trim() == ""
    )
  ) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"));
  }

  try {
    const sqlQuery =
      "INSERT INTO `student_fines_list` (`studentId` ,`fineTitle`, `finePrice`, `fineState`) VALUES (?,?,?,?)";

    const values = [studentId, fineTitle, finePrice, fineState];

    const insertToDb = new Promise((resolve) => {
      connectToMySql.query(sqlQuery, values, (err, result) => {
        resolve({ err, result });
      });
    });

    const { err, result } = await insertToDb;

    if (err) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "insert student fine to mySql-DB error"));
    }

    res
      .status(200)
      .json(new ApiResponse(200, { success: true }, "new student fine is created"));
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

// search fine by student id
const getFine = asyncHandler(async (req, res) => {
  const { id } = req.params
  try {
    const sqlQuery = "SELECT * FROM student_fines_list WHERE studentId=?";

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

    res.status(200).json(new ApiResponse(200, result, "get student fine details"));
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

// update fine
const updateFine = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { fineTitle, finePrice } = req.body;

  try {
    const sqlQuery =
      "UPDATE fine_details SET `fineTitle`=?, `finePrice`=? WHERE id=?";

    const values = [fineTitle, finePrice, id];

    const updateToDb = new Promise((resolve) => {
      return connectToMySql.query(sqlQuery, values, (err, result) => {
        resolve({ err, result });
      });
    });

    const { err, result } = await updateToDb;

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
          "update fine detail successfully"
        )
      );
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

// delete fine item
const deleteFine = asyncHandler(async (req, res) => {
  const { id } = req.params;
  try {
    const sqlQuery = "DELETE FROM fine_details WHERE id=?";

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

export { createStudentFine, getFine };
