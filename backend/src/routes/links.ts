import {Router} from 'express';
import linksControllers from '../controllers/links';
const router = Router();

//rota para enviar dados
router.post('/links', linksControllers.postLink);

//rota para pegar dados
router.get('/links/:code', linksControllers.hitLink);

//rota para pegar as estatisticas
router.get('/links/:code/stats', linksControllers.getLink);

//exportar as rotas para usar dentro do app.tx
export default router;