import mongoose from "mongoose";

//TODO: UPDATE FOR CONSISTENCY
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    bannerImg: { type: String, default: "" },
    headline: { type: String, default: "" },
    homeTown: { type: String, default: "" },
    about: { type: String, default: "" },
    skills: [String],
    education: [
      {
        school: String,
        fieldOfStudy: String,
        startYear: Number,
        endYear: Number,
      }
    ],
    connections: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      }
    ],
}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;