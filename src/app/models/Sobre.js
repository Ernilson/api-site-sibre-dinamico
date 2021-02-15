import mongoose from 'mongoose';

const Sobre = new mongoose.Schema({
    titulo: {
        type: String
    },
    descricao: {
        type: String
    },
    originalName: {
        type: String
    },
    fileName: {
        type: String
    }
},
{
    timestamps: true,
});


export default mongoose.model('sobre', Sobre);