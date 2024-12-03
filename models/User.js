import mongoose from 'mongoose';

const { Schema } = mongoose;

const userSchema = new Schema({
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
    type: String, // Almacena la URL o ruta de la foto
    default: '', // Foto predeterminada
  },
}, { 
  timestamps: true // Esto agrega automáticamente campos createdAt y updatedAt
});

export default mongoose.model('User', userSchema);