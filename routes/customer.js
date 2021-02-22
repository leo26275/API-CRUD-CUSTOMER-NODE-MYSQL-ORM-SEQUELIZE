const { Router } = require('express');
const router = Router();
const service = require('../services/customer_service');

router.get('/list', (req, res) => {
    service.listar().then(resultado => {
        res.status(resultado.status).json({ status: resultado.status, response: resultado.response })
    });
});

router.get('/list/:id', (req, res) => {
    service.listByID(req.params.id).then(resultado => {
        res.status(resultado.status).json({ status: resultado.status, response: resultado.response })
    });
});

router.post('/add', (req, res) => {
    service.add(req.body).then(resultado => {
        res.status(resultado.status).json({ status: resultado.status, response: resultado.response })
    });
});

router.put('/update', (req, res) => {
    service.updateCustomer(req.body).then(resultado => {
        res.status(resultado.status).json({ status: resultado.status, response: resultado.response })
    });
});

router.delete('/delete/:id', (req, res) => {
    service.deleteCustomer(req.params.id).then(resultado => {
        res.status(resultado.status).json({ status: resultado.status, response: resultado.response })
    });
});

module.exports = router