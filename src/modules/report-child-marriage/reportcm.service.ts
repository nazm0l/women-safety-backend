import { Types } from "mongoose";
import ReportChildMarriageModel from "./reportcm.model";
import {
  TReportChildMarriage,
  TReportChildMarriageStatus,
} from "./reportcm.interface";

/**
 * Add a new child marriage report
 */
const addReport = async (
  description: string,
  address: string,
  evidence: string,
  createdBy: Types.ObjectId,
  status: TReportChildMarriageStatus = "pending"
): Promise<TReportChildMarriage> => {
  const report = await ReportChildMarriageModel.create({
    description,
    address,
    evidence,
    createdBy,
    status,
  });
  return report.toObject();
};

/**
 * Get all child marriage reports (not deleted)
 */
const getAllReports = async (): Promise<TReportChildMarriage[]> => {
  return await ReportChildMarriageModel.find({ isDeleted: false }).lean();
};

/**
 * Get a specific report by ID
 */
const getReportById = async (
  id: string
): Promise<TReportChildMarriage | null> => {
  return await ReportChildMarriageModel.findOne({
    _id: id,
    isDeleted: false,
  }).lean();
};

/**
 * Update a report's status
 */
const updateReportStatus = async (
  id: string,
  status: TReportChildMarriageStatus
): Promise<TReportChildMarriage | null> => {
  return await ReportChildMarriageModel.findOneAndUpdate(
    { _id: id, isDeleted: false },
    { status, updatedAt: new Date() },
    { new: true }
  ).lean();
};

/**
 * Soft delete a report
 */
const deleteReport = async (
  id: string
): Promise<TReportChildMarriage | null> => {
  return await ReportChildMarriageModel.findOneAndUpdate(
    { _id: id },
    { isDeleted: true, updatedAt: new Date() },
    { new: true }
  ).lean();
};

export const ReportChildMarriageService = {
  addReport,
  getAllReports,
  getReportById,
  updateReportStatus,
  deleteReport,
};
