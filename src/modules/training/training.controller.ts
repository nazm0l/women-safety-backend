import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status-codes";
import { TrainingService } from "./training.service";

// Create a new training video
const addTraining = catchAsync(async (req, res) => {
  const { title, videoURL, createdBy } = req.body;

  const trainingVideo = await TrainingService.addTraining(
    title,
    videoURL,
    createdBy
  );

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Training video added successfully",
    data: trainingVideo,
  });
});

// Get all training videos
const getTrainings = catchAsync(async (req, res) => {
  const trainingVideos = await TrainingService.getTrainings();

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Training videos retrieved successfully",
    data: trainingVideos,
  });
});

// Get a specific training video by ID
const getTrainingById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const trainingVideos = await TrainingService.getTrainingById(id);

  if (!trainingVideos) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Training video not found",
      data: null,
    });
    return;
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Training video retrieved successfully",
    data: trainingVideos,
  });
});

// Update a training video
const updateTraining = catchAsync(async (req, res) => {
  const { id } = req.params;
  const { title, videoURL } = req.body;

  const updatedTraining = await TrainingService.updateTraining(
    id,
    title,
    videoURL
  );

  if (!updatedTraining) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Training video not found",
      data: null,
    });
    return;
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Training video updated successfully",
    data: updatedTraining,
  });
});

// Delete a training video
const deleteTraining = catchAsync(async (req, res) => {
  const { id } = req.params;

  const deletedTraining = await TrainingService.deleteTraining(id);

  if (!deletedTraining) {
    sendResponse(res, {
      statusCode: httpStatus.NOT_FOUND,
      success: false,
      message: "Training video not found",
      data: null,
    });
    return;
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Training video deleted successfully",
    data: null,
  });
});

export const TrainingController = {
  addTraining,
  getTrainings,
  getTrainingById,
  updateTraining,
  deleteTraining,
};
