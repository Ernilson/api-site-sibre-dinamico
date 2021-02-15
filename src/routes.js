import { Router } from 'express';
import multer from 'multer';
import multerUpImgUsers from './app/middlewares/uploadImgUser';

import LoginController from './app/controllers/LoginController';
import RecuperarSenhaController from './app/controllers/RecuperarSenhaController';
import UserController from './app/controllers/UserController';
import PerfilController from './app/controllers/PerfilController';
import PerfilImagemController from './app/controllers/PerfilImagemController';

import HomeController from './app/controllers/HomeController';
import SobreController from './app/controllers/SobreController';
import ContatoController from './app/controllers/ContatoController';
import MsgContatoController from './app/controllers/MsgContatoController';
import RodapeController from './app/controllers/RodapeController';

import OracaoController from './app/controllers/OracaoController';
import MsOracaoController from './app/controllers/MsOracaoController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const uploadImgUser = multer(multerUpImgUsers);

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);
routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);
routes.delete('/users/:id', authMiddleware, UserController.delete);

routes.get('/perfil', authMiddleware, PerfilController.show);
routes.put('/perfil', authMiddleware, PerfilController.update);
routes.put('/perfil-img', authMiddleware, uploadImgUser.single('file'),  PerfilImagemController.update);

routes.post('/login', LoginController.store);

routes.post('/recuperar-senha', RecuperarSenhaController.store);
routes.get('/recuperar-senha/:recuperarSenha', RecuperarSenhaController.show);
routes.put('/recuperar-senha', RecuperarSenhaController.update);

routes.get('/home', HomeController.show);
routes.post('/home', HomeController.store);

routes.get('/rodape', RodapeController.show);
routes.post('/rodape', RodapeController.store);

routes.get('/sobre', SobreController.index);
routes.post('/sobre', SobreController.store);

routes.get('/contato', ContatoController.show);
routes.post('/contato', ContatoController.store);
routes.post('/msgcontato', MsgContatoController.store);

routes.post('/oracao', OracaoController.store);
routes.get('/oracao', OracaoController.show);

routes.post('/msoracao', MsOracaoController.store);

export default routes;
