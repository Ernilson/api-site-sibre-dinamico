import Contato from '../models/Contato';
import Rodape from '../models/Rodape';

class ContatoController{

    async show(req, res){
        Contato.findOne({}).then((contato) => {
            Rodape.findOne({}).then((rodape)=> {
                return res.json({
                    error: false,
                    contato: contato,
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
        const contatoExiste = await Contato.findOne({})
        if(contatoExiste){
            return res.status(400).json({
                error: true,
                code: 103,
                message: "Erro: A página contato já possui um registro!"
            })
        }
        
        const dados ={
            "tituloContato":" Entre em contato....",
            "contribuaComReino":"Contribua com o Reino",
            "bancoAgCont":"Banco-PagSeguro: Nº-290, Agência: 0001, Conta: 051116937 Tipo: Conta de Pagamento, CNPJ: 186855200001/40 - Nº da Chave Pix Aleatório: 9738039b-806d-4fa59b85-261eb3d9d24.",            
            "tituloEndereco":"Endereço",
            "logradouroEnd":"Quadra 105 Area Especial 01",
            "bairroEnd":"Av. Vargem das Benção Recanto das Emas- DF",
            "whatsappCont":"(61)91323236"
        }

        await Contato.create(dados, (err) =>{
            if(err) return res.status(400).json({
                error: true,
                code: 102,
                message: "Erro: Dados da pagina Contatos não cadastrados!"
            });

            return res.json({
                error: false,
                code: 101,
                message: "Dados cadastrados com sucesso!"
            });
        });
    };

};

export default new ContatoController();