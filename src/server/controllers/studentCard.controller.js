import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const createStudentCard = asyncHandler(async (req, res) => {
  console.log(req.file.filename);

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

  res
    .status(200)
    .json(
      new ApiResponse(200, { name, fatherName, rollNumber }, "student college card is created")
    );
});

// get student card
const getStudentCard = asyncHandler(async (req, res) => {
  const getStudentDetails = await StudentCard.findOne({
    user: req.user._id,
  }).select("-user -_id");
  res.status(200).json(new ApiResponse(200, getStudentDetails, "Your details"));
});

export { createStudentCard, getStudentCard };
