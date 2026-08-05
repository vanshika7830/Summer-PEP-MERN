import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    instructorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    price: {
        type: Number,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    level: {
        type: String,
        enum: ["beginner", "intermediate", "advanced"],
        required: true,
    },
    imageUrl: {
        type: String,       
        required: true,
    },

})

export default mongoose.model("Course", courseSchema);