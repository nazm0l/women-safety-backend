import { TTraining } from "./training.interface";
import TrainingModel from "./training.model";

/**
 * Add a new training video
 */
const addTraining = async (
  title: string,
  videoURL: string,
  createdBy: string
): Promise<TTraining> => {
  const training = await TrainingModel.create({
    title,
    videoURL,
    createdBy,
  });
  return training;
};

/**
 * Get all training videos
 */
const getTrainings = async (): Promise<TTraining[]> => {
  return await TrainingModel.find();
};

/**
 * Get a specific training video by ID
 */
const getTrainingById = async (id: string): Promise<TTraining | null> => {
  return await TrainingModel.findById(id);
};

/**
 * Update a training video
 */
const updateTraining = async (
  id: string,
  title: string,
  videoURL: string
): Promise<TTraining | null> => {
  return await TrainingModel.findByIdAndUpdate(
    id,
    { title, videoURL, updatedAt: Date.now() },
    { new: true }
  );
};

/**
 * Delete a training video
 */
const deleteTraining = async (id: string): Promise<TTraining | null> => {
  return await TrainingModel.findByIdAndDelete(id);
};

export const TrainingService = {
  addTraining,
  getTrainings,
  getTrainingById,
  updateTraining,
  deleteTraining,
};
