const mongoose = require("mongose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  usuNumIden: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  usuPriNombre: {
    type: String,
    require: true,
    trim: true,
  },
  usuSegNombre: {
    type: String,
    trim: true,
  },
  usuPriApellido: {
    type: String,
    require: true,
    trim: true,
  },
  usuSegApellido: {
    type: String,
    trim: true,
  },
  usuEmail: {
    type: String,
    require: true,
    trim: true,
    unique: true,
  },
  usuPass: {
    type: String,
    require: true,
    trim: true,
  },
  usuCel: {
    type: Number,
    trim: true,
  },
  usuFechCreacion: {
    type: Date,
    default: Date.now(),
  },
});
