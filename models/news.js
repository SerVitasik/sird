import mongoose, {Schema} from "mongoose";

const newsSchema = new Schema(
    {
        title: String,
        text: String,
        image: String,
        date: Date
    }, {
        timestamps: true
    }
);

const News = mongoose.models.News || mongoose.model("News", newsSchema);

export default News;