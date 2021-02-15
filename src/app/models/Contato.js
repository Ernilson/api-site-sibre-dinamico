import mongoose from 'mongoose';

const Contato = new mongoose.Schema({
    tituloContato: {
        type: String        
    },
    contribuaComReino: {
        type: String       
    },
    bancoAgCont: {
        type: String       
    },   
    tituloEndereco: {
        type: String        
    }, 
    ogradouroEnd: {
        type: String        
    },
    bairroEnd: {
        type: String        
    }, 
    whatsappCont: {
        type: String        
    }  
},
{
    timestamps: true,
});


export default mongoose.model('contato', Contato);