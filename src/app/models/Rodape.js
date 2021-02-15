import mongoose from 'mongoose';

const Rodape = new mongoose.Schema({
    tituloSibre: {
        type: String        
    },
    tituloCont: {
        type: String       
    },
    cnpjCont: {
        type: String       
    } ,
    telCont: {
        type: String       
    },    
    enderCont: {
        type: String
    },
    tituloRedeSociais: {
        type: String        
    },
    tituloInstagran: {
        type: String     
    },
    instaLink: {
        type: String     
    },
    tituloYoutube: {
        type: String     
    },
    youtbLink: {
        type: String     
    },
    tituloLocaliza: {
        type: String     
    },
    localizaLink: {
        type: String     
    }    
},
{
    timestamps: true,
});

export default mongoose.model('rodape', Rodape);