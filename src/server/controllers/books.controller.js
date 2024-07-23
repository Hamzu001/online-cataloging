import connectToMySql from "../db/index.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// get all library books
const allLibraryBooks = asyncHandler(async (req, res) => {
  try {
    const sqlQuery = "SELECT * FROM `library_books`";

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

// search library books by title, author, keywords
const searchBookInLibrary = asyncHandler(async (req, res) => {
  const { searchBy, searchInput } = req.body;

  if ([searchBy, searchInput].some((field) => field.trim() == "")) {
    return res
      .status(400)
      .json(new ApiResponse(400, null, "All fields are required"));
  }

  // console.log(searchBy, searchInput);

  try {
    let sqlQuery = "SELECT * FROM library_books";

    if (searchBy === "ALL-CATEGORIES") {
      sqlQuery += " WHERE TITLE LIKE ?";
    }
    else if (searchBy === "TITLE") {
      sqlQuery += " WHERE TITLE LIKE ?";
    }
    else if (searchBy === "AUTHOR") {
      sqlQuery += " WHERE AUTHOR LIKE ?";
    }
    else if (searchBy === "KEYWORDS") {
      sqlQuery += " WHERE keywords LIKE ?";
    }
    else{
      return res
      .status(400)
      .json(new ApiResponse(400, null, "Search for a valid category"));
    }

    const searchToDb = new Promise((resolve) => {
      return connectToMySql.query(
        sqlQuery,
        [`%${searchInput}%`],
        (err, result) => {
          resolve({ err, result });
        }
      );
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
        .json(new ApiResponse(400, null, "This book is not available"));
    }

    res
      .status(200)
      .json(new ApiResponse(200, result, "search by studentId successfully"));
  } catch (error) {
    console.log(error);
    res.status(200).json(new ApiResponse(500, null, "server error"));
  }
});

export { allLibraryBooks, searchBookInLibrary };
