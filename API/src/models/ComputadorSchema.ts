import { model, Schema } from "mongoose";

const computadorSchema = new Schema(
  {
    dono: {
      type: String,
      required: [true, "O campo dono é obrigatório!"],
      unique: true
    },
    placamae: {
      type: String,
      required: [true, "O campo placamae é obrigatório!"],
    },
    processador: {
      type: String,
      required: [true, "O campo processador é obrigatório!"],
    },
    memoria: {
      type: Number,
      required: [true, "O campo memoria é obrigatório!"],
    },
    armazenamento: {
      type: String,
      required: [true, "O campo armazenamento é obrigatório!"],
    },
    fonte: {
      type: String,
      required: [true, "O campo fonte é obrigatório!"],
    },
  },
  {
    timestamps: true,
  }
);

export default model("modeloComputadores", computadorSchema);
