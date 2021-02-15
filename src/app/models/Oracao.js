import mongoose from 'mongoose';

const Oracao = new mongoose.Schema({
   tituloOraiSem: {
        type: String        
    },
    subtituloOracao: {
        type: String       
    },   
   subtituloNossosEnc: {
        type: String        
    },
    textoNossosEnc: {
        type: String        
    },
    textoPedi: {
        type: String        
    }     
},
{
    timestamps: true,
});


export default mongoose.model('oracao', Oracao);