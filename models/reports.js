import mongoose, { Schema } from "mongoose";

const reportSchema = new Schema(
  {
    title: String,
    text: String,
  },
  {
    timestamps: true,
  }
);

const Reports =
  mongoose.models.Reports || mongoose.model("Reports", reportSchema);

export default Reports;
