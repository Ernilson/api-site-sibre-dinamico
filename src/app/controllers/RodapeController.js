import Rodape from '../models/Rodape';

class RodapeController{

    async show(req, res){
        Rodape.findOne({}).then((rodape) => {
            return res.json({
                error: false,
                rodape: rodape
            });
        }).catch((err) => {
            return res.status(400).json({
                error: true,
                code: 101,
                message: "Erro: Não foi possível executar a solicitação!"
            });
        });
    };

    async store(req, res){
        
        const rodapeExiste = await Rodape.findOne({});
        if(rodapeExiste){
            return res.status(400).json({
                error: true,
                code: 103,
                message: "Erro: O radapé já possui um registro!"
            })
        }

        const dados ={
            tituloSibre:" Sibre",
            tituloCont:"Contato",
            cnpjCont:"CNPJ: 186855200001/40",
            telCont:"(61)991323236 ",
            enderCont:"Quadra 105 Area Especial 01, Rec.Emas ",
            tituloRedeSociais:"Rede Sociais",
            tituloInstagran:"Instagran",
            instaLink:"https://www.instagram.com/sibrecanto/?hl=pt-br",
            tituloYoutube:"Youtube",
            youtbLink:"https://www.youtube.com/channel/UCWTywd1HwBLG3mpSI5hAmvg",
            tituloLocaliza:"Localização",
            localizaLink:"https://goo.gl/maps/nB3GEHK9yLHAeEYx8"
            
        }

        await Rodape.create(dados, (err) => {
            if(err) return res.status(400).json({
                error: true,
                code: 102,
                message: "Erro: Erro ao tentar cadastrar o RodaPé"
            });

            return res.json({
                error: false,
                message: "Dados do rodapé cadastrado com sucesso!"
            });
        });
    };
};

export default new RodapeController();