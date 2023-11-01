import mongoose, {Schema} from "mongoose";

const announcementSchema = new Schema(
    {
        title: String,
        text: String,
        date: Date
    }, {
        timestamps: true
    }
);

const Announcements = mongoose.models.Announcements || mongoose.model("Announcements", announcementSchema);

export default Announcements;