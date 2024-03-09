import mongoose, { Schema } from "mongoose";

const projectsSchema = new Schema(
  {
    title: String,
    text: String,
    image: String,
    date: Date,
  },
  {
    timestamps: true,
  }
);

const Projects =
  mongoose.models.Projects || mongoose.model("Projects", projectsSchema);

export default Projects;
