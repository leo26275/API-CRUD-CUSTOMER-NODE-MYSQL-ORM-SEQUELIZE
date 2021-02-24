const { Router } = require('express');
const router = Router();
const service = require('../services/customer_service');

router.get('/customers/', (req, res) => {
    service.listar().then(resultado => {
        res.status(resultado.status).json({ status: resultado.status, response: resultado.response })
    });
});

router.get('/customer/:id', (req, res) => {
    service.listByID(req.params.id).then(resultado => {
        res.status(resultado.status).json({ status: resultado.status, response: resultado.response })
    });
});

router.post('/customer', (req, res) => {
    service.add(req.body).then(resultado => {
        res.status(resultado.status).json({ status: resultado.status, response: resultado.response })
    });
});

router.put('/customer', (req, res) => {
    service.updateCustomer(req.body).then(resultado => {
        res.status(resultado.status).json({ status: resultado.status, response: resultado.response })
    });
});

router.delete('/customer/:id', (req, res) => {
    service.deleteCustomer(req.params.id).then(resultado => {
        res.status(resultado.status).json({ status: resultado.status, response: resultado.response })
    });
});

module.exports = router