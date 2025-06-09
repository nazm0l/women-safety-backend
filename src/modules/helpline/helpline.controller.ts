import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { HelplineService } from "./helpline.service";

// Create a new helpline/resource
const addHelpline = catchAsync(async (req, res) => {
  const { title, description, contactNumber, category, location, createdBy } =
    req.body;

  const helpline = await HelplineService.addHelpline(
    title,
    description,
    contactNumber,
    category,
    location,
    createdBy
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Helpline added successfully",
    data: helpline,
  });
});

// Get all helplines/resources
const getHelplines = catchAsync(async (req, res) => {
  const helplines = await HelplineService.getHelplines();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Helplines retrieved successfully",
    data: helplines,
  });
});

// Get a specific helpline/resource
const getHelplineById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const helpline = await HelplineService.getHelplineById(id);

  if (!helpline) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Helpline not found",
      data: null,
    });
    return;
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Helpline retrieved successfully",
    data: helpline,
  });
});

// Update a helpline/resource
const updateHelpline = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { title, description, location } = req.body;

  const updatedHelpline = await HelplineService.updateHelpline(
    id,
    title,
    description,
    location
  );

  if (!updatedHelpline) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Helpline not found",
      data: null,
    });
    return;
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Helpline updated successfully",
    data: updatedHelpline,
  });
});

// Delete a helpline/resource
const deleteHelpline = catchAsync(async (req, res) => {
  const { id } = req.params;

  const deletedHelpline = await HelplineService.deleteHelpline(id);

  if (!deletedHelpline) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Helpline not found",
      data: null,
    });
    return;
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Helpline deleted successfully",
    data: null,
  });
});

export const HelplineController = {
  addHelpline,
  getHelplines,
  getHelplineById,
  updateHelpline,
  deleteHelpline,
};
