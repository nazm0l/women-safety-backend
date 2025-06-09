import { THelpline } from "./helpline.interface";
import HelplineModel from "./helpline.model";

/**
 * Add a new helpline/resource
 */
const addHelpline = async (
  title: string,
  description: string,
  contactNumber: string,
  category: string,
  location: object,
  createdBy: string
): Promise<THelpline> => {
  const helpline = await HelplineModel.create({
    title,
    description,
    contactNumber,
    category,
    location,
    createdBy,
  });
  return helpline;
};

/**
 * Get all helplines/resources
 */
const getHelplines = async (): Promise<THelpline[]> => {
  return await HelplineModel.find();
};

/**
 * Get a specific helpline/resource by ID
 */
const getHelplineById = async (id: string): Promise<THelpline | null> => {
  return await HelplineModel.findById(id);
};

/**
 * Update a helpline/resource
 */
const updateHelpline = async (
  id: string,
  title: string,
  description: string,
  location: object
): Promise<THelpline | null> => {
  return await HelplineModel.findByIdAndUpdate(
    id,
    { title, description, location, updatedAt: Date.now() },
    { new: true }
  );
};

/**
 * Delete a helpline/resource
 */
const deleteHelpline = async (id: string): Promise<THelpline | null> => {
  return await HelplineModel.findByIdAndDelete(id);
};

export const HelplineService = {
  addHelpline,
  getHelplines,
  getHelplineById,
  updateHelpline,
  deleteHelpline,
};
