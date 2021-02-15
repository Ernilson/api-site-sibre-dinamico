import Oracao from '../models/Oracao';
import Rodape from '../models/Rodape';

class OracaoController{

    async show(req, res){
        Oracao.findOne({}).then((oracao) => {
            Rodape.findOne({}).then((rodape)=> {
                return res.json({
                    error: false,
                    oracao: oracao,
                    rodape: rodape
                });
            }).catch((err) => {
                return res.status(400).json({
                    error: true,
                    code: 106,
                    message: "Erro: Não foi possível executar a solicitação!"
                });
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
        const oracaoExiste = await Oracao.findOne({})
        if(oracaoExiste){
            return res.status(400).json({
                error: true,
                code: 103,
                message: "Erro: A página contato já possui um registro!"
            })
        }

        const dados ={
            "tituloOraiSem":" Orai sem cessar.",
            "subtituloOracao":"A oração dos justos podem muito em seus efeitos - Tiago 5:16.",
            "subtituloNossosEnc":"Nossos encontro de oração.",            
            "textoNossosEnc":"Nossos encontros de orações são nas segunda as 08:00hrs quarta as 20:00 e sexta as 16:hrs nestes encontros nossas equipes de oração estaram orando por seus pedidos no altar intercedendo e clamando ao Deus Altissimo que não tardará em atende-lo, por tanto faça seu pedido e conte com o apoio da Sibre",
            "textoPedi":"Pedi, e dar-se-vos-á; buscai, e encontrareis; batei, e abrir-se-vos-á... Mateus 7:7",
        }
        
        await Oracao.create(dados, (err) =>{
            if(err) return res.status(400).json({
                error: true,
                code: 102,
                message: "Erro: Dados da pagina Oração não cadastrados!"
            });

            return res.json({
                error: false,
                code: 101,
                message: "Dados cadastrados com sucesso!"
            });
        });
    };

};

export default new OracaoController();