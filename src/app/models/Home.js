import mongoose from 'mongoose';

const Home = new mongoose.Schema({
    topTitulo: {
        type: String
    },
    topSubtitulo: {
        type: String
    },
    topTextBtn: {
        type: String
    },
    topLinkBtn: {
        type: String
    },
    topOriginalName: {
        type: String
    } ,
    topFileName: {
        type: String
    },   
    
    servTitulo: {
        type: String
    },
    servSubtitulo: {
        type: String
    },    
    servUmIcone: {
        type: String
    },
    servUmTitulo: {
        type: String
    },
    servUmDesc: {
        type: String
    },    
    servDoisIcone: {
        type: String
    },
    servDoisTitulo: {
        type: String
    },
    servDoisDesc: {
        type: String
    },
    servTresIcone: {
        type: String
    },
    servTresTitulo: {
        type: String
    },
    servTresDesc: {
        type: String
    },    
},
{
    timestamps: true,
});


export default mongoose.model('home', Home);