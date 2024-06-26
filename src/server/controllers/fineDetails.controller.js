import connectToMySql from "../db/index.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// create new fine
const createFine = asyncHandler(async (req, res) => {
  const { fineTitle, finePrice} = req.body;

  if ([fineTitle, finePrice].some((field) => field.trim() == "")) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"));
  }

  try {
    const sqlQuery = "INSERT INTO `fine_details` (`fineTitle`, `finePrice`) VALUES (?,?)";

    const values = [fineTitle, finePrice];

    const insertToDb = new Promise((resolve) => {
      connectToMySql.query(sqlQuery, values, (err, result) => {
        resolve({ err, result });
      });
    });

    const { err, result } = await insertToDb;

    if (err) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "insert fine to mySql-DB error"));
    }

    res
      .status(200)
      .json(new ApiResponse(200, { success: true }, "new fine is created"));
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

// get all fine
const getFine = asyncHandler(async (_, res) => {
  try {
    const sqlQuery = "SELECT * FROM fine_details";

    const getToDb = new Promise((resolve) => {
      return connectToMySql.query(sqlQuery, (err, result) => {
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

    res.status(200).json(new ApiResponse(200, result, "get all fine details"));
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
    const sqlQuery = "UPDATE fine_details SET `fineTitle`=?, `finePrice`=? WHERE id=?";

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
        .json(new ApiResponse(400, null, "deleting student fine to mySql-DB error"));
    }

    res
      .status(200)
      .json(new ApiResponse(200, { success: true }, "delete student fine successfully"));
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});



export { createFine, getFine, updateFine, deleteFine };
