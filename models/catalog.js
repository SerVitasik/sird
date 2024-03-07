import mongoose, { Schema } from "mongoose";

const catalogSchema = new Schema(
  {
    fullname: String,
    birthdayDate: String,
    higherEducation: String,
    speciality: String,
    qualification: String,
    degree: String,
    academicStatus: String,
    job: String,
    position: String,
    professionalInterests: String,
    topics: String,
    phoneNumber: String,
    email: String,
    facebook: String,
  },
  {
    timestamps: true,
  }
);

const Catalog =
  mongoose.models.Catalog || mongoose.model("Catalog", catalogSchema);

export default Catalog;
