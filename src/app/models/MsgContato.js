import mongoose from 'mongoose';

const MsgContato = new mongoose.Schema({
   nome: {
        type: String        
    },
    email: {
        type: String       
    },   
    assuntoMsg: {
        type: String        
    },
    conteudoMsg: {
        type: String        
    }   
},
{
    timestamps: true,
});


export default mongoose.model('msgcontato', MsgContato);