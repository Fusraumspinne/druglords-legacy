import mongoose, { Schema, models } from "mongoose";

const counterSchema = new Schema(
    {
        counter: {
            type: Number,
            required: true
        }
    },
    { timestamps: true }
)

const Counter = models.Counter || mongoose.model("Counter", counterSchema)

export default Counter