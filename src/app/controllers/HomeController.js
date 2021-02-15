import Home from '../models/Home';
import Rodape from '../models/Rodape';

class HomeController {

    async show(req, res) {
        const url = "http://localhost:8080/files/home/";
        Home.findOne({}).then((home) => {
            Rodape.findOne({}).then((rodape) => {
                return res.json({
                    error: false,
                    home: home,
                    rodape: rodape,
                    url
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

    async store(req, res) {

        const homeExiste = await Home.findOne({});
        if (homeExiste) {
            return res.status(400).json({
                error: true,
                code: 103,
                message: "Erro: A página home já possui um registro!"
            })
        }

        const dados = {
            "topTitulo": "Um lugar de comunhão, louvor e adoração a Deus!",
            "topSubtitulo": "Buscar-me-eis e me achareis quando me buscardes de todo o vosso coração. Jeremias 29:12-13!.",
            "topTextBtn": "ENTRE EM CONTATO",
            "topLinkBtn": "http://localhost:3000/",
            "topOriginalName": "month.jpg",
            "topFileName": "month.jpg",

            "servTitulo": "Segunda Igreja Batista no Recanto das Emas",
            "servSubtitulo": "Servi ao Senhor com alegria!",
            "servUmIcone": "biking",
            "servUmTitulo": "Nossos Encontros",
            "servUmDesc": "Viver em comunhão é uma marca da nossa comunidade. Venha ser igreja com a gente! Culto de oração - segunda às 8h PG homens - terça às 20h Culto de oração - quarta às 20h Culto de oração - sexta às 16h Culto de celebração - domingo às 19h",
            "servDoisIcone": "running",
            "servDoisTitulo": "Ação Social",
            "servDoisDesc": "Ajudar como Cristo ajudaria e amar como Ele nos ama é a missão do ministério de Ação Social. Seja servindo com doação de alimentos ou roupas, trabalhamos para socorrer ao próximo em sua necessidade.",
            "servTresIcone": "swimmer",
            "servTresTitulo": "Apoio Psicológico",
            "servTresDesc": "Nosso objetivo está em prestar atendimento psicológico à comunidade em geral. Estes são realizados todas as sextas-feiras nas dependências de nossa igreja por um trio de psicólogos preparados para acolher aqueles que nos procuram..",

        }

        await Home.create(dados, (err) => {
            if (err) return res.status(400).json({
                error: true,
                code: 102,
                message: "Erro: Dados da página Home não cadastrado com sucesso!"
            });

            return res.json({
                error: false,
                message: "Dados da página Home cadastrado com sucesso!"
            });
        });
    };
};

export default new HomeController();