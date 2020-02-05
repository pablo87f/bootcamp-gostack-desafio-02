import { Router } from 'express';
import SessionController from './app/controllers/session.controller';

const routes = new Router();

routes.get('/status', (req, res) => res.json({ status: 'ok' }));

routes.post('/sessions', SessionController.store);

export default routes;
