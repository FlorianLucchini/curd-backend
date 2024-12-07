import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      default: "",
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    companyName: {
      type: String,
      required: function () {
        return this.role === "admin";
      },
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
