import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
    const data = { message: 'ok' };
    return res.json(data);
});

export default routes;
