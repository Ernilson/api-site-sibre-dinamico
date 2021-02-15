import mongoose from 'mongoose';

const MsOracao = new mongoose.Schema({
   nome: {
        type: String        
    },
    email: {
        type: String       
    },   
   msg: {
        type: String        
    },
},
{
    timestamps: true,
});


export default mongoose.model('MsOracao', MsOracao);