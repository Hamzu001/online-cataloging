import connectToMySql from "../db/index.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// create new fine
const studentAllDetail = asyncHandler(async (req, res) => {
  const { id } = req.params;

  try {
    const sqlQuery =
      "SELECT * FROM cards c INNER JOIN student_fines_list f ON c.studentId = f.studentId WHERE c.studentId=?";

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

export { studentAllDetail };
