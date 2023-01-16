import mongoose from "mongoose";

// Model for the schema
const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: "Title is a required property.",
    },
    description: {
      type: String,
      required: "Description is a required property.",
    },
    createdDate: {
      type: Date,
      default: Date.now,
    },
    dueDate: {
      type: String,
      default: Date.now,
    },
    dueTime: {
      type: String,
      default: Date.now,
    },
    lastModifiedDate: {
      type: Date,
      default: Date.now,
    },

    completed: {
      type: Boolean,
      default: false,
      required: "Completed is a required property.",
    },
  },
  {
    versionKey: false,
  }
);

const model = mongoose.model("todos", todoSchema);

export default model;
