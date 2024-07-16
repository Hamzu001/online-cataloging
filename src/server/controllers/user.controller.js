import connectToMySql from "../db/index.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { emailValidator } from "../utils/functions.js";
import bcrypt from "bcrypt";

const createNewUser = asyncHandler(async (req, res) => {
  const { name, email, department, designation, education, password, isType } =
    req.body;

  if (
    [name, email, department, designation, education, password, isType].some(
      (field) => field.trim() == ""
    )
  ) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"));
  }

  const validateEmail = emailValidator(email);
  if (!validateEmail) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Correct your email"));
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "password aleast 8 characters"));
  }

  // find user already exist or not, if exist can't creat agin
  const sqlQuery = "SELECT * FROM registration WHERE `email`= ? ";
  const insertToDb = new Promise((resolve) => {
    connectToMySql.query(sqlQuery, [email], (err, result) => {
      resolve({ err, result });
    });
  });

  const { err, result } = await insertToDb;

  if (!result.length == 0) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "You are already exist"));
  }

  const generatePasswordHash = await bcrypt.hash(password, 10);

  try {
    const isVerified = "NO-VERIFY";
    const sqlQuery =
      "INSERT INTO `registration` (`name`, `email`, `department`, `designation`, `education`, `password`, `isType`, `isVerified` ) VALUES (?,?,?,?,?,?,?,?)";

    const values = [
      name,
      email,
      department,
      designation,
      education,
      generatePasswordHash,
      isType,
      isVerified,
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
          "New user is Created Successfully"
        )
      );
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

const getUserDetail = asyncHandler(async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM registration";
    const insertToDb = new Promise((resolve) => {
      connectToMySql.query(sqlQuery, (err, result) => {
        resolve({ err, result });
      });
    });

    const { err, result } = await insertToDb;

    if (err) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "get user to mySql-DB error"));
    }

    res.status(200).json(new ApiResponse(200, result, "get all users"));
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

const verifyUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const isVerified = "VERIFY";
    const sqlQuery = "UPDATE registration SET `isVerified`=? WHERE teacherId=?";

    const insertToDb = new Promise((resolve) => {
      connectToMySql.query(sqlQuery, [isVerified, id], (err, result) => {
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
        new ApiResponse(200, { success: true }, "verify user Successfully")
      );
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if ([name, email, password].some((field) => field.trim() == "")) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"));
  }

  const validateEmail = emailValidator(email);
  if (!validateEmail) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "Correct your email"));
  }

  if (password.length < 8) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "password aleast 8 characters"));
  }

  try {
    // fine user exist or not
    const sqlQuery = "SELECT * FROM registration WHERE `email`= ? ";
    const insertToDb = new Promise((resolve) => {
      connectToMySql.query(sqlQuery, [email], (err, result) => {
        resolve({ err, result });
      });
    });

    const { err, result } = await insertToDb;

    if (result.length == 0) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "provide your correct credentials"));
    }

    const comparePassword = await bcrypt.compare(password, result[0].password);
    if (!comparePassword) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "provide your correct credentials"));
    }

    const isUserVerify = result[0].isVerified === "VERIFY";

    if (!isUserVerify) {
      return res
        .status(400)
        .json(new ApiResponse(400, null, "Your are not verify"));
    }

    res
      .status(200)
      .json(
        new ApiResponse(
          200,
          { success: true },
          "Login Successfully"
        )
      );
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});


const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;
  // console.log(id);
  try {
    const sqlQuery = "DELETE FROM registration WHERE teacherId=?";

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

export { createNewUser, getUserDetail, verifyUser, deleteUser, loginUser };
