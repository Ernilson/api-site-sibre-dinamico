import nodemailer from 'nodemailer';
import configEmail from '../../config/email';

import MsgContato from '../models/MsgContato';

class MsgContatoController{

    async store(req, res){       
        /*
        const dados ={
            "nome":" Ernilson Daniel Lima de Souza",
            "email":"ernilson25@gmail.com",
            "amsg":"teste de validação",
            "msg":"Este é um teste de validação da tabela msgcontato"            
        }
*/
        await MsgContato.create(req.body, (err) =>{
            if(err) return res.status(400).json({
                error: true,
                code: 102,
                message: "Erro: Dados da pagina MsgContatos não cadastrados!"
            });
 
            var transport = nodemailer.createTransport({
                host: configEmail.host,
                port: configEmail.port,
                auth: {
                    user: configEmail.user,
                    pass: configEmail.pass,
                }
            });

            const { nome, email, assuntoMsg, conteudoMsg } = req.body;

            var emailHtml = 'Prezado(a) ' + nome + '<br><br> Recebi a sua mensagem<br><br>Em breve estaremos respondendo';

            var emailTexto = 'Prezado(a) ' + nome + '\n\nRecebi a sua mensagem\n\nEm breve estaremos respondendo';

            var emailSerEnviado = {
                from: configEmail.from,
                to: email,
                subject: 'Recebi a sua mensagem',
                html: emailHtml,
                text: emailTexto
            }

            transport.sendMail(emailSerEnviado, function (error) {

                var emailHtmlAdm = 'Nova mensagem de contato<br><br>Nome: ' + nome + '<br>E-mail: ' + email + '<br>Assunto: ' + assuntoMsg + '<br>Conteúdo: ' + conteudoMsg;

                var emailTextoAdm = 'Nova mensagem de contato\n\nNome: ' + nome + '\nE-mail: ' + email + '\nAssunto: ' + assuntoMsg + '\nConteúdo: ' + conteudoMsg;

                var emailSerEnviado = {
                    from: configEmail.from,
                    to: configEmail.from,
                    subject: 'Nova mensagem',
                    html: emailHtmlAdm,
                    text: emailTextoAdm
                }

                transport.sendMail(emailSerEnviado, function (error) {

                });                
            });

            return res.json({
                error: false,
                code: 101,
                message: "Dados cadastrados com sucesso!"
            });
        });
    };

};

export default new MsgContatoController();